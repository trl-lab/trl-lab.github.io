import json
from pathlib import Path
from datetime import datetime
from jinja2 import Template
from dataclasses import dataclass
from typing import Optional, List

DATE_FORMAT = "%Y-%m-%dT%H:%M:%S"

@dataclass
class Paper:
    """A paper in the reading group."""
    title: str
    authors: List[str]
    url: str
    year: int
    venue: str
    abstract: str

    def formatted_authors(self) -> str:
        """Format authors list to show 'First Author et al.' if there are more than two authors."""
        if len(self.authors) > 2:
            return f"{self.authors[0]} et al."
        return ", ".join(self.authors)

@dataclass
class Theme:
    """A theme of reading group sessions."""
    id: str
    name: str
    cover_path: str
    description: str
    date: datetime

    def __hash__(self):
        return hash(self.id)

@dataclass
class ReadingGroupSession:
    """A reading group session."""
    date: datetime
    paper: Paper
    chair: str
    chair_email: str
    notes: Optional[str] = None
    blog: Optional[str] = None
    theme_id: Optional[str] = None

@dataclass
class ThemeItem:
    theme: Theme
    sessions: List[ReadingGroupSession]

def load_sessions(json_path: str) -> List[ReadingGroupSession]:
    with open(json_path, 'r') as f:
        sessions_data = json.load(f)
    return [
        ReadingGroupSession(
            date=datetime.strptime(session['date'], DATE_FORMAT),
            paper=Paper(**session['paper']),
            chair=session['chair'],
            chair_email=session['chair_email'],
            notes=session.get('notes'),
            blog = session.get('blog', None),
            theme_id = session.get('theme_id', None)
        )
        for session in sessions_data
    ]

def load_themes(json_path: str) -> List[Theme]:
        with open(json_path, 'r') as f:
                themes_data = json.load(f)
        return [
            Theme(
                id=theme['id'],
                name=theme['name'],
                cover_path=theme['cover_path'],
                description=theme['description'],
                date=datetime.strptime(theme['date'], DATE_FORMAT),
            )
            for theme in themes_data
        ]

def generate_markdown(template_path: str, sessions: List[ReadingGroupSession], themes: List[Theme]):
    # Sort sessions by date
    sessions.sort(key=lambda s: s.date)
    themes.sort(key=lambda t: t.date)
    upcoming_sessions = [s for s in sessions if s.date >= datetime.now()]
    past_sessions = [s for s in sessions if s.date < datetime.now()]

    # Group sessions by theme_id
    themed_sessions = {}
    for s in sessions:
        if s.theme_id:
            if s.theme_id in themed_sessions:
                themed_sessions[s.theme_id].append(s)
            else:
                themed_sessions[s.theme_id] = [s]

    # Create theme items with associated sessions
    theme_items = []
    for theme in themes:
        theme_sessions = themed_sessions.get(theme.id, [])
        # Sort sessions by date within each theme
        theme_sessions.sort(key=lambda s: s.date)
        theme_items.append(ThemeItem(theme, theme_sessions))

    # Load template
    with open(template_path, 'r') as f:
        template = Template(f.read())

    # Render template
    rendered_content = template.render(
        upcoming_sessions=upcoming_sessions,
        past_sessions=past_sessions,
        format_authors=lambda paper: paper.formatted_authors(),  # Pass helper function to template
        current_year=datetime.now().year,
        themes=theme_items
    )

    # Save output
    output_file = Path("_pages/trl-reading-group.md")
    with open(output_file, 'w') as f:
        f.write(rendered_content)

if __name__ == "__main__":
    sessions = load_sessions("scripts/reading-group/sessions.json")
    themes = load_themes("scripts/reading-group/themes.json")
    generate_markdown(
        template_path="scripts/reading-group/page_template.md",
        sessions=sessions,
        themes=themes
    )
