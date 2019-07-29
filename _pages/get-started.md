---
permalink: /documentation/get-started
section: "resources"
title: "Getting started"
layout: framed
gitcontent: true
excerpt: 'Follow the steps below to get started with Denali.'
subsections:
  - subheader: '1. Denali CSS'
    subtext: 'Download or clone Denali CSS from Github.'
    subexample: 'snippets/getstarted-fig1.html'
  - subheader: '2. Denali icons'
    subtext: 'Download or clone the Denali icon library from Github.'
    subexample: 'snippets/getstarted-fig2.html'
sections:
  - header: 'HTML templates'
    text: 'You can easily get started or test out Denali CSS with prebuilt HTML templates available on our [resources](/denali-site/resource-downloads) page.'
  - header: 'Next steps'
    text: 'Once you’ve got our CSS and icon library, head over to our [documentation](/denali-site/documentation/aesthetics/colors) pages to learn how to implement Denali in your own projects.'
---

# {{ page.title }}
{{ page.excerpt }}

<br>

{% if page.example %}
{% include {{ page.example }} %}
{% endif %}

{% for section in page.subsections %}
#### {{ section.subheader }}
{% if section.subtext %}
{{ section.subtext }}
{% endif %}
{% if section.subexample %}
{% include {{ section.subexample }} %}
{% endif %}
{% endfor %}
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
