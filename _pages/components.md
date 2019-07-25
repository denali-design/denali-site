---
title: "Components"
permalink: /components/
layout: framed
gitcontent: true
---

# {{ page.title }}

{% for post in site.components %}
  {% assign base_path = site.url | append: site.baseurl %}
  {% include archive-single.html %}
{% endfor %}