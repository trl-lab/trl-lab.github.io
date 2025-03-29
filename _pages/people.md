---
layout: page
title: People
permalink: /people/
description: Members and collaborators of the TRL lab
display_categories: ["current", "collaborators", "alumni"]
nav: true
nav_order: 2
---

<!-- pages/people.md -->
<div class="people">
  <!-- Display categorized projects -->
{% for category in page.display_categories %}
<a id="{{ category }}" href=".#{{ category }}">
  <h2 class="category">{{ category }}</h2>
</a>
{% assign categorized_people = site.people | where: "category", category %}
{% assign sorted_people = categorized_people | sort: "importance" %}
<!-- Generate cards for each project -->
<div class="row row-cols-1 row-cols-md-3">
  {% for people in sorted_people %}
    {% include people.liquid %}
  {% endfor %}
</div>
{% endfor %}
</div>