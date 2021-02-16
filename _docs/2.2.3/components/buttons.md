---
title: "Buttons"
permalink: docs/:path
excerpt: "Buttons allow users to take actions within a product. Denali buttons come in a variety of styles, sizes, and states."
---

# {{ page.title }}

{{ page.excerpt }}

---

### States

By default, our buttons appear darker when active. However, you can force the active state appearance by adding the `.is-active` modifier to your `<button>`. Alternatively, Denali buttons have a greyed out appearance when disabled. To disable a button, add the `disabled` attribute to your `<button>`.

#### Solid

{% capture button_solid %}
<button class="button is-solid">Solid Default</button>
<button class="button is-solid is-active">Solid Active</button>
<button class="button is-solid" disabled="">Solid Disabled</button>
{% endcapture %}
{% include code-snippet.html code=button_solid url='button_solid.html' %}

#### Outline

{% capture button_outline %}
<button class="button is-outline">Outline Default</button>
<button class="button is-outline is-active">Outline Active</button>
<button class="button is-outline" disabled="">Outline Disabled</button>
{% endcapture %}
{% include code-snippet.html code=button_outline url='button_outline.html' %}

#### Ghost

{% capture button_ghost %}
<button class="button is-ghost">Ghost Default</button>
<button class="button is-ghost is-active">Ghost Active</button>
<button class="button is-ghost" disabled="">Ghost Disabled</button>
{% endcapture %}
{% include code-snippet.html code=button_ghost url='button_ghost.html' %}

#### Text

{% capture button_text %}
<button class="button is-text">Text Default</button>
<button class="button is-text is-active">Text Active</button>
<button class="button is-text" disabled="">Text Disabled</button>
{% endcapture %}
{% include code-snippet.html code=button_text url='button_text.html' %}

#### Danger

{% capture button_danger %}
<button class="button is-danger">Danger Default</button>
<button class="button is-danger is-active">Danger Active</button>
<button class="button is-danger" disabled="">Danger Disabled</button>
{% endcapture %}
{% include code-snippet.html code=button_danger url='button_danger.html' %}

#### Inverse

Note: you can add `.is-inverse` to any button on a darker background.
{% capture button_inverse %}
<button class="button is-solid is-inverse">Solid</button>
<button class="button is-outline is-inverse">Outline</button>
<button class="button is-ghost is-inverse">Ghost</button>
<button class="button is-text is-inverse">Text</button>
{% endcapture %}
{% include code-snippet.html code=button_inverse url='button_inverse.html' inverse='true' %}

---

### Buttons with icons

Icons can be placed within buttons on their own or accompanied by text. Icons placed within buttons adopt button styles.

#### Button with icon & text

To place icons alongside text in buttons, insert an `<i>` or `<span>` tag with the `.d-icon` class followed by the `.d-$icon-name` class.

{% capture button_icon_text %}
<button class="button is-solid">
<i class="d-icon d-share is-small"></i>
Share
</button>
<button class="button is-outline">
<i class="d-icon d-share is-small"></i>
Share
</button>
<button class="button is-ghost">
<i class="d-icon d-share is-small"></i>
Share
</button>
<button class="button is-text">
<i class="d-icon d-share is-small"></i>
Share
</button>
<button class="button is-danger">
<i class="d-icon d-share is-small"></i>
Share
</button>
{% endcapture %}
{% include code-snippet.html code=button_icon_text url='button_icon_text.html' %}

#### Button with icon

To place an icon in a button on its own, add the `.has-icon` class to the outer `<button>` tag.

{% capture button_icon %}
<button class="button is-solid has-icon">
<i class="d-icon d-check is-small"></i>
</button>
<button class="button is-outline has-icon">
<i class="d-icon d-check is-small"></i>
</button>
<button class="button is-ghost has-icon">
<i class="d-icon d-check is-small"></i>
</button>
<button class="button is-text has-icon">
<i class="d-icon d-check is-small"></i>
</button>
<button class="button is-danger has-icon">
<i class="d-icon d-check is-small"></i>
</button>
{% endcapture %}
{% include code-snippet.html code=button_icon url='button_icon.html' %}

<blockquote class="accessible">When using icons with buttons, reduce redundancy by adding <span class="chips has-bg-grey-100 is-red-500 is-mono">aria-hidden="true"</span> and set <span class="chips has-bg-grey-100 is-red-500 is-mono">tabindex="-1"</span> will make sure only textual link is read and focused on by screenreader.</blockquote>

---

### Button sizes

Buttons are available in default, medium, and small sizes. The default button size is automatically built into our button styles. Implement medium and small buttons by adding an `.is-medium` or `.is-small` class to the `<button>` tag.

{% capture button_sizes %}
<a class="button is-solid is-large">Large</a>
<a class="button is-solid">Default</a>
<a class="button is-solid is-medium">Medium</a>
<a class="button is-solid is-small">Small</a>
{% endcapture %}
{% include code-snippet.html code=button_sizes url='button_sizes.html' %}

---

### Full Buttons

Buttons can also be made to be the full length of the parent container. You can do this by adding the `.is-full` class to the `<button>` or `<a>` tag.

{% capture button_full %}
<a class="button is-solid is-full">Full Button</a>
{% endcapture %}
{% include code-snippet.html code=button_full url='button_full.html' %}

---

### Button Groups

To create a button group just wrap two buttons with a `div` tag and class of `button-group`.

{% capture button_groups %}

<div class="button-group">
  <a class="button is-outline">Button Group</a>
  <a class="button is-outline has-icon"><i class="d-icon d-arrowhead-down is-small"></i></a>
</div>
{% endcapture %}
{% include code-snippet.html code=button_groups url='buttonGroups' %}

---

### Variables

You can use these variables to change the visual appearence when creating your own Denali themes in SCSS.

| Variable Name                     | CSS Property  |
| --------------------------------- | ------------- |
| `$button-corner-radius`           | border-radius |
| `$button-font-size`               | font-size     |
| `$button-font-weight`             | font-weight   |
| `$button-sizes-sm-height`         | height        |
| `$button-sizes-sm-font-size`      | font-size     |
| `$button-sizes-sm-min-width`      | min-width     |
| `$button-sizes-md-height`         | height        |
| `$button-sizes-md-font-size`      | font-size     |
| `$button-sizes-md-min-width`      | min-width     |
| `$button-sizes-default-height`    | height        |
| `$button-sizes-default-font-size` | font-size     |
| `$button-sizes-default-min-width` | min-width     |
| `$button-sizes-lg-height`         | height        |
| `$button-sizes-lg-font-size`      | font-size     |
| `$button-sizes-lg-min-width`      | min-width     |

| Variable Name                               | CSS Property |
| ------------------------------------------- | ------------ |
| `$button-solid-default-bg-color`            | background   |
| `$button-solid-default-text-color`          | color        |
| `$button-solid-default-inverse-bg-color`    | background   |
| `$button-solid-default-inverse-text-color`  | color        |
| `$button-solid-focus-bg-color`              | background   |
| `$button-solid-focus-text-color`            | color        |
| `$button-solid-focus-inverse-bg-color`      | background   |
| `$button-solid-focus-inverse-text-color`    | color        |
| `$button-solid-disabled-bg-color`           | background   |
| `$button-solid-disabled-text-color`         | color        |
| `$button-solid-disabled-inverse-bg-color`   | background   |
| `$button-solid-disabled-inverse-text-color` | color        |

| Variable Name                               | CSS Property |
| ------------------------------------------- | ------------ |
| `$button-ghost-default-bg-color`            | background   |
| `$button-ghost-default-text-color`          | color        |
| `$button-ghost-default-inverse-bg-color`    | background   |
| `$button-ghost-default-inverse-text-color`  | color        |
| `$button-ghost-focus-bg-color`              | background   |
| `$button-ghost-focus-text-color`            | color        |
| `$button-ghost-focus-inverse-bg-color`      | background   |
| `$button-ghost-focus-inverse-text-color`    | color        |
| `$button-ghost-disabled-bg-color`           | background   |
| `$button-ghost-disabled-text-color`         | color        |
| `$button-ghost-disabled-inverse-bg-color`   | background   |
| `$button-ghost-disabled-inverse-text-color` | color        |

| Variable Name                                 | CSS Property |
| --------------------------------------------- | ------------ |
| `$button-outline-default-bg-color`            | background   |
| `$button-outline-default-text-color`          | color        |
| `$button-outline-default-border`              | border       |
| `$button-outline-default-inverse-bg-color`    | background   |
| `$button-outline-default-inverse-text-color`  | color        |
| `$button-outline-default-inverse-border`      | border       |
| `$button-outline-focus-bg-color`              | background   |
| `$button-outline-focus-text-color`            | color        |
| `$button-outline-focus-border`                | border       |
| `$button-outline-focus-inverse-bg-color`      | background   |
| `$button-outline-focus-inverse-text-color`    | color        |
| `$button-outline-focus-inverse-border`        | border       |
| `$button-outline-disabled-bg-color`           | background   |
| `$button-outline-disabled-text-color`         | color        |
| `$button-outline-disabled-border`             | border       |
| `$button-outline-disabled-inverse-bg-color`   | background   |
| `$button-outline-disabled-inverse-text-color` | color        |
| `$button-outline-disabled-inverse-border`     | border       |

| Variable Name                              | CSS Property |
| ------------------------------------------ | ------------ |
| `$button-text-default-bg-color`            | background   |
| `$button-text-default-text-color`          | color        |
| `$button-text-default-inverse-bg-color`    | background   |
| `$button-text-default-inverse-text-color`  | color        |
| `$button-text-focus-bg-color`              | background   |
| `$button-text-focus-text-color`            | color        |
| `$button-text-focus-inverse-bg-color`      | background   |
| `$button-text-focus-inverse-text-color`    | color        |
| `$button-text-disabled-bg-color`           | background   |
| `$button-text-disabled-text-color`         | color        |
| `$button-text-disabled-inverse-bg-color`   | background   |
| `$button-text-disabled-inverse-text-color` | color        |
