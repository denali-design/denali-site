---
title: "Menu"
permalink: docs/:path
excerpt: 'Menus contain discoverable content such as links and user information. They can be aligned to the left or the right.'
---

# {{ page.title }}

{{ page.excerpt }}

***

### Implementation
To implement a menu start with a `<div>` tag and add the `.menu` class. Inside, insert an `<a>` tag with the class `.menu-trigger` to trigger the menu. Lastly, place a `<div>` tag with the class of `.menu-content` below the menu trigger and wrap menu items in `<a>` tags within the content `<div>`.

{% capture menu_default %}
<!-- Inline block is added due to the component inheriting the display block. -->
<div class="menu" style="display:inline-block;">
    <a class="menu-trigger">Hover for default menu</a>
    <div class="menu-content">
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>Help</a>
        <hr>
        <a>Support</a>
    </div>
</div>
{% endcapture %}
{% include code-snippet.html code=menu_default url='menuDefault' height='230' %}

<blockquote class="accessible">Apply <span class="chips has-bg-grey-100 is-red-500 is-mono">tabindex="0"</span> attribute to the parent a tag to allow users to open the menu when tabbing through the website.</blockquote>

***


### Alignment
By default, menu tooltips are positioned in the center of the menu.

#### Left
Reposition a menu&#39;s tooltip to the left by adding an `.is-left` class to a menu&#39;s outer `<div>`.

{% capture menu_left %}
<!-- Inline block is added due to the component inheriting the display block. -->
<div class="menu is-left" style="display:inline-block;">
    <a class="menu-trigger">Hover for left menu</a>
    <div class="menu-content">
        <ul>
            <li><a>User guide</a></li>
            <li><a>Follow us on jive</a></li>
            <li><a>Send Feedback</a></li>
            <hr>
            <li><a>Support</a></li>
        </ul>
    </div>
</div>
{% endcapture %}
{% include code-snippet.html code=menu_left url='menuLeft' height='230' %}

#### Right
Reposition a menu&#39;s tooltip to the right by adding an `.is-right` class to a menu&#39;s outer `<div>`.

{% capture menu_right %}
<!-- Inline block is added due to the component inheriting the display block. -->
<div class="menu is-right" style="display:inline-block;">
  <a class="menu-trigger">Hover for right menu</a>
  <div class="menu-content">
    <p class="is-bold">Link copied to clipboard</p>
    <a class="is-small is-sub">https://screwdriver.cd/pipelines/134 <i class="d-icon d-external is-extrasmall"></i></a>
  </div>
</div>
{% endcapture %}
{% include code-snippet.html code=menu_right url='menuRight' %}


***


### Links Simulation
If you need to simulate the visual appearance of a link, but don't want to use an `a` tag you can add a class of `link` to a `span` tag to achieve this.

{% capture menu_links %}
<!-- Inline block is added due to the component inheriting the display block. -->
<div class="menu" style="display:inline-block;">
    <a class="menu-trigger">Hover for default menu</a>
    <div class="menu-content">
        <span class="link">Home</span>
        <span class="link">About</span>
        <span class="link">Contact</span>
        <span class="link">Help</span>
        <hr>
        <span class="link">Support</span>
    </div>
</div>
{% endcapture %}
{% include code-snippet.html code=menu_links url='menuLinks' height='230' %}


***


### Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`$menu-bg-color`|background|
|`$menu-corner-radius`|border-radius|
|`$menu-shadow`|box-shadow|
|`$menu-border-color`|border-color|
|`$menu-border-width`| border-width|
|`$menu-border-style`|border-style|
|`$menu-line-break-size`|height|
|`$menu-line-break-color`|background|
