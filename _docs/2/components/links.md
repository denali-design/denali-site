---
title: 'Links'
permalink: docs/:path
excerpt: 'Links connect pages to each other and allow users to perform actions within a page. They come in a variety of sizes and styles and can be used together with icons.'
---

# {{ page.title }}
{{ page.excerpt }}

<blockquote class="accessible">Be sure to add descriptive text to links that provides users with the proper context of when the link will take them when clicking. More information can be found on the <a href="https://www.w3.org/TR/WCAG20/#navigation-mechanisms" target="blank">WCAG site</a>.</blockquote>

***


### Links
Implement links by wrapping text in an `<a>` tag.

{% capture link_default %} 
<a>Click Here</a>
 {% endcapture %}
{% include code-snippet.html code=link_default url='link_default.html' %}

### States
Links have active and disabled states. An active state is triggered when a link is clicked or hovered. It can be forced by adding the `.is-active` class to a link&#39;s `<a>` tag. Conversely, a disabled state can be implemented by adding the `.is-disabled` class to a link&#39;s `<a>` tag.

{% capture link_states %} 
<a>Default Link</a>
<a class="is-active">Active or Hovered Link</a>
<a class="is-disabled">Disabled Link</a>
 {% endcapture %}
{% include code-snippet.html code=link_states url='link_states.html' %}

### Small links
Small sized links can be implemented by adding the `.is-small` class to a link&#39;s `<a>` tag.

{% capture link_sizes %} 
<a>Default Link</a>
<a class="is-small">Small Link</a>
 {% endcapture %}
{% include code-snippet.html code=link_sizes url='link_sizes.html' %}


***


### Links with icons
Icons can be used as links, either on their own or accompanied by text. To add an icon to a link insert an `<i>`tag with the `.d-icon` and `.d-$icon-name` classes within the `<a>` tag.

#### Front
To place an icon at the front of a link add `.has-icon-front` to the `<a>` tag.

{% capture link_icons_front %} 
<a class="has-icon-front"><i class="d-icon d-add-circle"></i>Default size with icon in front</a>
<br>
<a class="is-small has-icon-front"><i class="d-icon d-add-circle"></i>Small size with icon in front</a>
 {% endcapture %}
{% include code-snippet.html code=link_icons_front url='link_icons_front.html' %}

#### Back
To place an icon to the back of a link add `.has-icon-back` to the `<a>` tag.

{% capture link_icons_back %} 
<a  class="has-icon-back">Default size with icon<i class="d-icon d-external is-sub"></i></a>
<br>
<a class="is-small has-icon-back">Small size with icon<i class="d-icon d-external is-sub"></i></a>
 {% endcapture %}
{% include code-snippet.html code=link_icons_back url='link_icons_back.html' %}

<blockquote class="accessible">When using icons with links, reduce redundancy by adding <span class="chips has-bg-grey-100 is-red-500 is-mono">aria-hidden="true"</span> and set <span class="chips has-bg-grey-100 is-red-500 is-mono">tabindex="-1"</span> will make sure only textual link is read and focused on by screenreader.</blockquote>

***


### Secondary
Secondary links are grey in color. To create a secondary link add the `.is-secondary` class to an `<a>` tag.

{% capture link_secondary %} 
<a class="is-secondary">Secondary Link</a>
 {% endcapture %}
{% include code-snippet.html code=link_secondary url='link_secondary.html' %}


***


### Sub action
Sub action links can be blue or grey in color but appear a lower opacity. To create a sub action link add the `.is-sub` class to an `<a>` tag.

{% capture link_sub %} 
<a class="is-sub">Sub Link</a>
<br>
<a class="is-secondary is-sub">Secondary Sub Link</a>
 {% endcapture %}
{% include code-snippet.html code=link_sub url='link_sub.html' %}


***


### Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`$links-text-color`|color|
|`$links-hover-text-color`|color|
|`$links-disabled-text-color`|color|
|`$links-secondary-text-color`|color|
|`$links-secondary-hover-text-color`|color|
|`$links-inverse-text-color`|color|
|`$links-inverse-hover-text-color`|color|
|`$links-small-text-size`|font-size|
