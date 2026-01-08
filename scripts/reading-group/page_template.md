---
layout: default
title: TRL reading group
permalink: /trl-reading-group/
nav: false
collection: books
---

# ALOT - Amsterdam Lunch On Table

## Description

Amsterdam Lunch on Table (ALOT) is a **reading group focussed on table representation learning** and generally neural
models for structured data that takes place on every first and third Wednesday of the month over lunch (at 12:00). Our
objective is to foster a collaborative environment where researchers from the Amsterdam region can discuss and explore
the intersection of AI and structured data. Each session is designed to be interactive, encouraging participants to
engage in discussions that deepen their understanding of the latest research and methodologies. Through these sessions,
we aim to inspire research ideas, support growth as researcher, and facilitate networking opportunities within the
community.

From the start of 2026 we are introducing themes: Series of 3-5 reading group sessions on a specific sub-topic within
the domain of AI for tabular data. We start the year with _Agentic Winter_ which focuses on agentic approaches on
tabular data.

---

<details open>
<summary><strong>Where & when?</strong></summary>
<ul>
    <li><strong>When:</strong> Every first and third Wednesday of the month at 12:00 (over lunch)</li>
    <li><strong>Where:</strong> Centrum Wiskunde & Informatica (CWI), room L302 (Science Park 123, 1098 XG Amsterdam)</li>
</ul>
Please respond to our message on Discord if you are joining so we can pick you up at the CWI entrance. We are
considering to move the location to the UvA campus at Science Park to make it more accessible for everyone. We will keep
you updated on this!
</details>

---

<details>
<summary><strong>How it works</strong></summary>
We discuss one paper in each session. The paper is selected by the group and is announced at least a week in advance.
One person is responsible for chairing the session and preparing a short introduction to the paper.
The session chair is also responsible for facilitating the discussion and ensuring that everyone has a chance to
contribute. We expect participants to read the paper in advance and send some questions or discussion points to the
session chair to enable a more comprehensive and engaging discussion.<br>

We are meeting for our reading group over lunch, and we encourage people to eat while we are discussing the paper. We
have catered lunch for the group, so you don't have to bring your own lunch. Please indicate if you are coming to the
session on the announcement on Discord so we can order enough food for everyone!

</details>

---

**Want to join the reading group?** Then join the [ALOT Discord channel](https://discord.gg/fSgyRFqCDB). We manage
the reading group via Discord and will announce the papers and sessions there.

---

## Next Session

{% if upcoming_sessions %}
The next session of the ALOT reading group will take place on **{{ upcoming_sessions[0].date.strftime('%A, %B %d, %Y at %H:%M') }}** and we will discuss:

_**Paper:** [{{ upcoming_sessions[0].paper.title }}]({{ upcoming_sessions[0].paper.url }})_\
_**Authors:** {{ format_authors(upcoming_sessions[0].paper) }}_\
_**Venue:** {{ upcoming_sessions[0].paper.venue }} ({{ upcoming_sessions[0].paper.year }})_\
_**Session Chair:** [{{ upcoming_sessions[0].chair }}](mailto:{{ upcoming_sessions[0].chair_email }})_

<details>
<summary>Abstract</summary>
{{ upcoming_sessions[0].paper.abstract }}
</details>

{% if upcoming_sessions[0].notes %}
_**Note:** {{ upcoming_sessions[0].notes }}_
{% endif %}

{% else %}
_No upcoming sessions scheduled at the moment. Stay tuned for updates!_
{% endif %}

{% if themes %}
{% if themes|length > 0 %}

---

## Current Theme

{% set current_theme = themes[0] %}

### {{ current_theme.theme.name }}

{% if current_theme.theme.cover_path %}
{% raw %}{% include figure.liquid loading="eager" path="{% endraw %}{{ current_theme.theme.cover_path }}{% raw %}" sizes="600px" class="card-img-top" %}{% endraw %}
{% endif %}

<p>{{ current_theme.theme.description }}</p>

{% if current_theme.sessions and current_theme.sessions|length > 0 %}
<details open>
<summary><strong>Sessions in this theme ({{ current_theme.sessions|length }})</strong></summary>
{% for session in current_theme.sessions %}
<details style="margin-left: 50px;">
<summary><strong>{{ session.date.strftime('%A, %B %d, %Y') }} - {{ session.paper.title }}</strong></summary>
<ul>
    <li><strong>Title: </strong> <a href="{{ session.paper.url }}"> {{ session.paper.title }} </a> </li>
    <li><strong>Authors:</strong> {{ format_authors(session.paper) }}</li>
    <li><strong>Venue:</strong> {{ session.paper.venue }} ({{ session.paper.year }})</li>
    <li><strong>Session Chair:</strong> <a href="mailto:{{ session.chair_email }}"> {{ session.chair }} </a></li>
</ul>
<p><strong>Abstract:</strong> {{ session.paper.abstract }}</p>
{% if session.notes %}
<p><strong>Notes:</strong> {{ session.notes }}</p>
{% endif %}
{% if session.blog %}
<p><a href="{{ session.blog }}">Synopsis of Reading Group Session</a></p>
{% endif %}
</details>
{% endfor %}
</details>
{% endif %}

{% endif %}

{% if themes|length > 1 %}

### Past Themes

<details>
<summary><strong>View past themes ({{ themes|length - 1 }})</strong></summary>

{% for theme in themes[1:] %}

<h4>{{ theme.theme.name }}</h4>

{% if theme.theme.cover_path %}
{% raw %}{% include figure.liquid loading="eager" path="{% endraw %}{{ theme.theme.cover_path }}{% raw %}" sizes="400px" class="card-img-top" %}{% endraw %}
{% endif %}

<p>{{ theme.theme.description }}</p>

{% if theme.sessions and theme.sessions|length > 0 %}
<details>
<summary><strong>Sessions in this theme ({{ theme.sessions|length }})</strong></summary>
{% for session in theme.sessions %}
<details style="margin-left: 50px;">
<summary><strong>{{ session.date.strftime('%A, %B %d, %Y') }} - {{ session.paper.title }}</strong></summary>
<ul>
    <li><strong>Title: </strong> <a href="{{ session.paper.url }}"> {{ session.paper.title }} </a> </li>
    <li><strong>Authors:</strong> {{ format_authors(session.paper) }}</li>
    <li><strong>Venue:</strong> {{ session.paper.venue }} ({{ session.paper.year }})</li>
    <li><strong>Session Chair:</strong> <a href="mailto:{{ session.chair_email }}"> {{ session.chair }} </a></li>
</ul>
<p><strong>Abstract:</strong> {{ session.paper.abstract }}</p>
{% if session.notes %}
<p><strong>Notes:</strong> {{ session.notes }}</p>
{% endif %}
{% if session.blog %}
<p><a href="{{ session.blog }}">Synopsis of Reading Group Session</a></p>
{% endif %}
</details>
{% endfor %}
</details>
{% endif %}

{% endfor %}

</details>

{% endif %}

{% endif %}

---

## Previous Sessions

{% if past_sessions %}

<div style="margin-bottom: 20px;">
    <label for="session-filter">Search past sessions: </label>
    <input type="text" id="session-filter" placeholder="Type to search sessions..." style="padding: 8px; width: 300px; border: 1px solid #ddd; border-radius: 4px;">
    <button onclick="resetSessionFilter()" style="padding: 8px 16px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;">Reset</button>
</div>

<div id="session-counter" style="margin-bottom: 15px; font-style: italic;">
    Showing <span id="visible-sessions">{{ past_sessions|length }}</span> of <span id="total-sessions">{{ past_sessions|length }}</span> sessions
</div>

{% for year, sessions_by_year in past_sessions | groupby('date.year') | reverse %}

<div class="session-year" data-year="{{ year }}">
<details {% if year == current_year %}open{% endif %}>
<summary><strong>{{ year }}</strong></summary>
{% for session in sessions_by_year %}
<div class="session-item" data-session-title="{{ session.paper.title|lower }}" data-session-authors="{{ format_authors(session.paper)|lower }}">
<details style="margin-left: 50px;">
<summary><strong>{{ session.date.strftime('%A, %B %d, %Y') }} - {{ session.paper.title }}</strong></summary>
<ul>
    <li><strong>Title: </strong> <a href="{{ session.paper.url }}"> {{ session.paper.title }} </a> </li>
    <li><strong>Authors:</strong> {{ format_authors(session.paper) }}</li>
    <li><strong>Venue:</strong> {{ session.paper.venue }} ({{ session.paper.year }})</li>
    <li><strong>Session Chair:</strong> <a href="mailto:{{ session.chair_email }}"> {{ session.chair }} </a></li>
</ul>
<p><strong>Abstract:</strong> {{ session.paper.abstract }}</p>
{% if session.notes %}
<p><strong>Notes:</strong> {{ session.notes }}</p>
{% endif %}
{% if session.blog %}
<p><a href="{{ session.blog }}">Synopsis of Reading Group Session</a></p>
{% endif %}
</details>
</div>
{% endfor %}
</details>
</div>
{% endfor %}

<script>
// Session filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterInput = document.getElementById('session-filter');
    const sessionItems = document.querySelectorAll('.session-item');
    const visibleCounter = document.getElementById('visible-sessions');
    const totalCounter = document.getElementById('total-sessions');
    
    if (filterInput) {
        filterInput.addEventListener('input', function() {
            const filterText = this.value.toLowerCase();
            let visibleCount = 0;
            
            sessionItems.forEach(item => {
                const title = item.getAttribute('data-session-title');
                const authors = item.getAttribute('data-session-authors');
                
                if (title.includes(filterText) || authors.includes(filterText)) {
                    item.style.display = 'block';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });
            
            visibleCounter.textContent = visibleCount;
        });
    }
});

function resetSessionFilter() {
    const filterInput = document.getElementById('session-filter');
    if (filterInput) {
        filterInput.value = '';
        const event = new Event('input');
        filterInput.dispatchEvent(event);
    }
}
</script>

<style>
.session-item {
    margin-bottom: 15px;
}
</style>

{% else %}
_No previous sessions yet. Check back after the first session!_
{% endif %}
