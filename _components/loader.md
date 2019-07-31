---
title: 'Loaders'
permalink: /documentation/components/loaders
excerpt: 'Loaders signify that content is being loaded or up-loaded on a page. They come in a variety of sizes and styles and can be added to buttons.'
---

# {{ page.title }}
{{ page.excerpt }}


***


### Implementation
Denali loaders can be implemented three ways: through a class on any element, injecting the svg code directly into an element, or by calling the `svg` through an `<img>` tag. Our preferred method is adding the class `.loader` to a `div`.

{% capture loader_default %}{% highlight html %}
<div class="loader is-large"></div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=loader_default url='loader_default.html' %}


***


### Sizes
Loaders come at a default size of 24px, but can be customized by adding the `.is-small`, `.is-medium`, or `.is-large` classes to the loader `<div>`.

{% capture loader_sizes %}{% highlight html %}
<div class="loader is-extrasmall"></div>
<div class="loader is-small"></div>
<div class="loader is-medium"></div>
<div class="loader is-large"></div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=loader_sizes url='loader_sizes.html' %}


***


### Inverse
Implement an inverse color loader by adding the `.is-inverse` class to the loader `<div>`.
{% capture loader_inverse %}{% highlight html %}
<div class="loader is-inverse is-large"></div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=loader_inverse url='loader_inverse.html' inverse='true' %}


***


### Button loader
We've made it so every button can house a loader. To add a loader to a button start by adding the `.has-loader` class to your button element. From there you have the option to place the `svg` code directly inside the button or call the `.d-loader` class inside the button .

{% capture loader_button %}{% highlight html %}
<a class="button is-primary has-loader">
  <div class="loader"></div>
</a>
<a class="button is-secondary has-loader">
  <div class="loader"></div>
</a>
<a class="button is-danger has-loader">
  <div class="loader"></div>
</a>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=loader_button url='loader_button.html' %}


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

`$loader-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`size:extrasmall`    |width, height     |`12px`  |           |
|`size:small`         |width, height     |`18px`  |           |
|`size:default`       |width, height     |`24px`  |           |
|`size:medium`        |width, height     |`36px`  |           |
|`size:large`         |width, height     |`38px`  |           |
