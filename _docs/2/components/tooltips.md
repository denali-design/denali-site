---
title: "Tooltips"
permalink: docs/:path
excerpt: 'Tooltip components are used to display additional information when a user hovers, focuses, or taps on the element.'
---

# {{ page.title }}

{{ page.excerpt }}

***

## Implementation
Tooltips can be implemented on almost any element Denali provides. To acheive this add the class of `tooltip` to the element. To specify the text in the tooltip add the `data-tooltip="Some text"` attribute with the text.

Currently we do not support icons in a tooltip, but are working towards a solution.

{% capture tooltip_default %}
<span class="link tooltip" data-tooltip="I’m the tooltip text.">Tooltip Default</span>
{% endcapture %}
{% include code-snippet.html code=tooltip_default url='tooltipDefault' %}

***

## Position
By default tooltips are positioned on the bottom, but give you the ability to position it left, right, or top. Just add the class`-left`, `-right`, or `-top` to the exsiting class.

{% capture tooltip_position %}
<div class="flex space-between m-t-40">
    <span class="link tooltip-right" data-tooltip="I’m the right tooltip.">Tooltip Right</span>
    <span class="link tooltip-top" data-tooltip="I’m the top tooltip.">Tooltip Top</span>
    <span class="link tooltip-left" data-tooltip="I’m the left tooltip.">Tooltip Left</span>
</div>
{% endcapture %}
{% include code-snippet.html code=tooltip_position url='tooltipPosition' %}

***

## Small
By default tooltips are 1.2rem font size, but in some context you need a smaller tooltip. By adding the `-small` to the exsiting class you'll change the font size to 1rem resulting in a smaller tooltip. 

{% capture tooltip_small %}
<div class="flex space-between">
    <span class="link tooltip-small" data-tooltip="I’m the small tooltip.">Small Tooltip</span>
    <span class="link tooltip-left-small" data-tooltip="I’m the left small tooltip.">Small Tooltip Left</span>
</div>
{% endcapture %}
{% include code-snippet.html code=tooltip_small url='tooltipSmall' %}

***

## Other Elements
Here's an example of applying a tooltip to a regular icon.

{% capture tooltip_icon %}
<i class="d-icon d-user-profile-circle is-medium tooltip-small" data-tooltip="Profile"></i>
{% endcapture %}
{% include code-snippet.html code=tooltip_icon url='tooltipIcon' %}

***

## Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`$tooltip-text-color`|color|
|`$tooltip-bg-color`|background|
|`$tooltip-corner-radius`|border-radius|
|`$tooltip-text-size`|font-size|
|`$tooltip-padding`|padding|
|`$tooltip-small-text-size`|font-size|
|`$tooltip-small-padding`|padding|