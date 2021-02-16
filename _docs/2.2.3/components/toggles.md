---
title: "Toggles"
permalink: docs/:path
excerpt: "Toggles are a group of selectable options that are related to each other. The options are contained within a single component and one option is always selected by default. Toggles are available in default and small sizes."
---

# {{ page.title }}

{{ page.excerpt }}

---

### Default toggle

To create a toggle, open a `<div>` tag with the `.toggle` class. Inside, wrap a `<ul>` tag around `<li>` tags that contain `<a>`tags. Set the default selected option by adding the `.is-active` class to one of the `<li>` tags. Disable options by adding the `.is-disabled` class to `<li>` tags.

{% capture toggle_default %}

<div class="toggle">
    <ul>
        <li><a>Toggle 1</a></li>
        <li class="is-active"><a>Toggle 2</a></li>
        <li><a>Toggle 3</a></li>
        <li><a>Toggle 4</a></li>
        <li class="is-disabled"><a>Toggle 5</a></li>
    </ul>
</div>
{% endcapture %}
{% include code-snippet.html code=toggle_default url='toggleDefault' %}

<blockquote class="accessible">Users who do not or cannot use pointing devices can tab through links. These links should be in a logical tabbing order, but if they aren't use the <span class="chips has-bg-grey-100 is-red-500 is-mono">tabindex</span> attribute to allow you to define the order.</blockquote>

---

### Radio toggles

Radio toggles can come in handy when passing values. To create these add `input` tags with the `type` equal to `radio` and add a `label` for each input.

{% capture toggle_radio %}

<div class="toggle">
	<input type="radio" id="radio-three" name="switch-two" value="" checked/>
	<label for="radio-three">One</label>
	<input type="radio" id="radio-four" name="switch-two" value="" />
	<label for="radio-four">Two</label>
	<input type="radio" id="radio-five" name="switch-two" value="" />
	<label for="radio-five">Three</label>
</div>
{% endcapture %}
{% include code-snippet.html code=toggle_radio url='toggleRadio' %}

---

### Small toggle

To create a small toggle, add the `.is-small` class to a toggle&#39;s outer `<div>` container.

{% capture toggle_size %}

<div class="toggle is-small">
<ul>
<li class="is-active"><a>Toggle 1</a></li>
<li><a>Toggle 2</a></li>
</ul>
</div>
{% endcapture %}
{% include code-snippet.html code=toggle_size url='toggleSize' %}

---

### Icon toggles

Icon toggles are very easy to create just add any icon code `<span class="d-icon d-add"></span>` in the `label` or `li` tag.

{% capture toggle_icons %}

<div class="toggle has-icons">
  <input type="radio" id="radio-eight" name="switch-four" value="" checked />
  <label for="radio-eight">
    <span class="d-icon d-add"></span>
  </label>
  <input type="radio" id="radio-nine" name="switch-four" value="" />
  <label for="radio-nine">
    <span class="d-icon d-minus"></span>
  </label>
</div>

<br>

<div class="toggle is-small">
    <ul>
        <li class="is-active"><a><span class="d-icon d-add"></span></a></li>
        <li><a><span class="d-icon d-minus"></span></a></li>
    </ul>
</div>
{% endcapture %}
{% include code-snippet.html code=toggle_icons url='toggleIcons' %}

---

### Inverse toggle

When a toggle is on a darker background apply `.is-inverse` class to a toggle&#39;s outer `<div>` container.

{% capture toggle_inverse %}

<div class="toggle is-inverse">
<ul>
<li><a>Toggle 1</a></li>
<li class="is-active"><a>Toggle 2</a></li>
<li><a>Toggle 3</a></li>
<li><a>Toggle 4</a></li>
<li class="is-disabled"><a>Toggle 5</a></li>
</ul>
</div>
 {% endcapture %}
{% include code-snippet.html code=toggle_inverse url='toggleInverse' inverse='true' %}

---

### Variables

You can use these variables to change the visual appearence when creating your own Denali themes in SCSS.

| Variable Name                       | CSS Property  |
| ----------------------------------- | ------------- |
| `$toggle-corner-radius`             | border-radius |
| `$toggle-bg-color`                  | background    |
| `$toggle-text-color`                | color         |
| `$toggle-text-hover-color`          | color         |
| `$toggle-text-size`                 | 1.4rem        |
| `$toggle-padding`                   | padding       |
| `$toggle-height`                    | height        |
| `$toggle-active-text-color`         | color         |
| `$toggle-active-bg-color`           | background    |
| `$toggle-active-corner-radius`      | border-radius |
| `$toggle-active-border-width`       | 2px           |
| `$toggle-active-border-color`       | border-color  |
| `$toggle-disabled-text-color`       | color         |
| `$toggle-small-padding`             | padding       |
| `$toggle-small-height`              | height        |
| `$toggle-inverse-text-color`        | color         |
| `$toggle-inverse-bg-color`          | background    |
| `$toggle-inverse-active-text-color` | color         |
| `$toggle-inverse-active-bg-color`   | background    |
