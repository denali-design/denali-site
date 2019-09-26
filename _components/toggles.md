---
title: "Toggles"
permalink: /documentation/components/toggles
excerpt: 'Toggles are a group of selectable options that are related to each other. The options are contained within a single component and one option is always selected by default. Toggles are available in default and small sizes.'
---

# {{ page.title }}

{{ page.excerpt }}


***


### Default toggle
To create a toggle, open a `<div>` tag with the `.toggle` class. Inside, wrap a `<ul>` tag around `<li>` tags that contain `<a>`tags. Set the default selected option by adding the `.is-active` class to one of the `<li>` tags. Disable options by adding the `.is-disabled` class to `<li>` tags.

{% capture toggle_default %}{% highlight html %}
<div class="toggle">
<ul>
<li><a>Toggle 1</a></li>
<li class="is-active"><a>Toggle 2</a></li>
<li><a>Toggle 3</a></li>
<li><a>Toggle 4</a></li>
<li class="is-disabled"><a>Toggle 5</a></li>
</ul>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=toggle_default url='toggle_default.html' %}

<blockquote class="accessible">Users who do not or cannot use pointing devices can tab through links. These links should be in a logical tabbing order, but if they aren't use the <span class="chips has-bg-grey-100 is-red-500 is-mono">tabindex</span> attribute to allow you to define the order.</blockquote>

***


### Small toggle
To create a small toggle, add the `.is-small` class to a toggle&#39;s outer `<div>` container.

{% capture toggle_size %}{% highlight html %}
<div class="toggle is-small">
<ul>
<li class="is-active"><a>Toggle 1</a></li>
<li><a>Toggle 2</a></li>
</ul>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=toggle_size url='toggle_size.html' %}


***

### Inverse toggle
When a toggle is on a darker background apply `.is-inverse` class to a toggle&#39;s outer `<div>` container.

{% capture toggle_inverse %}{% highlight html %}
<div class="toggle is-inverse">
<ul>
<li><a>Toggle 1</a></li>
<li class="is-active"><a>Toggle 2</a></li>
<li><a>Toggle 3</a></li>
<li><a>Toggle 4</a></li>
<li class="is-disabled"><a>Toggle 5</a></li>
</ul>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=toggle_inverse url='toggle_inverse.html' inverse='true' %}



***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

`$toggle-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`corner-radius`            |border-radius  |`2px`                                              |    |
|`background-color`         |background     |`rgba(map-get($denali-brand-colors, '700'), .08)`  |rgba(#3570f4,0.08)           |
|`text-size`                |font-size      |`1.4rem`                                           |14px    |
|`active:text-color`        |font-size      |`map-get($denali-grey-colors, '800')`              |#303030           |
|`active:background-color`  |background     |`map-get($denali-grey-colors, '100')`              |#ffffff   |
|`active:corner-radius`     |border-radius  |`4px`                                              |   |
|`active:border:style`      |border-style   |`solid`                                            |   |
|`active:border:width`      |border-width   |`2px`                                              |   |
|`active:border:color`      |border-color   |`map-get($denali-brand-colors, '700')`             |#3570f4   |
|`disabled:text-color`      |color          |`rgba(map-get($denali-grey-colors, '800'), 0.2)`   |rgba(#3448f7,0.2)           |
|`padding`                  |padding        |`7px 10px 8px 10px`                                |           |
|`small:padding`            |padding        |`3px 10px 4px 10px`                                |           |
