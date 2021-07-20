---
layout: page
subtitle: Meeting notes
title: What was
lead: Meeting notes to come
---

{% for page in site.pages %}
  {% if page.category == "meeting_note" %}
  <li>
    <a href="{{ page.url }}">{{ page.title }}</a>
  </li>
  {% endif %}
{% endfor %}
