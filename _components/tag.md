---
title: "Tags"
permalink: /documentation/components/tags
excerpt: 'Tags display descriptive text information. They come in solid, outline, and selectable styles. Tags can be grouped into scrolling or wrapping lists. Icons can also be added to tags.'
---

# {{ page.title }}
{{ page.excerpt }}


***


### Standard tags
To create standard tags start with a `<span>` or `<a>` tag and add the `.tag` class.

### States
Standard tags have active and disabled states. Implement these states by adding `.is-active` or `.is-disabled` classes to a standard tag&#39;s `<span>` or `<a>` tag.

{% capture tag_default %}{% highlight html %}
<div class="tags">
  <span class="tag">Standard Tag</span>
  <span class="tag is-active">Active Tag</span>
  <span class="tag is-disabled">Disabled Tag</span>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=tag_default url='tag_default.html' %}

***


### Outlined tags
Outlined tags contain information within solid outline containers. To create outlined tags start with a `<span>` or `<a>` tag and add `.tag` and `.outlined` classes.

### States
Outlined tags have active and disabled states. Implement these states by adding `.is-active` or `.is-disabled` classes to an outlined tag&#39;s `<span>` or `<a>` tag.

{% capture tag_outlined %}{% highlight html %}
<div class="tags">
  <a class="tag outlined">Outlined Tag</a>
  <a class="tag outlined is-active">Outlined Selected</a>
  <a class="tag outlined is-disabled">Outlined Disabled</a>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=tag_outlined url='tag_outlined.html' %}


***


### Small tags
Small tags can be implemented by adding the `.is-small` class to a tag&#39;s `<span>` or `<a>` tag.

{% capture tag_sizes %}{% highlight html %}
<div class="tags">
  <span class="tag is-small">Small Standard Tag</span>
  <span class="tag outlined is-small">Small Outlined Tag</span>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=tag_sizes url='tag_sizes.html' %}


***


### Icons
Tags can contain icons. To add an icon insert `<i class="d-icon d-$icon-name">` within the tag&#39;s `<span>` or `<a>` tag.

#### Front
To place an icon at the front of a tag add the `.has-icon-front` class to the tag&#39;s `<span>` or `<a>` tag.

{% capture tag_icon_front %}{% highlight html %}
<div class="tags">
<span class="tag has-icon-front"><i class="d-icon d-check"></i>Standard Tag</span>
<span class="tag is-small has-icon-front"><i class="d-icon d-check"></i>Small Standard Tag</span>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=tag_icon_front url='tag_icon_front.html' %}

#### Back
To place an icon at the back of a tag add the `.has-icon-back` class to the tag&#39;s `<span>` or `<a>` tag.

{% capture tag_icon_back %}{% highlight html %}
<div class="tags">
<span class="tag has-icon-back">Standard Tag<a class="d-icon d-close"></a></span>
<span class="tag is-small has-icon-back">Small Standard Tag<a class="d-icon d-close"></a></span>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=tag_icon_back url='tag_icon_back.html' %}


***


### List
Group tags in a tag list by placing them in a `<div>` tag with the `.tags` class.

#### Wrapping
Tag lists automatically wrap when the list gets too long for its container.

{% capture tag_list_wrap %}{% highlight html %}
<div class="tags">
  <span class="tag">Tag One</span>
  <span class="tag">Tag Two</span>
  <span class="tag">Tag Three</span>
  <span class="tag">Tag Four</span>
  <span class="tag">Tag Five</span>
  <span class="tag">Tag Six</span>
  <span class="tag">Tag Seven</span>
  <span class="tag">Tag Eight</span>
  <span class="tag">Tag Nine</span>
  <span class="tag">Tag Ten</span>
  <span class="tag">Tag Eleven</span>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=tag_list_wrap url='tag_list_wrap.html' %}

#### No wrapping
To override wrapping and implement a vertical scroll to tag lists add the class `.nowrap` to a tag list `<div>` 

{% capture tag_list_nowrap %}{% highlight html %}
<div class="tags nowrap">
  <span class="tag">Tag One</span>
  <span class="tag">Tag Two</span>
  <span class="tag">Tag Three</span>
  <span class="tag">Tag Four</span>
  <span class="tag">Tag Five</span>
  <span class="tag">Tag Six</span>
  <span class="tag">Tag Seven</span>
  <span class="tag">Tag Eight</span>
  <span class="tag">Tag Nine</span>
  <span class="tag">Tag Ten</span>
  <span class="tag">Tag Eleven</span>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=tag_list_nowrap url='tag_list_nowrap.html' %}


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

`$tag-config:`

|**Name**                             |**Type**         |**Default value**                                    |**Computed value**|
|`corner-radius`                      |border-radius    |`14px`                                               |           |
|`padding`                            |padding          |`0px 10px`                                           |           |
|`margin`                             |margin           |`3px`                                                |    |
|`height`                             |height           |`28px`                                               |               |
|`icon-size`                          |font-size        |`2rem`                                               |20px           |
|`icon-color`                         |color            |`map-get($denali-grey-colors, '800')`                |#303030            |
|`background-color`                   |background       |`rgba(map-get($denali-brand-colors, '700'),0.20)`    |rgba(#3570f4, .2)|
|`text-color`                         |color            |`map-get($denali-grey-colors, '800')`                |#303030|
|`active:background-color`            |background       |`rgba(map-get($denali-brand-colors, '700'),0.5)`     |rgba(#3570f4, .5)|
|`disabled:background-color`          |background       |`rgba(map-get($denali-grey-colors, '800'), .1)`      |rgba(#303030,.1)|
|`disabled:text-color`                |color            |`rgba(map-get($denali-grey-colors, '800'), .1)`      |rgba(#303030,.1)|
|`small:text-size`                    |font-size        |`1.2rem`                                             |12px|
|`small:padding`                      |padding          |`0px 8px`                                            ||
|`small:height`                       |height           |`22px`                                               ||
|`small:icon-size`                    |font-size        |`1.6rem`                                             |16px|
|`outlined:text-color`                |color            |`map-get($denali-grey-colors, '800')`                |#303030|
|`outlined:border`                    |border           |`1px solid map-get($denali-brand-colors, '600')`     |1px solid #3697f2|
|`outlined:background-color`          |background       |`transparent`                                        ||
|`outlined:hover-background-color`    |background       |`rgba(map-get($denali-brand-colors, '600'),0.2)`     |rgba(#3697f2,.2)|
|`outlined:active:text-color`         |color            |`map-get($denali-grey-colors, '100')`                |#ffffff|
|`outlined:active:background-color`   |background       |`rgba(map-get($denali-brand-colors, '600'),1)`       |rgba(#3697f2,.1)|
|`outlined:disabled:text-color`       |color            |`rgba(map-get($denali-grey-colors, '800'), .4)`      |rgba(#303030,.4)|
|`outlined:disabled:background-color` |background       |`rgba(map-get($denali-grey-colors, '800'), .1)`      |rgba(#303030,.1)|
|`outlined:disabled:border-color`     |border-color     |`rgba(map-get($denali-grey-colors, '800'), .4)`      |rgba(#303030,.4)|
