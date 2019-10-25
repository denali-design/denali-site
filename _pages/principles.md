---
title: "Principles"
permalink: /principles/
layout: framed
gitcontent: true
---

# {{ page.title }}

{% for post in site.aesthetics %}
  {% assign base_path = site.url | append: site.baseurl %}
  {% include archive-single.html %}
{% endfor %}
