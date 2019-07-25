---
title: "Typography"
permalink: /documentation/aesthetics/typography
excerpt: 'Denali offers a Sans Serif and Monospace font-family in a variety of weights and heading styles.'
---

# {{ page.title }}

{{ page.excerpt }}


***


### Helvetica
Denali’s Sans-Serif font-family is Helvetica. Helvetica Regular is Denali's default font and weight for all text. To implement different weights of Helvetica by adding `.is-light`,`.is-regular`, `.is-bold`, or `.is-italic` classes to `<h1>` through `<h6>` and `<p>` tags.

{% capture type_helvetica %}{% highlight html %}
<h3 class="is-light">Helvetica - Light</h3>
<h3 class="is-light is-italic">Helvetica - Light Italic</h3>
<h3 class="is-regular">Helvetica - Regular</h3>
<h3 class="is-italic">Helvetica - Italic</h3>
<h3 class="is-bold">Helvetica - Bold</h3>
<h3 class="is-bold is-italic">Helvetica - Bold Italic</h3>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=type_helvetica url='type_helvetica.html' %}

### Mono
Denali’s Monospace font-family is Monospace. It comes in one weight and is implemented by adding `.is-mono` to `<h1>` through `<h6>` and `<p>` tags.

{% capture type_mono %}{% highlight html %}
<h3 class="is-mono">Monospace - Regular</h3>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=type_mono url='type_mono.html' %}


***


### Headings
Implement headings with `<h1>` to `<h6>` tags. Heading styles can be modified by adding any of the font and weight classes listed above to `<h1>` through `<h6>` tags.

{% capture type_heading %}{% highlight html %}
<h1>Display</h1>
<h2>Headline</h2>
<h3>Title</h3>
<h4>Sub-Title</h4>
<h5 class="is-light">Title Caption</h5>
<h6 class="is-regular">Caption</h6>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=type_heading url='type_heading.html' %}


***


### Body text
Implement body text with the `<p>` tag. Body text styles can be modified by adding any of the font and weight classes listed above to the `<p>` tag.

{% capture type_body %}{% highlight html %}
<p>This is a p tag</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=type_body url='type_body.html' %}


***

### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

`$type-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`global:font-family`       |font-family    |`Helvetica`    |           |
|`global:text-color`        |color          |`map-get($denali-grey-colors, '800')`    |#303030    |
|`headline-1:font:size`     |font-size      |`2.8 rem`      |28px       |
|`headline-1:font:style`    |font-style     |`null`         |           |
|`headline-1:font:weight`   |font-weight    |`600`          |           |
|`headline-1:line-height`   |line-height    |`null`         |           |
|`headline-2:font:size`     |font-size      |`2.6 rem`      |26px       |
|`headline-2:font:style`    |font-style     |`null`         |           |
|`headline-2:font:weight`   |font-weight    |`600`          |           |
|`headline-2:line-height`   |line-height    |`3.2rem`       |32px       |
|`headline-3:font:size`     |font-size      |`2.0 rem`      |20px       |
|`headline-3:font:style`    |font-style     |`null`         |           |
|`headline-3:font:weight`   |font-weight    |`600`          |           |
|`headline-3:line-height`   |line-height    |`null`         |           |
|`headline-4:font:size`     |font-size      |`1.6 rem`      |16px       |
|`headline-4:font:style`    |font-style     |`null`         |           |
|`headline-4:font:weight`   |font-weight    |`600`          |           |
|`headline-4:line-height`   |line-height    |`null`         |           |
|`headline-5:font:size`     |font-size      |`1.4 rem`      |14px       |
|`headline-5:font:style`    |font-style     |`null`         |           |
|`headline-5:font:weight`   |font-weight    |`600`          |           |
|`headline-5:line-height`   |line-height    |`null`         |           |
|`headline-6:font:size`     |font-size      |`1.2 rem`      |12px       |
|`headline-6:font:style`    |font-style     |`null`         |           |
|`headline-6:font:weight`   |font-weight    |`400`          |           |
|`headline-6:line-height`   |line-height    |`1.6rem`       |16px       |
|`paragraph:font:size`      |font-size      |`1.4 rem`      |14px       |
|`paragraph:font:style`     |font-style     |`null`         |           |
|`paragraph:font:weight`    |font-weight    |`400`          |           |
|`paragraph:line-height`    |line-height    |`2.2rem`       |22px       |
