---
title: "Input Group"
permalink: docs/:path
excerpt: 'Input group component is a wrapper component for buttons, inputs, radio, toggles, and checkboxes.'
---

# {{ page.title }}
{{ page.excerpt }}


***


### Labels
Add a label to fields by wrapping inline or text area fields within a `<div>` tag with the `.input-group` class. Field labels are positioned to the left by default but can be repositioned on top by adding the `.is-stacked` class to the field&#39;s outer `<div>` tag.

{% capture field_label_position %}
<div class="input-group">
    <label>Label</label>
    <div class="input">
        <input type="text" placeholder="Default field" />
    </div>
</div>
<br>
<div class="input-group is-stacked">
    <label>Label</label>
    <div class="input">
        <input type="text" placeholder="Stacked field" />
    </div>
</div>
{% endcapture %}
{% include code-snippet.html code=field_label_position url='fieldLabelPosition' %}


***


### Responsive Input Groups
By default fields are not responsive. Add the helper class `responsive` to fields in order to stack field labels and increase field width to 100% of the viewport at mobile screen sizes.
{% capture field_label_responsive %}
<div class="input-group responsive">
    <label>Label</label>
    <div class="input">
        <input type="text" placeholder="Responsive field" />
    </div>
</div>
<br>
<div class="input-group responsive">
    <label>Label</label>
    <div class="input">
        <textarea type="text" placeholder="Responsive text area"></textarea>
    </div>
</div>
{% endcapture %}
{% include code-snippet.html code=field_label_responsive url='fieldLabelResponsive' height='220' %}


***


### Auto Labels
To adjust the label width to the size of the content add the class `.auto` to `.input-group`.

{% capture field_label_auto %}
<div class="input-group auto">
    <label>Auto</label>
    <div class="input">
        <input type="text" placeholder="Auto Label Input" />
    </div>
</div>
<br>
<div class="input-group auto">
    <label>Longer Label</label>
    <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
        <span class="off label">Toggle off</span>
        <span class="on label">Toggle on</span>
    </label>
</div>
{% endcapture %}
{% include code-snippet.html code=field_label_auto url='fieldLabelAuto' %}


***


### Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`--fields-corner-radius`|border-radius|
|`--fields-dropdown-arrow-color`| color|
|`--fields-padding`| padding|
|`--fields-placeholder-text-color`| color|
|`--fields-default-bg`| background|
|`--fields-default-text-color`| color|
|`--fields-default-border`| border|
|`--fields-focus-border`| border|
|`--fields-disabled-bg`| background|
|`--fields-disabled-text-color`| color|
|`--fields-disabled-border`| border|
|`--fields-error-border`| border|
|`--fields-sizes-default-width`| width|
|`--fields-sizes-default-height`| height|
|`--fields-sizes-medium-height`| height|
|`--fields-sizes-small-height`| height|