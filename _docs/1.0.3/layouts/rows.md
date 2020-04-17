---
title: "Rows"
permalink: docs/:path
excerpt: 'Rows horizontally layout content and are direct children of containers.'

---

# {{ page.title }}
{{ page.excerpt }}

> Denali’s layout components are built using flexbox to help you layout content with ease. Unfamiliar with flexbox? Read [this guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) before getting started.

***

### Basics
Rows can be implemented using the class `.row`. By default rows are set to `flex-direction:row` and `flex-wrap:wrap`. This means that all elements placed in a row will line up horizontally from left to right and that they will wrap when they become too large to fit the row width.

{% capture row_basic %} 
<div class="container">
  This is a row
  <div class="row has-bg-grey-400 p-10 br-4">
    <div class="col has-bg-violet-500 p-10 br-4">Flex:auto column 1</div>
    <div class="col has-bg-violet-500 p-10 br-4">Flex:auto column 2</div>
  </div>
</div>
 {% endcapture %}
{% include code-snippet.html code=row_basic url='row_basic.html' %}

***

### Row Element Direction
If you’d like to line up elements within a row from right to left, you can do so by adding the class `.reversed` to your row. Adding `.reversed` will also cause wrapped elements to line up from right to left.

{% capture row_reversed %} 
<div class="container">
  This is a row
  <div class="row reversed has-bg-grey-400 p-10 br-4">
    <div class="col has-bg-violet-500 p-10 br-4">Flex:auto column 1</div>
    <div class="col has-bg-violet-500 p-10 br-4">Flex:auto column 2</div>
  </div>
</div>
 {% endcapture %}
{% include code-snippet.html code=row_reversed url='row_reversed.html' %}
