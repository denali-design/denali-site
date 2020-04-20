---
title: "Chips"
permalink: docs/:path
excerpt: 'Chips are used to highlight important text information. They come in two sizes and their color can be customized.'
---

# {{ page.title }}
{{ page.excerpt }}

***


### Basic structure
Chips are built by wrapping text within a  `<span>` tag and adding the class `.chips`.

{% capture chip_default %}
<span class="chips">Default Chip</span>
{% endcapture %}
{% include code-snippet.html code=chip_default url='chip_default.html' %}


***


### Chips within paragraph text
Chips placed inside `<p>` elements will inherit the font size and line spacing of that element.

{% capture chip_paragraph %}
<p> Lorem ipsum dolor sit amet, <span class="chips has-bg-purple-500">consectetur</span> adipisicing elit, seddo eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <span class="chips bg-brand-200">This is a default chip</span> consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
{% endcapture %}
{% include code-snippet.html code=chip_paragraph url='chip_paragraph.html' %}


***


### Small chip
Implement a small chip by adding the `.is-small` class to the `<span>` tag.

{% capture chip_size %}
<span class="chips">Default Chip</span>
<br>
<br>
<span class="chips is-small">Small Chip</span>
{% endcapture %}
{% include code-snippet.html code=chip_size url='chip_size.html' %}


***


### Chip color modifiers
To customize a chip's background color add the `.has-bg-$color-$value` class to the `<span>` tag. To customize a chip's text color add the `.is-$color-$value` class to the `<span>` tag. If a chip’s background color is modified but text color is not, text color will default to either white or black in order to achieve an optimal color contrast ratio.

{% capture chip_color %}
<span class="chips has-bg-lime-500">Green Chip</span>
<br>
<br>
<span class="chips has-bg-status-warning">Yellow Chip</span>
<br>
<br>
<span class="chips has-bg-violet-100 is-violet-500 ">Violet Chip</span>
{% endcapture %}
{% include code-snippet.html code=chip_color url='chip_color.html' %}

<blockquote class="accessible">Text in the chip by default will be either white or black. When selecting text and background colors remember to abide by accessiblity standards and make sure the color contrast is 4.5:1. More information about color contrast can be found on the <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target="blank">WCAG site</a>.</blockquote>


***


### Grouped Chips
Grouped chips come in handy when you need to display key value pairs. We've made grouping chips easy by wrapping two chips in a `<span>` tag with the class of `.chip-group`.

{% capture chip_grouped %}
<span class="chip-group">
  <span class="chips has-bg-purple-500">Grouped</span><span class="chips has-bg-purple-300">Chip</span>
</span>
{% endcapture %}
{% include code-snippet.html code=chip_grouped url='chip_grouped.html' %}


***


### Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`--chips-bg-color`|background|
|`--chips-corner-radius`|border-radius|
|`--chips-text-color`|color|
|`--chips-padding`|padding|
|`--chips-small-font-size`|font-size|
|`--chips-small-padding`|padding|
