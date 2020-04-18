---
title: "Tags"
permalink: docs/:path
excerpt: 'Tags display descriptive text information. They come in solid, outline, and selectable styles. Tags can be grouped into scrolling or wrapping lists. Icons can also be added to tags.'
---

# {{ page.title }}
{{ page.excerpt }}


***


### Standard tags
To create standard tags start with a `<span>` or `<a>` tag and add the `.tag` class.

### States
Standard tags have active and disabled states. Implement these states by adding `.is-active` or `.is-disabled` classes to a standard tag&#39;s `<span>` or `<a>` tag.

{% capture tag_default %} 
<div class="tags">
  <span class="tag">Standard Tag</span>
  <span class="tag is-active">Active Tag</span>
  <span class="tag is-disabled">Disabled Tag</span>
</div>
 {% endcapture %}
{% include code-snippet.html code=tag_default url='tag_default.html' %}

***


### Outlined tags
Outlined tags contain information within solid outline containers. To create outlined tags start with a `<span>` or `<a>` tag and add `.tag` and `.outlined` classes.

### States
Outlined tags have active and disabled states. Implement these states by adding `.is-active` or `.is-disabled` classes to an outlined tag&#39;s `<span>` or `<a>` tag.

{% capture tag_outlined %} 
<div class="tags">
  <a class="tag outlined">Outlined Tag</a>
  <a class="tag outlined is-active">Outlined Selected</a>
  <a class="tag outlined is-disabled">Outlined Disabled</a>
</div>
 {% endcapture %}
{% include code-snippet.html code=tag_outlined url='tag_outlined.html' %}


***


### Small tags
Small tags can be implemented by adding the `.is-small` class to a tag&#39;s `<span>` or `<a>` tag.

{% capture tag_sizes %} 
<div class="tags">
  <span class="tag is-small">Small Standard Tag</span>
  <span class="tag outlined is-small">Small Outlined Tag</span>
</div>
 {% endcapture %}
{% include code-snippet.html code=tag_sizes url='tag_sizes.html' %}


***


### Icons
Tags can contain icons. To add an icon insert `<i class="d-icon d-$icon-name">` within the tag&#39;s `<span>` or `<a>` tag.

#### Front
To place an icon at the front of a tag add the `.has-icon-front` class to the tag&#39;s `<span>` or `<a>` tag.

{% capture tag_icon_front %} 
<div class="tags">
<span class="tag has-icon-front"><i class="d-icon d-check"></i>Standard Tag</span>
<span class="tag is-small has-icon-front"><i class="d-icon d-check"></i>Small Standard Tag</span>
</div>
 {% endcapture %}
{% include code-snippet.html code=tag_icon_front url='tag_icon_front.html' %}

#### Back
To place an icon at the back of a tag add the `.has-icon-back` class to the tag&#39;s `<span>` or `<a>` tag.

{% capture tag_icon_back %} 
<div class="tags">
<span class="tag has-icon-back">Standard Tag<a class="d-icon d-close"></a></span>
<span class="tag is-small has-icon-back">Small Standard Tag<a class="d-icon d-close"></a></span>
</div>
 {% endcapture %}
{% include code-snippet.html code=tag_icon_back url='tag_icon_back.html' %}


***


### List
Group tags in a tag list by placing them in a `<div>` tag with the `.tags` class.

#### Wrapping
Tag lists automatically wrap when the list gets too long for its container.

{% capture tag_list_wrap %} 
<div class="tags">
  <span class="tag">Tag One</span>
  <span class="tag">Tag Two</span>
  <span class="tag">Tag Three</span>
  <span class="tag">Tag Four</span>
  <span class="tag">Tag Five</span>
  <span class="tag">Tag Six</span>
  <span class="tag">Tag Seven</span>
  <span class="tag">Tag Eight</span>
  <span class="tag">Tag Nine</span>
  <span class="tag">Tag Ten</span>
  <span class="tag">Tag Eleven</span>
</div>
 {% endcapture %}
{% include code-snippet.html code=tag_list_wrap url='tag_list_wrap.html' %}

#### No wrapping
To override wrapping and implement a vertical scroll to tag lists add the class `.nowrap` to a tag list `<div>`

{% capture tag_list_nowrap %} 
<div class="tags nowrap">
  <span class="tag">Tag One</span>
  <span class="tag">Tag Two</span>
  <span class="tag">Tag Three</span>
  <span class="tag">Tag Four</span>
  <span class="tag">Tag Five</span>
  <span class="tag">Tag Six</span>
  <span class="tag">Tag Seven</span>
  <span class="tag">Tag Eight</span>
  <span class="tag">Tag Nine</span>
  <span class="tag">Tag Ten</span>
  <span class="tag">Tag Eleven</span>
</div>
 {% endcapture %}
{% include code-snippet.html code=tag_list_nowrap url='tag_list_nowrap.html' %}


***


### Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`--tags-corner-radius`| border-radius|
|`--tags-padding`| padding|
|`--tags-margin`| margin|
|`--tags-height`| height|
|`--tags-icon-size`| font-size|
|`--tags-icon-color`| color|
|`--tags-bg-color`| background|
|`--tags-text-color`| color|
|`--tags-active-bg-color`| background|
|`--tags-disabled-bg-color`| background|
|`--tags-disabled-text-color`| color|
|`--tags-small-text-size`| font-size|
|`--tags-small-padding`| padding|
|`--tags-small-height`| height|
|`--tags-small-icon-size`| font-size|
|`--tags-outlined-text-color`| color|
|`--tags-outlined-border`| border|
|`--tags-outlined-bg-color`| background|
|`--tags-outlined-hover-bg-color`| background|
|`--tags-outlined-active-text-color`| color|
|`--tags-outlined-active-bg-color`| background|
|`--tags-outlined-disabled-text-color`| color|
|`--tags-outlined-disabled-bg-color`| background|
|`--tags-outlined-disabled-border-color`| border-color|
