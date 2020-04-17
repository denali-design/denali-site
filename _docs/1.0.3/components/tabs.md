---
title: "Tabs"
permalink: docs/:path
excerpt: 'Tabs provide additional navigation within a page or sub section of a page. They are available in primary and secondary styles.'
---

# {{ page.title }}

{{ page.excerpt }}


***


### Primary
To create a primary tab start with a `<div>` and add the `.tabs` and `.is-primary` classes. Then, insert an `<ul>` tag and place `<a>` tags wrapped in `<li>` tags inside the `<ul>` tag to create tab links. Set an active or disabled state to a tab link by adding a `.is-active` or `.is-disabled` class to a `<li>` tag.

#### Horizontal
Horizontal alignment is built into primary tabs by default.

{% capture tab_primary_horizontal %} 
<div class="tabs is-primary">
<ul>
<li class="is-active"><a>Tab 1</a></li>
<li><a>Tab 2</a></li>
<li><a>Tab 3</a></li>
<li><a>Tab 4</a></li>
<li class="is-disabled"><a>Tab 5</a></li>
</ul>
</div>
 {% endcapture %}
{% include code-snippet.html code=tab_primary_horizontal url='tab_primary_horizontal.html' %}

#### Vertical
Create a vertical primary tab by adding the `.is-vertical` class to a tab&#39;s outer `<div>`.

{% capture tab_primary_vertical %} 
<div class="tabs is-primary is-vertical">
<ul>
<li><a>Tab 1</a></li>
<li class="is-active"><a>Tab 2</a></li>
<li><a>Tab 3</a></li>
<li><a>Tab 4</a></li>
<li class="is-disabled"><a>Tab 5</a></li>
</ul>
</div>
 {% endcapture %}
{% include code-snippet.html code=tab_primary_vertical url='tab_primary_vertical.html' %}

<blockquote class="accessible">Users who do not or cannot use pointing devices can tab through links. These links should be in a logical tabbing order, but if they aren't use the <span class="chips has-bg-grey-100 is-red-500 is-mono">tabindex</span> attribute to allow you to define the order.</blockquote>


***


### Secondary
To create a secondary tab add the `.is-secondary` class to a tab&#39;s outer `<div>`.

{% capture tab_secondary %} 
<div class="tabs is-secondary">
<ul>
<li class="is-active"><a>Tab 1</a></li>
<li><a>Tab 2</a></li>
<li><a>Tab 3</a></li>
<li><a>Tab 4</a></li>
<li class="is-disabled"><a>Tab 5</a></li>
</ul>
</div>
 {% endcapture %}
{% include code-snippet.html code=tab_secondary url='tab_secondary.html' %}


***


### Tab states
Tabs have an active state and disabled state. To implement either of these states simply add the `.is-active` or `.is-disabled` class to the `<li>` or `<a>` tag containing the tab item.

#### Vertical primary link state
{% capture tab_state_link %} 
<div class="tabs is-primary is-vertical">
<ul>
<li><a>Tab 1</a></li>
<li><a class="is-active">Tab 2</a></li>
<li><a>Tab 3</a></li>
<li><a>Tab 4</a></li>
<li class="is-disabled"><a>Tab 5</a></li>
</ul>
</div>
 {% endcapture %}
{% include code-snippet.html code=tab_state_link url='tab_state_link.html' %}


***


### Hide & show tabs
It is useful to hide vertical tabs on screens tablet size and smaller. To do this, add the `.tablet-down-hide-left` class to the tab&#39;s outer `<div>` tag.

{% capture tab_hide_left %} 
<div class="tabs is-primary is-vertical tablet-down-hide-left">
<ul>
<li class="is-active"><a>Tab 1</a></li>
<li><a>Tab 2</a></li>
<li><a>Tab 3</a></li>
<li><a>Tab 4</a></li>
<li class="is-disabled"><a>Tab 5</a></li>
</ul>
</div>
 {% endcapture %}
{% include code-snippet.html code=tab_hide_left url='tab_hide_left.html' %}


***


### Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`--tabs-font-size`| font-size|
|`--tabs-primary-bg-color`| background|
|`--tabs-primary-padding`| padding|
|`--tabs-parimary-tab-item-height`| height|
|`--tabs-parimary-tab-item-padding`| padding|
|`--tabs-parimary-tab-item-corner-radius`| border-radius|
|`--tabs-parimary-tab-item-text-color`| color|
|`--tabs-parimary-tab-item-active-bg-color`| background|
|`--tabs-parimary-tab-item-active-text-color`| color|
|`--tabs-parimary-tab-item-disabled-text-color`| color|
|`--tabs-primary-vertical-width`| width|
|`--tabs-primary-vertical-padding`| padding|
|`--tabs-primary-vertical-tab-item-height`| height|
|`--tabs-primary-vertical-tab-item-padding`| padding|
|`--tabs-primary-vertical-tab-item-active-bg-color`| background|
|`--tabs-primary-vertical-tab-item-active-border`| box-shadow|
|`--tabs-primary-vertical-active-accordion-bg-color`| background|
|`--tabs-primary-vertical-active-accordion-text-color`| color|
|`--tabs-primary-vertical-active-accordion-text-weight`| bold|
|`--tabs-primary-vertical-active-accordion-corner-radius`| border-radius|
|`--tabs-secondary-border`| box-shadow|
|`--tabs-secondary-tab-item-height`| height|
|`--tabs-secondary-tab-item-padding`| padding|
|`--tabs-secondary-tab-item-text-color`| color|
|`--tabs-secondary-tab-item-active-text-color`| color|
|`--tabs-secondary-tab-item-active-border`| box-shadow|
