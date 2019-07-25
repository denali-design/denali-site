---
title: "Box"
permalink: /documentation/components/box
excerpt: 'Boxes provide a simple container for other elements. They can be customized with headers and footers'
---

# {{ page.title }}
{{ page.excerpt }}

***

### Box sizes
By default box height is determined by the elements within the box, while the width is inherited from the parent container.

#### Default size
{% capture box_default %}{% highlight html %}
<div class="box">
<h3>Title</h3>
<a>Related Link</a>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=box_default url='box_default.html' %}

#### Specific size
You can set specific `width` and `height` values by adding a `style` attribute in the box `<div>` tag.

{% capture box_context %}{% highlight html %}
<div class="box" style="width:345px;">
<h3><a>Header</a></h3>
<h5>Sub Title</h5>
<br />
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. </p>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=box_context url='box_context.html' %}


***



### Box footer
Customize boxes with a footer by adding a `<footer>` tag to the end of your box `<div>`. Wrap footer text in a `<p>` tag.

{% capture box_footer %}{% highlight html %}
<div class="box" style="width:310px;">
<h3><a>Header</a></h3>
<h5>Sub Title</h5>
<br />
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. </p>
<br />
<footer>
<p>This is a footer.</p>
</footer>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=box_footer url='box_footer.html' %}


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

`$box-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`backgound`        |background           |`map-get($denali-grey-colors, '200')`  |#f8f8f8    |
|`border-radius`    |border-radius        |`2px`                                  |           |
|`border:color`     |border-top-color     |`map-get($denali-grey-colors, '500')`  |#d5d5d5    |
|`border:width`     |border-top-width     |`1px`                                  |           |
|`border:style`     |border-top-style     |`solid`                                |   |
|`padding`          |padding              |`20px`                                 |   |
|`footer:padding`   |padding              |`22px`                                 |   |
|`footer:margin`    |margin               |`22px`                                 |   |
