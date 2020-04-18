---
title: "Icons"
permalink: docs/:path
excerpt: "Denali's icon library offers hundreds of icons in outline and solid styles that have been carefully crafted to ensure a coherent and unified UI."
---

# {{ page.title }}

{{ page.excerpt }}


***


### Implementation
To access icons in the Denali Icon Library create an `<i>` or `<span>` tag with the `.d-icon` class followed by the `.d-$icon-name` class that corresponds to the icon you would like to use. For a list of all icon names visit [Denali icons page](https://denali-design.github.io/denali-icon-font/docs/){:target='blank'}.

{% capture icon_default %} 
<i class="d-icon d-user-profile-circle is-medium"></i>
 {% endcapture %}
{% include code-snippet.html code=icon_default url='icon_default.html' %}


***


### Icon links
To use an icon as a link wrap your `<i>` or `<span>` tag in an `<a>` tag.  You can modify an icon link&#39;s appearance using the `.sub action` and `.inverse` classes.

#### Default icon links
By default icon links adopt standard link styling.

{% capture icon_main %} 
<a><i class="d-icon d-notification is-medium"></i></a>
<a class="is-secondary"><i class="d-icon d-notification is-medium"></i></a>
 {% endcapture %}
{% include code-snippet.html code=icon_main url='icon_main.html' %}

#### Sub action icon links
To adopt sub action link styling add the `.is-sub` class to `<a>` tags.

{% capture icon_sub %} 
<a><span class="d-icon d-star is-sub is-medium"></span></a>
<a class="is-secondary"><span class="d-icon d-star is-sub is-medium"></span></a>
 {% endcapture %}
{% include code-snippet.html code=icon_sub url='icon_sub.html' %}

#### Inverse
Inverse link styling can also be adopted by adding the `.is-inverse` class to `<a>` tags.

{% capture icon_inverse %} 
<a class="is-inverse"><span class="d-icon d-trash is-medium"></span></a>
 {% endcapture %}
{% include code-snippet.html code=icon_inverse url='icon_inverse.html' inverse='true' %}

<blockquote class="accessible">When using an icon as a link, you are creating functional images that must have appropriate <span class="chips has-bg-grey-100 is-red-500 is-mono">alt</span> tags to describe the icon.</blockquote>

***


### Icon sizes
Icons are available in variety of sizes. Implement these sizes by adding the `.is-extrasmall`, `.is-small`, `.is-medium`, or `.is-large ` classes to `<i>` or `<span>` tags.

{% capture icon_sizes %} 
<i class="d-icon d-user-profile-circle is-extrasmall"></i>
<i class="d-icon d-user-profile-circle is-small"></i>
<i class="d-icon d-user-profile-circle"></i>
<i class="d-icon d-user-profile-circle is-medium"></i>
<i class="d-icon d-user-profile-circle is-large"></i>
 {% endcapture %}
{% include code-snippet.html code=icon_sizes url='icon_sizes.html' %}


***


### Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`--icon-size-xs`|font-size|
|`--icon-size-sm`|font-size|
|`--icon-size-default`|font-size|
|`--icon-size-md`|font-size|
|`--icon-size-lg`|font-size|
