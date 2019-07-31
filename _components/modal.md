---
title: 'Modals'
permalink: /documentation/components/modals
excerpt: 'Modals overlay pages to display secondary information. They come in default and fullscreen styles and can be customized with a header and footer.'
---

# {{ page.title }}
{{ page.excerpt }}


***


### Default modal
To create a modal start with `<a href="#open-modal">` to trigger open the modal. Then create `<div
id="open-modal" class="modal">`. Inside, insert `<div class="modal-container">`. To close the modal, add `<i
class="d-icon d-close">` wrapped within `<a href="#close" class="close">`. Lastly, insert `<div class="modal-content">` to house model content.

{% capture modal_default %}{% highlight html %}
<a href="#open-modal">Open default modal</a>
<div id="open-modal" class="modal">
<div class="modal-container">
<a href="#close" class="close"><i class="d-icon d-close"></i></a>
<div class="modal-content">
<h3>This is a modal</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</div>
</div>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=modal_default url='modal_default.html' height='380'%}


***


### Fullscreen modal
Implement a fullscreen modal by adding the `.is-full` class after the `.modal-container` class.

{% capture modal_full %}{% highlight html %}
<a href="#open-modal">Open fullscreen modal</a>
<div id="open-modal" class="modal">
<div class="modal-container is-full">
<a href="#close" class="close"><i class="d-icon d-close"></i></a>
<div class="modal-content">
<h3>This is a fullscreen modal</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</div>
</div>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=modal_full url='modal_full.html' height='380' %}


***


### Modal header & footer
Add a header to a modal by inserting a `<div class="modal-header">` before `<div class="modal-content">` and wrapping header content within a `<h3>` tag. Add a footer by inserting a `<div class="modal-footer">` after `<div class="modal-content">`. Wrap footer content within a `<p>` tag and add a `style="margin:0px"` attribute.


{% capture modal_header %}{% highlight html %}
<a href="#open-modal">Open modal with header and footer </a>
<div id="open-modal" class="modal">
<div class="modal-container" style="width:600px;">
<a href="#close" class="close"><i class="d-icon d-close"></i></a>
<div class="modal-header">
<h3>This is a header</h3>
</div>
<div class="modal-content">
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
</div>
<div class="modal-footer">
<p style="margin:0px;">This is a footer</p>
</div>
</div>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=modal_header url='modal_header.html' height='380' %}


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

`$modal-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`overlay-color`                      |background           |`rgba(#e8e8e8,0.9)`    |           |
|`corner-radius`   |border-radius           |`4px`                 |           |
|`modal-container:background-color`   |background           |`#fff`                 |           |
|`modal-container:border:color`|border-color|`map-get($denali-grey-colors, '400')`|#E8E8E8|
|`modal-container:border:width`|width|`width`||
|`modal-container:border:style`|border-style|`solid`||
|`modal-container:close-icon-color`|color|`map-get($denali-grey-colors, '800')`|#303030|
