---
title: "Columns"
permalink: docs/:path
excerpt: 'Columns must always be wrapped within rows and are used to layout content vertically or horizontally. '

---

# {{ page.title }}
{{ page.excerpt }}

> Denali’s layout components are built using flexbox to help you layout content with ease. Unfamiliar with flexbox? Read [this guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) before getting started.

***

## Basics
Columns should be added as direct children within rows using the class `.col`. By default a column’s width spans 100% of the parent row. If multiple columns are placed within a row, the space within the row will be evenly divided so that each column is given equal width.

{% capture column_basic %}
<div class="container">
  This is a container
  <div class="row">
    <div class="col has-bg-violet-500 p-10 br-4">Flex:auto column</div>
  </div>
</div>

<br>

<div class="container-full">
  This is a full container
  <div class="row">
    <div class="col has-bg-violet-500 p-10 br-4">Flex:auto column</div>
  </div>
</div>
{% endcapture %}
{% include code-snippet.html code=column_basic url='column_basic.html' %}

***

## Column Size and Grid
Denali’s grid supports up to 12 columns. The amount of columns the grid supports and the size of those columns can be easily manipulated using the column size modifier `.col-#-#`. The first number indicates the amount of columns the column should span and the second number indicates the total number of columns within the grid.

In this example, the column in the first row has the column size modifier `.col-2-6` meaning it occupies the width of 2 columns in a 6 column grid.

{% capture column_size %}
<div class="container">
  This is a container
  <div class="row has-bg-sky-500 p-10 br-4">
    <div class="col-2-6 has-bg-violet-500 p-10 br-4">2/6 width column</div>
  </div>
</div>
<br>
<div class="container-full">
  This is a full container
  <div class="row has-bg-sky-500 p-10 br-4">
    <div class="col-4-5 has-bg-violet-500 p-10 br-4">4/5 width column</div>
  </div>
</div>
{% endcapture %}
{% include code-snippet.html code=column_size url='column_size.html' %}

### Media Queries
Column and grid sizes can also be specified at specific breakpoints by adding an `xs-`, `sm-`, `md-`, `lg-`, or `xl-` breakpoint before the column size modifier. Columns must be defined at each break point, otherwise breakpoints that have not been assigned a specific column size will default to the next specified column size.

In this example, the column has a `.md-col-6-12` column size modifier meaning it occupies the width of 6 columns in a 12 column grid at the small desktop breakpoint.

{% capture column_size_query %}
<div class="container">
  <div class="row has-bg-sky-500 p-10 br-4">
    <div class="xs-col-12-12 sm-col-9-12 md-col-6-12 has-bg-violet-500 p-10 br-4">
      <p class="sm-hide md-hide lg-hide xl-hide has-bg-violet-500">1/12 width column at xs breakpoint</p>
      <p class="xs-hide md-hide lg-hide xl-hide has-bg-violet-500">3/12 width column at sm breakpoint</p>
      <p class="xs-hide sm-hide lg-hide xl-hide has-bg-violet-500">6/12 width column at md breakpoint</p>
    </div>
  </div>
</div>
{% endcapture %}
{% include code-snippet.html code=column_size_query url='column_size_query.html' %}

***

## Offset
The position of a column within a grid can be manipulated by adding the offset modifier `.col-off-#-#`to your column. The first number indicates the amount of columns you want to offset your content by and the second number indicates the total number of columns within the grid.

In this example, the column in the first row has a `.col-off-3-12` column offset modifier in addition to a `.col-off-3-12` size modifier meaning it occupies the width of 1 column in a 2 column grid but is offset from the left the width of 1 column in a 4 column grid.

{% capture column_offset %}
<div class="container">
  This is a container
  <div class="row has-bg-sky-500 p-10 br-4">
    <div class="col-6-12 col-off-3-12 has-bg-violet-500 p-10 br-4">2/6 width column with 3/12 offset</div>
  </div>
</div>

<br>

<div class="container-full">
  This is a full container
  <div class="row has-bg-sky-500 p-10 br-4">
    <div class="col-4-5 col-off-1-5 has-bg-violet-500 p-10 br-4">4/5 width column with 1/5 offset</div>
  </div>
</div>
{% endcapture %}
{% include code-snippet.html code=column_offset url='column_offset.html' %}

### Media Queries
Offset positioning can also be defined at specific breakpoints by adding an `xs`, `sm-`, `md-`, `lg-`, or `xl-` breakpoint before the column offset modifier. In this example, the column has a `.xs-col-off-6-11` column offset modifier meaning it is offset from the left the width of 6 columns in an 11 column grid at the extra small breakpoint.

{% capture column_offset_query %}
<div class="container">
  <div class="row has-bg-sky-500 p-10 br-4">
    <div class="xs-col-5-11 xs-col-off-6-11 has-bg-violet-500 p-10 br-4">
      <p class="sm-hide md-hide lg-hide xl-hide has-bg-violet-500">5/11 width column with 6/11 offset at xs breakpoint</p>
      <p class="xs-hide has-bg-violet-500">5/11 width column with no offset</p>
    </div>
  </div>
</div>
{% endcapture %}
{% include code-snippet.html code=column_offset_query url='column_offset_query.html' %}

***

## Gutters
By default columns are given margin space to the left and right, known as “gutter space”, to prevent them from overlapping each other. Add the `.is-gutterless` modifier to a column’s parent container to set the margins of all columns in that container to 0px.

{% capture column_gutterless %}
<div class="container">
  This is a normal container
  <div class="row">
    <div class="col has-bg-violet-500 p-10 br-4">col</div>
    <div class="col has-bg-violet-500 p-10 br-4">col</div>
    <div class="col has-bg-violet-500 p-10 br-4">col</div>
  </div>
</div>
<br>
<div class="container is-gutterless">
  This is a gutterless container
  <div class="row">
    <div class="col has-bg-violet-500 p-10 br-4">col</div>
    <div class="col has-bg-violet-500 p-10 br-4">col</div>
    <div class="col has-bg-violet-500 p-10 br-4">col</div>
  </div>
</div>
{% endcapture %}
{% include code-snippet.html code=column_gutterless url='column_gutterless.html' %}
