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

---

<details open>
<summary><strong>Where & when?</strong></summary>
<ul>
    <li><strong>When:</strong> Every first and third Wednesday of the month at 12:00 (over lunch)</li>
    <li><strong>Where:</strong> For now, Centrum Wiskunde & Informatica (CWI), room L302 (Science Park 123, 1098 XG Amsterdam)</li>
</ul>
Please respond to our message on Discord if you are joining so we can pick you up at the CWI entrance. In the future,
we plan to move the location to the UvA campus at Science Park to make it more accessible for everyone. We will keep you
updated on this!
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
_**Session Chair:** [{{ upcoming_sessions[0].chair }}]({{ upcoming_sessions[0].chair_email }})_

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

---

## Previous Sessions

{% if past_sessions %}
{% for year, sessions_by_year in past_sessions | groupby('date.year') | reverse %}
<details {% if year == current_year %}open{% endif %}>
<summary><strong>{{ year }}</strong></summary>
{% for session in sessions_by_year %}
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
</details>
{% endfor %}
</details>
<hr/>
{% endfor %}
{% else %}
_No previous sessions yet. Check back after the first session!_
{% endif %}

