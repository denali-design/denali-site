---
title: "Fields"
permalink: docs/:path
excerpt: 'Fields allow users to enter text information. They come in two styles, inline and text area. Buttons and icons can be added to both field styles.'
---

# {{ page.title }}
{{ page.excerpt }}


***


## Field
Inline fields can be implemented by wrapping an `<input>` tag in a `<div>` tag with the `.input` class. Add a hint label to fields by inserting the `placeholder` attribute in the `<input>` tag.

{% capture field_default %}
<div class="input">
  <input class="" type="text" placeholder="Just a field" />
</div>
{% endcapture %}
{% include code-snippet.html code=field_default url='fieldDefault' %}


***


## Textarea
Text area fields can be implemented by wrapping a `<textarea>` tag in a `<div>` tag with the `.input` class. Add a hint label to text area fields by inserting the `placeholder` attribute in the `<textarea>` tag.

{% capture field_textarea %}
<div class="input">
  <textarea type="text" placeholder="Text area"></textarea>
</div>
{% endcapture %}
{% include code-snippet.html code=field_textarea url='fieldTextarea' %}


***


## Sizes
Inline fields are available in default, medium, and small sizes. The default field size is automatically built into our `.input` class. However, you may implement smaller sizes by adding the `.is-medium` or `.is-small` classes to a field&#39;s outer `<div>`tag.

{% capture field_size %}
<div class="input">
  <input type="text" placeholder="Just a field" />
</div>
<br>
<div class="input is-medium">
  <input type="text" placeholder="Just a field" />
</div>
<br>
<div class="input is-small">
  <input type="text" placeholder="Just a field" />
</div>
{% endcapture %}
{% include code-snippet.html code=field_size url='fieldSize' %}

## States
Inline fields and text area fields have `.is-active`,`.is-warning`, and disabled states. Active and warning states can be forced by adding the corresponding state class to a field&#39;s outer `<div>`tag. To add an error message to `.is-warning` fields, wrap text in a `<p>` tag with the `.message` class and insert it within the field&#39;s`<input>` tag. To implement a disabled state, add the `disabled` attribute to a field&#39;s`<input>` tag.

{% capture field_state %}
<div class="input">
  <input type="text" placeholder="Just a field" />
</div>
<br>
<div class="input is-error">
  <input type="text" placeholder="Just a field" />
  <p class="message">with an error</p>
</div>
<br>
<div class="input">
  <input type="text" placeholder="Just a field" disabled="" />
</div>
{% endcapture %}
{% include code-snippet.html code=field_state url='fieldState' %}

## Type Attributes
Email, number and password fields can be implemented by adding the `type` attribute to a field's `<input>` tag and setting the value to `email`, `number`, or `password`.

{% capture field_types %}
<div class="input">
  <input type="text" placeholder="Text field" />
</div>
<br>
<div class="input">
  <input type="email" placeholder="Email field" />
</div>
<br>
<div class="input">
  <input type="number" placeholder="Number field" />
</div>
<br>
<div class="input">
  <input type="password" placeholder="Password field" />
</div>
{% endcapture %}
{% include code-snippet.html code=field_types url='fieldTypes' %}


***


## Icons in fields
To insert an icon into a field add a `<span>` tag with the `.d-icon` and `.d-$icon-name` classes before or after the `<input>` tag. You can also customize icon color using the `.is-$color-$value` class.

### Front
Position an icon at the front of a field by adding the `.has-icon-front` class to a field&#39;s `<div>` tag.

{% capture field_icon_front %}
<div class="input has-icon-front">
  <span class="d-icon d-filter-horizontal is-brand-300"></span><input type="text" placeholder="Icon front" />
</div>
{% endcapture %}
{% include code-snippet.html code=field_icon_front url='fieldIconFront' %}

### Back
Position an icon to the back of a field by adding the `.has-icon-back` class to a field&#39;s `<div>` tag.

{% capture field_icon_back %} 
<div class="input has-icon-back">
  <input type="text" placeholder="Icon back" /><a class="d-icon d-close-circle-solid is-secondary is-sub"></a>
</div>
 {% endcapture %}
{% include code-snippet.html code=field_icon_back url='fieldIconBack' %}


***


## Inline fields with button
To place a button at the end of an inline field wrap an `<input>` and `<button>` tag within `<div
class="input-group has-button">`.

{% capture field_button %} 
<div class="input-group has-button">
  <div class="input">
    <input type="text" placeholder="Field with button" />
  </div>
  <button class="button is-solid has-icon"><i class="d-icon d-add is-small"></i></button>
</div>
 {% endcapture %}
{% include code-snippet.html code=field_button url='fieldButton' %}


***

## Inverse Fields
When adding an input to a dark background, like a navbar. Add `.is-inverse` to the `.input` wrapper.

{% capture field_inverse %}
<div class="input is-inverse">
  <input type="text" placeholder="Inverse Field" />
</div>
{% endcapture %}
{% include code-snippet.html code=field_inverse url='fieldInverse' inverse='true' %}


***


## Variables
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
