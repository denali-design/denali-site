---
title: "Chips"
permalink: /documentation/components/chips
excerpt: 'Chips are used to highlight important text information. They come in two sizes and their color can be customized.'
---

# {{ page.title }}
{{ page.excerpt }}

***


### Basic structure
Chips are built by wrapping text within a  `<span>` tag and adding the class `.chips`.

{% capture chip_default %}{% highlight html %}
<span class="chips">Default Chip</span>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=chip_default url='chip_default.html' %}


***


### Chips within paragraph text
Chips placed inside `<p>` elements will inherit the font size and line spacing of that element.

{% capture chip_paragraph %}{% highlight html %}
<p> Lorem ipsum dolor sit amet, <span class="chips has-bg-purple-500">consectetur</span> adipisicing elit, seddo eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <span class="chips bg-brand-200">This is a default chip</span> consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=chip_paragraph url='chip_paragraph.html' %}


***


### Small chip
Implement a small chip by adding the `.is-small` class to the `<span>` tag.

{% capture chip_size %}{% highlight html %}
<span class="chips">Default Chip</span>
<br>
<span class="chips is-small">Small Chip</span>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=chip_size url='chip_size.html' %}


***


### Chip color modifiers
To customize a chip's background color add the `.has-bg-$color-$value` class to the `<span>` tag. To customize a chip's text color add the `.is-$color-$value` class to the `<span>` tag. If a chip’s background color is modified but text color is not, text color will default to either white or black in order to achieve an optimal color contrast ratio.

{% capture chip_color %}{% highlight html %}
<span class="chips has-bg-lime-500">Green Chip</span>
<br>
<span class="chips has-bg-status-warning">Yellow Chip</span>
<br>
<span class="chips has-bg-violet-100 is-violet-500 ">Violet Chip</span>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=chip_color url='chip_color.html' %}

<blockquote class="accessible">Text in the chip by default will be either white or black. When selecting text and background colors remember to abide by accessiblity standards and make sure the color contrast is 4.5:1. More information about color contrast can be found on the <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target="blank">WCAG site</a>.</blockquote>


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

`$chip-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`backgound`        |background           |`map-get($denali-brand-colors, '200')`   |#d7e2fd    |
|`border-radius`    |border-radius        |`4px`                                    |           |
|`color`            |border-top-color     |`map-get($denali-grey-colors, '800')`    |#303030    |
|`padding`          |padding              |`4px 6px`                                |           |
|`small:font-size`  |font-size            |`1.2rem`                                 |12px       |
|`small:padding`    |padding              |`2px 4px`                                |           |
