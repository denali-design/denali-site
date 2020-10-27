---
title: "Sidebar"
permalink: docs/:path
excerpt: 'Sidebar provide additional navigation within a page.'
---

# {{ page.title }}

{{ page.excerpt }}


***


### Sidebar
Create a sidebar by adding the `.is-vertical` class to a tab&#39;s outer `<div>`.

{% capture tab_primary_vertical %}
<div class="tabs is-primary is-vertical">
    <ul>
        <li class="tabs__section-header">Section Header</li>
        <li><a>Tab 1</a></li>
        <li class="is-active"><a>Tab 2</a></li>
        <li><a>Tab 3</a></li>
        <li><a>Tab 4</a></li>
        <li class="is-disabled"><a>Tab 5</a></li>
    </ul>
</div>
{% endcapture %}
{% include code-snippet.html code=tab_primary_vertical url='tab_primary_vertical.html' height='300' %}

<blockquote class="accessible">Users who do not or cannot use pointing devices can tab through links. These links should be in a logical tabbing order, but if they aren't use the <span class="chips has-bg-grey-100 is-red-500 is-mono">tabindex</span> attribute to allow you to define the order.</blockquote>


***


### Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`$tabs-primary-vertical-width`| width|
|`$tabs-primary-vertical-padding`| padding|
|`$tabs-primary-vertical-tab-item-height`| height|
|`$tabs-primary-vertical-tab-item-padding`| padding|
|`$tabs-primary-vertical-tab-item-active-bg-color`| background|
|`$tabs-primary-vertical-tab-item-active-border`| box-shadow|
|`$tabs-primary-vertical-active-accordion-bg-color`| background|
|`$tabs-primary-vertical-active-accordion-text-color`| color|
|`$tabs-primary-vertical-active-accordion-text-weight`| bold|
|`$tabs-primary-vertical-active-accordion-corner-radius`| border-radius|
