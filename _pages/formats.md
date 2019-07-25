---
title: "Formats"
permalink: /formats/
layout: framed
gitcontent: true
---

# {{ page.title }}

{% for post in site.formats %}
  {% assign base_path = site.url | append: site.baseurl %}
  {% include archive-single.html %}
{% endfor %}
