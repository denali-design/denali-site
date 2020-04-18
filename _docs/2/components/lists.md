---
title: 'Lists'
permalink: docs/:path
excerpt: 'Lists are vertical groupings of text, icons, or images. We currently offer two varitions of this components unordered and ordered.'
---

# {{ page.title }}
{{ page.excerpt }}


***


### Unordered List
Unordered lists are grouping of items that have a bullet in front of the list items. Create an unordered list by wrapping the `li` tags with a `ul` tag and the class of `list`.

{% capture list_unordered %}
<ul class="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
{% endcapture %}
{% include code-snippet.html code=list_unordered url='listUnordered' %}


***


### Ordered List
Ordered lists are grouping of items that have a number in front of the list items. Create an unordered list by wrapping the `li` tags with a `ol` tag and the class of `list`.

{% capture list_ordered %}
<ol class="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
{% endcapture %}
{% include code-snippet.html code=list_ordered url='listOrdered' %}


***


### Variables
We currently don't offer any variables to theme this component.
