---
title: "Margins"
permalink: /documentation/helpers/margins
layout: framed-space
excerpt: 'Margin helpers are used to space out elements.'
---
{::options parse_block_html="true" /}

# {{ page.title }}
{{ page.excerpt }}

***

Denali currently offers margin helpers from 0-200 pixels in each category listed in the table. You can find examples of usage below.

| Class         | Properties       |
| ------------- | ---------------- |
| `.m-auto`     | margin: auto;    |
| `.m-{size}`   | margin: {size}; |
| `.m-t-{size}` | margin-top: {size}; |
| `.m-r-{size}` | margin-right: {size}; |
| `.m-b-{size}` | margin-bottom: {size}; |
| `.m-x-{size}` | margin-left: {size}; margin-right: {size}; |
| `.m-y-{size}` | margin-left: {size}; margin-right: {size}; |

***

<details open >
<summary>
## All Sides
</summary>

Control the margin on all sides of an element using the `m-{size}` helper.
```html
<div>
  <div class="box"> Box 1</div>
  <div class="box m-50"> Box 2</div>
  <div class="box"> Box 3</div>
</div>
```

</details>

***

<details open >
<summary>
## Single Side
</summary>

Control the margin on a single side of an element using the `m-{t|r|b|l}-{size}` helper.
```html
<div>
  <div class="box"> Box 1</div>
  <div class="box m-t-10 m-r-20 m-b-30 m-l-40"> Box 2</div>
  <div class="box"> Box 3</div>
</div>
```

</details>

***

<details open >
<summary>
## Horizontal
</summary>

Control the margin on the left and right side of an element using the `m-x-{size}` helper.
```html
<div>
  <div class="box"> Box 1</div>
  <div class="box m-x-50"> Box 2</div>
  <div class="box"> Box 3</div>
</div>
```

</details>

***

<details open >
<summary>
## Vertical
</summary>

Control the margin on the top and bottom side of an element using the `m-y-{size}` helper.
```html
<div>
  <div class="box"> Box 1</div>
  <div class="box m-y-50"> Box 2</div>
  <div class="box"> Box 3</div>
</div>
```

</details>
