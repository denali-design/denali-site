---
title: 'Modals'
permalink: docs/:path
excerpt: 'Modals overlay pages to display secondary information. They come in default and fullscreen styles and can be customized with a header and footer.'
---

# {{ page.title }}
{{ page.excerpt }}


***


### Default modal
To create a modal start with `<a href="#open-modal">` to trigger open the modal. Then create `<div
id="open-modal" class="modal">`. Inside, insert `<div class="modal-container">`. To close the modal, add `<i
class="d-icon d-close">` wrapped within `<a href="#close" class="close">`. Lastly, insert `<div class="modal-content">` to house model content.

{% capture modal_default %} 
<a href="#open-modal">Open default modal</a>
<div id="open-modal" class="modal">
    <div class="modal-container">
        <a href="#close" class="close"><i class="d-icon d-close"></i></a>
        <div class="modal-content">
            <h3>This is a modal</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
</div>
 {% endcapture %}
{% include code-snippet.html code=modal_default url='modal_default.html' height='380'%}


***


### Fullscreen modal
Implement a fullscreen modal by adding the `.is-full` class after the `.modal-container` class.

{% capture modal_full %} 
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
 {% endcapture %}
{% include code-snippet.html code=modal_full url='modal_full.html' height='380' %}


***


### Modal header & footer
Add a header to a modal by inserting a `<div class="modal-header">` before `<div class="modal-content">` and wrapping header content within a `<h3>` tag. Add a footer by inserting a `<div class="modal-footer">` after `<div class="modal-content">`. Wrap footer content within a `<p>` tag and add a `style="margin:0px"` attribute.


{% capture modal_header %} 
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
 {% endcapture %}
{% include code-snippet.html code=modal_header url='modal_header.html' height='380' %}


***


### Active State
Added `.is-active` to the outter most element of a modal, will by default show the modal on page load.

{% capture modal_active_state %} 
<div class="modal is-active">
    <div class="modal-container">
        <a href="#close" class="close"><i class="d-icon d-close"></i></a>
        <div class="modal-content">
            <h3>This is an active modal</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
</div>
{% endcapture %}
{% include code-snippet.html code=modal_active_state url='modal_active_state.html' height='380' %}


***


### Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`$modal-overlay-color`| background|
|`$modal-corner-radius`| border-radius|
|`$modal-modal-container-bg-color`| background|
|`$modal-modal-container-border-color`| border-color|
|`$modal-modal-container-border-width`| border-width|
|`$modal-modal-container-border-style`| border-style|
|`$modal-modal-container-close-icon-color`| color|
