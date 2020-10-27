---
title: "Padding"
permalink: docs/:path
excerpt: 'Padding helpers are used to control an elements padding.'
---
{::options parse_block_html="true" /}

# {{ page.title }}
{{ page.excerpt }}

***

Denali currently offers padding helpers from 0-200 pixels in each category listed in the table. You can find examples of usage below.

| Class         | Properties       |
| ------------- | ---------------- |
| `.p-{size}`   | padding: {size}; |
| `.p-t-{size}` | padding-top: {size}; |
| `.p-r-{size}` | padding-right: {size}; |
| `.p-b-{size}` | padding-bottom: {size}; |
| `.p-x-{size}` | padding-left: {size}; padding-right: {size}; |
| `.p-y-{size}` | padding-left: {size}; padding-right: {size}; |

***

<details open >
<summary>
## All Sides
</summary>

Control the padding on all sides of an element using the `p-{size}` helper.
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

Control the padding on a single side of an element using the `p-{t|r|b|l}-{size}` helper.
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

Control the padding on the left and right side of an element using the `p-x-{size}` helper.
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

Control the padding on the top and bottom side of an element using the `p-y-{size}` helper.
```html
<div>
  <div class="box"> Box 1</div>
  <div class="box m-y-50"> Box 2</div>
  <div class="box"> Box 3</div>
</div>
```

</details>
