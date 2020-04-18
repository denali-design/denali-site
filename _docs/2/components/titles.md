---
title: "Titles"
permalink: docs/:path
excerpt: 'Titles are stylized headings that call out important information or data. They are comprised of a title bar, headline, and caption. Title text styles and color can be customized.'
---

# {{ page.title }}
{{ page.excerpt }}


***


### Default title
To create a title start with a `<div>` tag and add the class `.title`. Insert a `<span>` tag with the class `.bar` to create the title bar and a `<div>` tag with the class `.title-text` for the title content. Finally, wrap title headers in `<h3>` tags and title captions in `<h6>` tags and insert them into the `.title-text` `<div>` tag.

{% capture title_default %} 
<div class="title">
<span class="bar"></span>
<div class="title-text">
<h3>Title Element</h3>
<h6>Caption</h6>
</div>
</div>
 {% endcapture %}
{% include code-snippet.html code=title_default url='title_default.html' %}


***


### Bar modifiers
Increase the width of the title bar or customize title bar color by adding `.is-wide` or `.has-bg-status-$status` classes to the bar&#39;s `<span>` tag.

{% capture title_bar %} 
<div class="title">
<span class="bar is-wide"></span>
<div class="title-text">
<h3>Title Element</h3>
<h6>Caption</h6>
</div>
</div>
<br>
<div class="title">
<span class="bar has-bg-status-success"></span>
<div class="title-text">
<h3>Title Element</h3>
<h6>Some Caption</h6>
</div>
</div>
 {% endcapture %}
{% include code-snippet.html code=title_bar url='title_bar.html' %}

### Text content modifiers
Title text content is fully customizable. Replace `<h3>` or `<h6>` tags with an `<a>` tag or any `<h1>` to `<h6>` tag. Add `.is-regular` or `.upper` classes to text elements to create regular or uppercase text. Finally, customize text color by adding `.is-status-$status` or `.is-$color-$value` classes to text elements.

{% capture title_text %} 
<div class="title">
<span class="bar"></span>
<div class="title-text">
<h2 class="is-regular is-status-success">This is styled</h2>
<h6 class="upper is-grey-600">Some Caption</h6>
</div>
</div>
 {% endcapture %}
{% include code-snippet.html code=title_text url='title_text.html' %}


***


### Variables
You can use these variables in a `override.css` file to customize this component.

|Variable Name|CSS Property|
| - | - |
|--titles-height| height|
|--titles-bar-corner-radius| border-radius|
|--titles-bar-bg-color| background|
|--titles-bar-width| width|
|--titles-bar-wider-width| width|
