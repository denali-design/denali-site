---
title: "Typography"
permalink: docs/:path
excerpt: 'Denali offers a Sans Serif and Monospace font-family in a variety of weights and heading styles.'
---

# {{ page.title }}

{{ page.excerpt }}


***


## Helvetica
Denali’s Sans-Serif font-family is Helvetica. Helvetica Regular is Denali's default font and weight for all text. To implement different weights of Helvetica by adding `.is-light`,`.is-regular`, `.is-bold`, or `.is-italic` classes to `<h1>` through `<h6>` and `<p>` tags.

{% capture type_helvetica %} 
<h3 class="is-light">Helvetica - Light</h3>
<h3 class="is-light is-italic">Helvetica - Light Italic</h3>
<h3 class="is-regular">Helvetica - Regular</h3>
<h3 class="is-italic">Helvetica - Italic</h3>
<h3 class="is-bold">Helvetica - Bold</h3>
<h3 class="is-bold is-italic">Helvetica - Bold Italic</h3>
 {% endcapture %}
{% include code-snippet.html code=type_helvetica url='type_helvetica.html' %}

## Mono
Denali’s Monospace font-family is Monospace. It comes in one weight and is implemented by adding `.is-mono` to `<h1>` through `<h6>` and `<p>` tags.

{% capture type_mono %} 
<h3 class="is-mono">Monospace - Regular</h3>
 {% endcapture %}
{% include code-snippet.html code=type_mono url='type_mono.html' %}


***


## Headings
Implement headings with `<h1>` to `<h6>` tags. Heading styles can be modified by adding any of the font and weight classes listed above to `<h1>` through `<h6>` tags.

{% capture type_heading %} 
<h1>Display</h1>
<h2>Headline</h2>
<h3>Title</h3>
<h4>Sub-Title</h4>
<h5 class="is-light">Title Caption</h5>
<h6 class="is-regular">Caption</h6>
 {% endcapture %}
{% include code-snippet.html code=type_heading url='type_heading.html' %}


***


## Body text
Implement body text with the `<p>` tag. Body text styles can be modified by adding any of the font and weight classes listed above to the `<p>` tag.

{% capture type_body %} 
<p>This is a p tag</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
 {% endcapture %}
{% include code-snippet.html code=type_body url='type_body.html' %}


***

## Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|`--headline-color`| color|
|`--headline-font-family`| font-family|
|`--paragraph-color`| color|
|`--paragraph-font-family`| font-family|
|`--h1-font-size`| font-size|
|`--h2-font-size`| font-size|
|`--h3-font-size`| font-size|
|`--h4-font-size`| font-size|
|`--h5-font-size`| font-size|
|`--h6-font-size`| font-size|
|`--p-font-size`| font-size|
|`--h1-font-weight`| font-weight|
|`--h2-font-weight`| font-weight|
|`--h3-font-weight`| font-weight|
|`--h4-font-weight`| font-weight|
|`--h5-font-weight`| font-weight|
|`--h6-font-weight`| font-weight|
|`--p-font-weight`| font-weight|
|`--line-height-compact`| line-height|
|`--line-height-normal`| line-height|
|`--line-height-expanded`| line-height|
