---
title: 'Navbar'
permalink: docs/:path
excerpt: 'The Navbar is a horizontal bar that serves as the primary navigation for your product or site. Denali&#39;s navbar is versatile and responsive. It can contain a variety of elements including logos, links, icons, and search fields.'
layout: framed
---

# {{ page.title }}
{{ page.excerpt }}


***


## Sections
Implement a navbar by creating a `<nav>` tag and adding the `.nav` class. 


### Left
Insert `<div class="nav-left">` to place content to the center of the navbar.

{% capture navbar_left %}
<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src="/assets/images/denali-logo.png" alt="" />
  </div>
</nav>
{% endcapture %}
{% include  code-snippet.html code=navbar_left url='navbarLeft' %}


<blockquote class="info">We construct our navbar to be responsive by default, so the right and center sections need to be wrapped in <span class="chips has-bg-grey-100 is-red-500 is-mono">.nav-responsive</span>.</blockquote>


### Center
Insert `<div class="nav-center">` to place content to the center of the navbar.

{% capture navbar_center %}
<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src="/assets/images/denali-logo.png" alt="" />
  </div>
  <div class="nav-responsive">
    <div class="nav-center">
      <span class="nav-item is-active">Center</span>
    </div>
  </div>
</nav>
{% endcapture %}
{% include  code-snippet.html code=navbar_center url='navbarCenter' %}


### Right
Insert `<div class="nav-right">` to place content to the right of the navbar.

{% capture navbar_right %}
<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src="/assets/images/denali-logo.png" alt="" />
  </div>
  <div class="nav-responsive">
    <div class="nav-right">
      <span class="nav-item"><i class="d-icon d-user-profile-circle"></i></span>
    </div>
  </div>
</nav>
{% endcapture %}
{% include  code-snippet.html code=navbar_right url='navbarRight' %}


***


## Navbar Elements
To add elememts follow the documentation below.

### Brand
Insert brand logos by adding an `<img>` tag with the class `.nav-brand`.

{% capture navbar_brand %}
<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src="/assets/images/denali-logo.png" alt="" />
  </div>
</nav>
{% endcapture %}
{% include  code-snippet.html code=navbar_brand url='navbarBrand' %}


### Items
To insert nav links wrap link text in `<a>` tags with the `.nav-item` class. To set an active link add `.is-active` to the link&#39;s `<a>` tag.

{% capture navbar_items %}
<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src="/assets/images/denali-logo.png" alt="" />
  </div>
  <div class="nav-responsive">
    <div class="nav-right">
      <a class="nav-item is-active">Home</a>
      <a class="nav-item">About</a>
      <a class="nav-item">Contact</a>
    </div>
  </div>
</nav>
{% endcapture %}
{% include  code-snippet.html code=navbar_items url='navbarItems' %}


### Icons
Insert icons by adding `<i>` or `<span>` tags with the `.d-icon` and `.d-$icon-name` classes wrapped in `<a class="nav-item">`.

{% capture navbar_icons %}
<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src="/assets/images/denali-logo.png" alt="" />
  </div>
  <div class="nav-responsive">
    <div class="nav-right">
      <span class="nav-item"><i class="d-icon d-dashboard"></i></span>
      <span class="nav-item"><i class="d-icon d-menu-dialpad"></i></span>
      <span class="nav-item"><i class="d-icon d-user-profile-circle"></i></span>
    </div>
  </div>
</nav>
{% endcapture %}
{% include  code-snippet.html code=navbar_icons url='navbarIcons' %}


### Control
Insert any control elements by adding inputs, buttons, or controls wrapped in `<a class="nav-control">`.

{% capture navbar_control %}
<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src="/assets/images/denali-logo.png" alt="" />
  </div>
  <div class="nav-responsive">
    <div class="nav-right">
      <div class="nav-control">
        <div class="input has-icon-back is-inverse">
          <input type="text" placeholder="Search" /><a class="d-icon d-search"></a>
        </div>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}
{% include  code-snippet.html code=navbar_control url='navbarControl' %}


### Menu
Insert a menu by adding a `.menu-trigger` and `.menu-content` elements wrapped in `<a class="nav-menu">`.

{% capture navbar_menu %}
<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src="/assets/images/denali-logo.png" alt="" />
  </div>
  <div class="nav-responsive">
    <div class="nav-right">
      <div class="menu menu--nav is-right">
        <div class="nav-item menu-trigger">Menu<i class="d-icon d-arrowhead-down is-small"></i></div>
        <div class="menu-content">
          <a>Menu Item #1</a>
          <a>Menu Item #2</a>
          <a>Menu Item #3</a>
        </div>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}
{% include  code-snippet.html code=navbar_menu url='navbarMenu' height='220' %}

<blockquote class="accessible">Users who do not or cannot use pointing devices can tab through links. These links should be in a logical tabbing order, but if they aren't use the <span class="chips has-bg-grey-100 is-red-500 is-mono">tabindex</span> attribute to allow you to define the order. Apply these to nav-items and nav-links.</blockquote>


***


## Responsive
We construct our navbar to be responsive by default, so the right and center sections need to be wrapped in `.nav-responsive`. To make this section visible add `.is-active` to the `.nav-responsive` element.

{% capture navbar_responsive %}
<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src="/assets/images/denali-logo.png" alt=""></img>
    <div class="float-right hide-small-desktop-up">
      <a class="nav-item" id="navToggle"><i class="d-icon d-more-vertical"></i></a>
    </div>
  </div>
  <div class="nav-responsive is-active">
    <div class="nav-center">
      <a class="nav-item is-active">Home</a>
      <a class="nav-item">About</a>
      <a class="nav-item">Contact</a>
    </div>
    <div class="nav-right">
      <div class="menu menu--nav is-right">
        <div class="nav-item menu-trigger">Menu<i class="d-icon d-arrowhead-down is-small"></i></div>
        <div class="menu-content">
          <a>Menu Item #1</a>
          <a>Menu Item #2</a>
          <a>Menu Item #3</a>
        </div>
      </div>
      <a class="nav-item hide-tablet-down"><i class="d-icon d-dashboard"></i><span
          class="icon-name">Dashboard</span></a>
      <a class="nav-item"><i class="d-icon d-menu-dialpad"></i><span class="icon-name">Apps</span></a>
      <a class="nav-item"><i class="d-icon d-user-profile-circle"></i><span class="icon-name">Profile</span></a>
    </div>
  </div>
</nav>
{% endcapture %}
{% include  code-snippet.html code=navbar_responsive url='navbarResponsive' height='400' %}

<blockquote class="accessible">Apply <span class="chips has-bg-grey-100 is-red-500 is-mono">tabindex="0"</span> attribute to allow users to open the collapsed nav section when tabbing through the website.</blockquote>


***


## Background Modifiers
Customize a navbar&#39;s background color by changing the `$navbar-background-color` sass variable or by inserting a `background` attribute in the `<nav>` tag and setting its value to a hex color code.

{% capture navbar_bg_color %}
<nav class="nav" style="background:#0C301E;">
  <div class="nav-left">
    <img class="nav-brand" src="/assets/images/paas-logo.png" alt="" />
  </div>
</nav>
{% endcapture %}
{% include  code-snippet.html code=navbar_bg_color url='navbarBgColor' %}


***


## Position Helper
To position the navbar fixed to top of the browser add the helper class `.is-fixed-top` to the `nav` element.


***


## Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`$navbar-bg-color`| background|
|`$navbar-height`| height|
|`$navbar-item-text-color`| color|
|`$navbar-item-hover-text-color`| color|
|`$navbar-item-active-text-color`| color|
|`$navbar-item-active-border-color`| border-color|
|`$navbar-responsive-bg-color`| background|
|`$navbar-responsive-menu-bg-color`| background|


