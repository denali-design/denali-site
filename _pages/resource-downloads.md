---
permalink: /resource-downloads
section: "resources"
title: "Resource Downloads"
layout: framed
gitcontent: true
excerpt: 'These downloads, links, and themes are provided to help you and your team easily build products with the Denali framework.'

sections:
  - header: 'Icons'
    text: 'Download the open source icon set in SVG format or as an icon font. This section will soon be deprecated please go to <a href="https://github.com/denali-design/denali-icon-font" target="_blank">Denali Icons Repo</a>'
    example: 'resources/font-download.html'
  - header: 'UI Kit'
    text: 'Download the sketch file containing all our UI elements.'
    example: 'resources/design-download.html'
  - header: 'Templates'
    text: 'Browse through our pre-made templates to assist you in finding the right fit for your products'
    example: 'resources/templates-download.html'

---

# {{ page.title }}
{{ page.excerpt }}

{% for section in page.sections %}
***


### {{ section.header }}
{% if section.text %}
{{ section.text }}
{% endif %}
{% if section.example %}
{% include {{ section.example }} %}
{% endif %}

{% endfor %}
