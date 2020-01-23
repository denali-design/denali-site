---
title: 'Colors'
permalink: /documentation/aesthetics/colors
excerpt: "Denali's color library is used to style components and convey meaning."
---

# {{ page.title }}

{{ page.excerpt }}


***

### Modifiers
Component color and background color can be modified using values from [Denali&#39;s SCSS color map](https://github.com/denali-design/denali-css/blob/master/scss/maps/color-maps.scss){:target='blank'}.
#### Color modifier
Component color can be modified using the `.is-$color-$value` class, for example `.is-orange-500`.

{% capture color_modifier_color %}{% highlight html %}
<i class="d-icon d-user-profile-circle is-medium is-orange-500"></i>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=color_modifier_color url='color_modifier_color.html' %}

#### Background modifier
Background color can be modified using the `.has-bg-$color-$value` class, for example `.has-bg-graph-purple`.

{% capture color_modifier_background %}{% highlight html %}
<div class="box has-bg-graph-purple">
  <h4 class="is-grey-100">This is a box with a modifed background color.</h4>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=color_modifier_background url='color_modifier_background.html' %}

<blockquote class="accessible">When selecting text and background colors remember to abide by accessiblity standards and make sure the color contrast is 4.5:1. More information about color contrast can be found on the <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target="blank">WCAG site</a>.</blockquote>

***

{% include color-snippet.html %}

***

### Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`--color-{name}-{weight}`|Hex e.g.`#3697f2`|
|`--color-{name}-{weight}-rgb`|RGB e.g.`54,151,242`|
