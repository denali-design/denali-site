---
title: "Menu"
permalink: /documentation/components/menu
excerpt: 'Menus contain discoverable content such as links and user information. They can be aligned to the left or the right.'
---

# {{ page.title }}

{{ page.excerpt }}

***

### Implementation
To implement a menu start with a `<div>` tag and add the `.menu` class. Inside, insert an `<a>` tag with the class `.menu-trigger` to trigger the menu. Lastly, place a `<div>` tag with the class of `.menu-content` below the menu trigger and wrap menu items in `<a>` tags within the content `<div>`.

{% capture menu_default %}{% highlight html %}
<div class="menu">
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
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=menu_default url='menu_default.html' height='230' %}

<blockquote class="accessible">Apply <span class="chips has-bg-grey-100 is-red-500 is-mono">tabindex="0"</span> attribute to the parent a tag to allow users to open the menu when tabbing through the website.</blockquote>

***


### Alignment
By default, menu tooltips are positioned in the center of the menu.

#### Left
Reposition a menu&#39;s tooltip to the left by adding an `.is-left` class to a menu&#39;s outer `<div>`.

{% capture menu_left %}{% highlight html %}
<div class="menu is-left">
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
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=menu_left url='menu_left.html' height='230' %}

#### Right
Reposition a menu&#39;s tooltip to the right by adding an `.is-right` class to a menu&#39;s outer `<div>`.

{% capture menu_right %}{% highlight html %}
<div class="menu is-right">
<a class="menu-trigger">Hover for right menu</a>
<div class="menu-content">
<p class="is-bold">Link copied to clipboard</p>
<a class="is-small is-sub">https://screwdriver.cd/pipelines/134 <i class="d-icon d-external is-extrasmall"></i></a>
</div>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=menu_right url='menu_right.html' %}


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

`$menu-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`corner-radius`            |border-radius          |`4px`                                |           |
|`backgound-color`  |background     |`#ffffff`  |       |
|`shadow`  |box-shadow     |`0px 4px 8px rgba(0, 0, 0, 0.16)`  |       |
|`border:style`  |solid     |`solid`  |       |
|`border:width`  |width     |`2px`  |       |
|`border:color`  |color     |`#e8e8e8`  |       |
|`line-break:size`  |border-width     |`2px`  |       |
|`line-break:color`  |border-color     |`#e8e8e8`  |       |
