---
title: "Colors"
permalink: docs/:path
excerpt: "Denali's color library is used to style components and convey meaning."
---

# {{ page.title }}

{{ page.excerpt }}

---

## Text Color Modifier

Component color can be modified using the `.is-$color-$value` class, for example `.is-orange-500`.

{% capture color_modifier_color %}
<i class="d-icon d-user-profile-circle is-medium is-orange-500"></i>
{% endcapture %}
{% include code-snippet.html code=color_modifier_color url='colorModifierColor' %}

---

## Background Modifier

Background color can be modified using the `.has-bg-$color-$value` class, for example `.has-bg-graph-purple`.

{% capture color_modifier_background %}

<div class="box has-bg-graph-purple">
  <h4 class="is-grey-100">This is a box with a modifed background color.</h4>
</div>
 {% endcapture %}
{% include code-snippet.html code=color_modifier_background url='color_modifier_background.html' %}

---

## Fill Color Modifier

Fill color can be modified using the `.fill-$color-$value` class, for example `.fill-status-danger`.

---

## Color Contrast Analyzer

Use our color contrast analyzer to make sure the Denali colors you use in components pass the WCAG color contrast standards. More information about color contrast can be found on the <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target="blank">WCAG site</a>.

{% include color-contrast.html %}

---

{% include color-snippet.html %}

---

## Variables

You can use these variables to change the visual appearence when creating your own Denali themes in SCSS.

| Variable Name                | CSS Property         |
| ---------------------------- | -------------------- |
| `$color-{name}-{weight}`     | Hex e.g.`#016EFF`    |
| `$color-{name}-{weight}-rgb` | RGB e.g.`54,151,242` |
