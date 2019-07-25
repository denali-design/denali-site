---
title: "Selection controls"
permalink: /documentation/components/selection-controls
excerpt: 'Selection controls allow users to make decisions via controls such as switches, radio buttons, and checkboxes.'
---


# {{ page.title }}
{{ page.excerpt }}


***


### Switch
Switches are built using `<label>` with the class .switch to wrap around `<input>` tag with the type checkbox, and `<span>` tag with the class `.slider`. Switches can be altered by using classes and attributes, here are some examples `checked` or `is-disabled`.

{% capture switch_default %}{% highlight html %}
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
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=switch_default url='switch_default.html' %}


***


### Radio
Radio buttons are built by wrapping the `<input>` tag with the type radio and `<label>` tag in a div with the class `.radio`. Radios can be altered by using classes and attributes, here are some examples `checked` or `is-disabled`.

{% capture radio_default %}{% highlight html %}
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
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=radio_default url='radio_default.html' %}


***


### Checkbox
  Checkboxes are built very similar to radios by wrapping the `<input>` tag with the type checkbox and `<label>` tag in a div with the class `.checkbox`. Checkboxes can be altered by using classes and attributes, here are some examples `checked`, `is-disabled`, or `data-partial`.

{% capture checkbox_default %}{% highlight html %}
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
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=checkbox_default url='checkbox_default.html' %}


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

#### Switch
`$switch-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`circle:border-color:standard`  |border-color     |`rgba(map-get($denali-brand-colors, '600'), 0.5)` |rgba(#3697f2. 0.5)    |
|`circle:border-color:hover`  |border-color     |`map-get($denali-brand-colors, '600')` |#3697f2    |
|`circle:border-color:active`  |border-color     |`map-get($denali-status-colors, 'success')` |#15c046    |
|`circle:border-color:disabled`  |border-color     |`map-get($denali-grey-colors, '500')` |#d5d5d5    |
|`circle:background-color:standard`  |background     |`map-get($denali-grey-colors, '100')` |#ffffff    |
|`circle:background-color:active`  |background     |`map-get($denali-status-colors, 'success')` |#15c046    |
|`circle:background-color:disabled`  |background     |`map-get($denali-grey-colors, '100')` |#ffffff    |
|`circle:background-color:active-disabled`  |background     |`map-get($denali-grey-colors, '500')` |#d5d5d5    |
|`slider:standard-color`  |background     |`map-get($denali-grey-colors, '500')` |#d5d5d5    |
|`slider:active-color`  |background     |`rgba(map-get($denali-status-colors, 'success'), 0.45)` |rgba(#15c046, 0.45)    |
|`slider:disabled-color`  |background     |`map-get($denali-grey-colors, '400')` |#e8e8e8    |
|`label:text-color`  |color     |`map-get($denali-grey-colors, '800')` |#303030    |
|`label:disabled-text-color`            |color          |`map-get($denali-grey-colors, '500')`  |#d5d5d5    |

#### Radio
`$radio-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`circle:border-color:standard`  |border-color     |`rgba(map-get($denali-brand-colors, '600'), 0.5)` |rgba(#3697f2. 0.5)    |
|`circle:border-color:hover`  |border-color     |`map-get($denali-brand-colors, '600')` |#3697f2    |
|`circle:border-color:active`  |border-color     |`map-get($denali-brand-colors, '600')` |#3697f2    |
|`circle:border-color:disabled`  |border-color     |`map-get($denali-grey-colors, '500')` |#d5d5d5    |
|`circle:backgound-color`  |background     |`map-get($denali-brand-colors, '600')` |#3697f2    |
|`label:text-color`  |color     |`map-get($denali-grey-colors, '800')` |#303030    |
|`label:disabled-text-color`            |color          |`map-get($denali-grey-colors, '500')`  |#d5d5d5    |

#### Checkbox
`$checkbox-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`checkbox:border-color:standard`  |border-color     |`rgba(map-get($denali-brand-colors, '600'), 0.5)` |rgba(#3697f2. 0.5)    |
|`checkbox:border-color:hover`  |border-color     |`map-get($denali-brand-colors, '600')` |#3697f2    |
|`checkbox:border-color:active`  |border-color     |`map-get($denali-brand-colors, '600')` |#3697f2    |
|`checkbox:border-color:disabled`  |border-color     |`map-get($denali-grey-colors, '500')` |#d5d5d5    |
|`checkbox:border-color:partial`  |border-color     |`rgba(map-get($denali-brand-colors, '600'), 0.5)` |rgba(#3697f2. 0.5)    |
|`checkbox:backgound-color`  |background     |`map-get($denali-brand-colors, '600')` |#3697f2    |
|`label:text-color`  |color     |`map-get($denali-grey-colors, '800')` |#303030    |
|`label:disabled-text-color`            |color          |`map-get($denali-grey-colors, '500')`  |#d5d5d5    |
