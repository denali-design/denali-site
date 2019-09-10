---
title: 'Navbar'
permalink: /documentation/components/navbar
excerpt: 'The Navbar is a horizontal bar that serves as the primary navigation for your product or site. Denali&#39;s navbar is versatile and responsive. It can contain a variety of elements including logos, links, icons, and search fields.'
---

# {{ page.title }}
{{ page.excerpt }}


***


### Left section
Implement a navbar by creating a `<nav>` tag and adding the `.nav` class. Then, insert `<div class="nav-left">` to place content to the left of the navbar.  

#### Brand logos
Insert brand logos by adding an `<img>` tag with the class `.nav-brand` within a navbar&#39;s `<div>` tag.

{% capture navbar_left %}{% highlight html %}
<nav class="nav">
<div class="nav-left">
<img class="nav-brand" src="/denali-site/assets/images/denali-logo.svg"/>
</div>
</nav>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=navbar_left url='navbar_left.html' %}


***


### Right section
Insert `<div class="nav-right">` to place content to the right of the navbar.

#### Nav icons
Insert icons by adding `<i>` or `<span>` tags with the `.d-icon` and `.d-$icon-name` classes wrapped in `<a class="nav-icon">` within a navbar&#39;s `<div>` tag.

{% capture navbar_right %}{% highlight html %}
<nav class="nav">
<div class="nav-left">
<img class="nav-brand" src="/denali-site/assets/images/denali-logo.svg" alt="" />
</div>
<div class="nav-right">
<a class="nav-icon"><i class="d-icon d-dashboard"></i></a>
<a class="nav-icon"><i class="d-icon d-menu-dialpad"></i></a>
<a class="nav-icon"><i class="d-icon d-user-profile-circle"></i></a>
</div>
</nav>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=navbar_right url='navbar_right.html' %}


***


### Center section
To create a center section add a `.nav-right` element and group center and right content using the `.nav-group` class. To center content on small desktop sizes and up add the `.space-between-small-desktop-up` helper class.

#### Nav links
To insert nav links wrap link text in `<a>` tags with the `.nav-item` class. To set an active link add `.is-active` to the link&#39;s `<a>` tag.

{% capture navbar_center_list %}{% highlight html %}
<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src="/denali-site/assets/images/denali-logo.svg" alt="" />
  </div>
  <div class="nav-right space-between-small-desktop-up">
    <div class="nav-group">
      <a class="nav-item is-active">Home</a>
      <a class="nav-item">About</a>
      <a class="nav-item">Contact</a>
    </div>
    <div class="nav-group">
      <a class="nav-icon"><i class="d-icon d-dashboard"></i><span class="nav-icon-text"></span></a>
      <a class="nav-icon"><i class="d-icon d-menu-dialpad"></i><span class="nav-icon-text"></span></a>
      <a class="nav-icon"><i class="d-icon d-user-profile-circle"></i><span class="nav-icon-text"></span></a>
    </div>
  </div>
</nav>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=navbar_center_list url='navbar_center_list.html' %}

#### Search
To insert a search bar start with `<div class="input-group has-button">`. Inside, add `< div class="input is-dark">` wrapped around `< input type="text" placeholder="Search" />` followed by `< button class="button is-primary has-icon">` wrapped around  `<i class="d-icon d-search is-small"></i>`.


{% capture navbar_center_search %}{% highlight html %}
<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src="/denali-site/assets/images/denali-logo.svg" alt="" />
  </div>
  <div class="nav-right">
    <div class="nav-group">
      <div class="input-group has-button">
        <div class="input is-inverse">
          <input type="text" placeholder="Search" />
        </div>
        <button class="button is-solid has-icon">
          <i class="d-icon d-search is-small"></i>
        </button>
      </div>
    </div>
    <div class="nav-group">
      <a class="nav-icon"><i class="d-icon d-dashboard"></i><span class="nav-icon-text"></span></a>
      <a class="nav-icon"><i class="d-icon d-menu-dialpad"></i><span class="nav-icon-text"></span></a>
      <a class="nav-icon"><i class="d-icon d-user-profile-circle"></i><span class="nav-icon-text"></span></a>
    </div>
  </div>
</nav>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=navbar_center_search url='navbar_center_search.html' %}


***


### Responsive
Add the class `.responsive` to a navbar's `.nav-right` element to hide navbar content on mobile screen sizes. Add a link or "more" icon `<i class="d-icon d-more-vertical"></i>` wrapped in an `<a>` tag with the class `nav-toggle-dropdown`to display hidden navbar content on hover.

{% capture navbar_responsive %}{% highlight html %}
<nav class="nav">
  <div class="nav-left">
    <img class="nav-brand" src="/denali-site/assets/images/denali-logo.svg" alt=""></img>
  </div>
  <a class="nav-icon nav-toggle-dropdown"><i class="d-icon d-more-vertical"></i></a>
  <div class="nav-right responsive">
    <a class="nav-item is-active">Home</a>
    <a class="nav-item">Climb</a>
    <a class="nav-item">Contact</a>
    <a class="nav-icon"><i class="d-icon d-dashboard"></i></a>
    <a class="nav-icon"><i class="d-icon d-menu-dialpad"></i></a>
    <a class="nav-icon"><i class="d-icon d-user-profile-circle"></i></a>
  </div>
</nav>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=navbar_responsive url='navbar_responsive.html' %}


***


### Modifiers
Customize a navbar&#39;s background color by changing the `$navbar-background-color` sass variable or by inserting a `background` attribute in the `<nav>` tag and setting its value to a hex color code.

{% capture navbar_bg_color %}{% highlight html %}
<nav class="nav" style="background:#0C301E;">
<div class="nav-left">
<img class="nav-brand" src="/denali-site/assets/images/paas-logo.png" alt="" />
</div>
<div class="nav-right">
<a class="nav-icon"><i class="d-icon d-dashboard"></i></a>
<a class="nav-icon"><i class="d-icon d-menu-dialpad"></i></a>
<a class="nav-icon"><i class="d-icon d-user-profile-circle"></i></a>
</div>
</nav>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=navbar_bg_color url='navbar_bg_color.html' %}


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

`$navbar-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`backgound-color`  |background     |`#0A2D45`  |       |
|`text-color`  |color     |`$grey-100`  |       |
|`height`  |height     |`60px`  |       |
|`nav-items:text-color`  |color     |`$grey-100`  |       |
|`nav-items:active-border-color`  |border-color     |`#3697F2`  |       |
