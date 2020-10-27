---
title: "Selection controls"
permalink: docs/:path
excerpt: 'Selection controls allow users to make decisions via controls such as switches, radio buttons, and checkboxes.'
---


# {{ page.title }}
{{ page.excerpt }}


***


### Switch
Switches are built using `<label>` with the class .switch to wrap around `<input>` tag with the type checkbox, and `<span>` tag with the class `.slider`. Switches can be altered by using classes and attributes, here are some examples `checked` or `is-disabled`.

{% capture switch_default %} 
<label class="switch">
<input type="checkbox" />
<span class="slider"></span>
<span class="off label">Toggle off</span>
<span class="on label">Toggle on</span>
</label>
<br>
<label class="switch">
<input type="checkbox" checked="" />
<span class="slider"></span>
<span class="off label">Toggle off</span>
<span class="on label">Toggle on</span>
</label>
<br>
<label class="switch">
<input type="checkbox" disabled="" />
<span class="slider"></span>
<span class="label">Toggle disabled</span>
</label>
<br>
<label class="switch">
<input type="checkbox" checked="" disabled="" />
<span class="slider"></span>
<span class="label">Toggle disabled on</span>
</label>
 {% endcapture %}
{% include code-snippet.html code=switch_default url='switch_default.html' %}


***


### Radio
Radio buttons are built by wrapping the `<input>` tag with the type radio and `<label>` tag in a div with the class `.radio`. Radios can be altered by using classes and attributes, here are some examples `checked` or `is-disabled`.

{% capture radio_default %} 
<div class="radio">
<input type="radio" value="A" name="sample" id="radio-sample-a" />
<label for="radio-sample-a">Radio</label>
</div>
<br>
<div class="radio">
<input type="radio" value="B" name="sample" id="radio-sample-b" checked="" />
<label for="radio-sample-b">Radio</label>
</div>
<br>
<div class="radio">
<input type="radio" value="C" name="sample" id="radio-sample-c" disabled="" />
<label for="radio-sample-c">Radio disabled</label>
</div>
 {% endcapture %}
{% include code-snippet.html code=radio_default url='radio_default.html' %}


***


### Checkbox
  Checkboxes are built very similar to radios by wrapping the `<input>` tag with the type checkbox and `<label>` tag in a div with the class `.checkbox`. Checkboxes can be altered by using classes and attributes, here are some examples `checked`, `is-disabled`, or `data-partial`.

{% capture checkbox_default %} 
<div class="checkbox">
<input id="denali-checkbox-1" type="checkbox" value="value1" />
<label for="denali-checkbox-1">Checkbox</label>
</div>
<br>
<div class="checkbox">
<input id="denali-checkbox-2" type="checkbox" value="value1" checked="" />
<label for="denali-checkbox-2">Checkbox</label>
</div>
<br>
<div class="checkbox">
<input id="denali-checkbox-2" type="checkbox" value="value1" disabled="" />
<label for="denali-checkbox-2">Checkbox disabled</label>
</div>
<br>
<div class="checkbox">
<input id="denali-checkbox-5" type="checkbox" value="value1" data-partial="" />
<label for="denali-checkbox-5">Checkbox partially</label>
</div>
 {% endcapture %}
{% include code-snippet.html code=checkbox_default url='checkbox_default.html' %}


***


### Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`$checkbox-box-border-color-standard`| box-shadow|
|`$checkbox-box-border-color-hover`| box-shadow|
|`$checkbox-box-border-color-active`| box-shadow|
|`$checkbox-box-border-color-disabled`| box-shadow|
|`$checkbox-box-partial-color`| background|
|`$checkbox-box-bg-color-active`| background|
|`$checkbox-box-label-text-color`| color|
|`$checkbox-box-label-disabled-text-color`| color|
|`$checkbox-checkmark-color`| color|
|`$checkbox-corner-radius`| border-radius|

|Variable Name|CSS Property|
| - | - |
|`$radio-circle-border-standard`| box-shadow|
|`$radio-circle-border-hover`| box-shadow|
|`$radio-circle-border-active`| box-shadow|
|`$radio-circle-border-disabled`| box-shadow|
|`$radio-circle-bg-color-active`| background|
|`$radio-label-text-color`| color|
|`$radio-label-disabled-text-color`| color|

|Variable Name|CSS Property|
| - | - |
|`$switch-circle-border-color-standard`| border-color|
|`$switch-circle-border-color-hover`| border-color|
|`$switch-circle-border-color-active`| border-color|
|`$switch-circle-border-color-disabled`| border-color|
|`$switch-circle-bg-color-standard`| background|
|`$switch-circle-bg-color-active`| background|
|`$switch-circle-bg-color-disabled`| background|
|`$switch-circle-bg-color-active-disabled`| background|
|`$switch-slider-standard-color`| background|
|`$switch-slider-active-color`| background|
|`$switch-slider-disabled-color`| background|
|`$switch-label-text-color`| color|
|`$switch-label-disabled-text-color`| color|
