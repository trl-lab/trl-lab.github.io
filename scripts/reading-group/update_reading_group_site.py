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
class ReadingGroupSession:
    """A reading group session."""
    date: datetime
    paper: Paper
    chair: str
    chair_email: str
    notes: Optional[str] = None

def load_sessions(json_path: str) -> List[ReadingGroupSession]:
    with open(json_path, 'r') as f:
        sessions_data = json.load(f)
    return [
        ReadingGroupSession(
            date=datetime.strptime(session['date'], DATE_FORMAT),
            paper=Paper(**session['paper']),
            chair=session['chair'],
            chair_email=session['chair_email'],
            notes=session.get('notes')
        )
        for session in sessions_data
    ]

def generate_markdown(template_path: str, sessions: List[ReadingGroupSession]):
    # Sort sessions by date
    sessions.sort(key=lambda s: s.date)
    upcoming_sessions = [s for s in sessions if s.date >= datetime.now()]
    past_sessions = [s for s in sessions if s.date < datetime.now()]

    # Load template
    with open(template_path, 'r') as f:
        template = Template(f.read())

    # Render template
    rendered_content = template.render(
        upcoming_sessions=upcoming_sessions,
        past_sessions=past_sessions,
        format_authors=lambda paper: paper.formatted_authors(),  # Pass helper function to template
        current_year=datetime.now().year
    )

    # Save output
    output_file = Path("_pages/trl-reading-group.md")
    with open(output_file, 'w') as f:
        f.write(rendered_content)

if __name__ == "__main__":
    sessions = load_sessions("scripts/reading-group/sessions.json")
    generate_markdown(
        template_path="scripts/reading-group/page_template.md",
        sessions=sessions
    )
