---
title: "Breadcrumbs"
permalink: docs/:path
excerpt: "Breadcrumb components are used to show the relationship betweens pages or content, ususally seperated by icons or slashes."
---

# {{ page.title }}

{{ page.excerpt }}

---

## Implementation

Breadcrumbs follows the basic list HTML structure. Use the `ul` or `ol` tag with the class of `breadcrumb`. What this accomplishes is to convert the list to a horizontal view and adds a / or predefined character between each `li`.

{% capture breadcrumb_default %}

<ul class="breadcrumb">
  <li><span class="link">Item</span></li>
  <li><span class="link">Item</span></li>
  <li><span class="link">Item</span></li>
  <li><span class="link">Item</span></li>
</ul>
{% endcapture %}
{% include code-snippet.html code=breadcrumb_default url='breadcrumbDefault' %}

---

## Ellipsis

With the basic breadcrumb implementation you can virtually add anything inside each `li`. In this example we have two links and a menu. See there respective pages for more information.

{% capture breadcrumb_ellipsis %}

<ul class="breadcrumb">
  <li><span class="link">Item</span></li>
  <li>
    <div class="menu">
      <a class="menu-trigger"><i class="d-icon d-more-horizontal is-small link"></i></a>
      <div class="menu-content">
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>Help</a>
      </div>
    </div>
  </li>
  <li><span class="link">Item</span></li>
</ul>
{% endcapture %}
{% include code-snippet.html code=breadcrumb_ellipsis url='breadcrumbEllipsis' height='200' %}

---

## Variables

You can use these variables to change the visual appearence when creating your own Denali themes in SCSS.

| Variable Name                      | CSS Property |
| ---------------------------------- | ------------ |
| `$breadcrumb-right-margin`         | margin       |
| `$breadcrumb-divider`              | content      |
| `$breadcrumb-divider-color`        | color        |
| `$breadcrumb-divider-right-margin` | margin-right |
