---
title: "Box"
permalink: docs/:path
excerpt: 'Boxes provide a simple container for other elements. They can be customized with headers and footers'
---

# {{ page.title }}
{{ page.excerpt }}

***

### Box sizes
By default box height is determined by the elements within the box, while the width is inherited from the parent container.

#### Default size
{% capture box_default %}
<div class="box">
    <h3>Title</h3>
    <a>Related Link</a>
</div>
{% endcapture %}
{% include code-snippet.html code=box_default url='box_default.html' %}

#### Specific size
You can set specific `width` and `height` values by adding a `style` attribute in the box `<div>` tag.

{% capture box_context %}
<div class="box" style="width:345px;">
    <h3><a>Header</a></h3>
    <h5>Sub Title</h5>
    <br />
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. </p>
</div>
{% endcapture %}
{% include code-snippet.html code=box_context url='box_context.html' %}


***



### Box footer
Customize boxes with a footer by adding a `<footer>` tag to the end of your box `<div>`. Wrap footer text in a `<p>` tag.

{% capture box_footer %} 
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
 {% endcapture %}
{% include code-snippet.html code=box_footer url='box_footer.html' %}


***


### Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`--box-bg-color`|background|
|`--box-corner-radius`|border-radius|
|`--box-border-color`|border-color|
|`--box-border-width`|border-width|
|`--box-border-style`|border-style|
|`--box-padding`|padding|
|`--box-footer-padding`|padding|
|`--box-footer-margin`|margin|
