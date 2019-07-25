---
title: "Tabs"
permalink: /documentation/components/tabs
excerpt: 'Tabs provide additional navigation within a page or sub section of a page. They are available in primary and secondary styles.'
---

# {{ page.title }}

{{ page.excerpt }}


***


### Primary
To create a primary tab start with a `<div>` and add the `.tabs` and `.is-primary` classes. Then, insert an `<ul>` tag and place `<a>` tags wrapped in `<li>` tags inside the `<ul>` tag to create tab links. Set an active or disabled state to a tab link by adding a `.is-active` or `.is-disabled` class to a `<li>` tag.

#### Horizontal
Horizontal alignment is built into primary tabs by default.

{% capture tab_primary_horizontal %}{% highlight html %}
<div class="tabs is-primary">
<ul>
<li class="is-active"><a>Tab 1</a></li>
<li><a>Tab 2</a></li>
<li><a>Tab 3</a></li>
<li><a>Tab 4</a></li>
<li class="is-disabled"><a>Tab 5</a></li>
</ul>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=tab_primary_horizontal url='tab_primary_horizontal.html' %}

#### Vertical
Create a vertical primary tab by adding the `.is-vertical` class to a tab&#39;s outer `<div>`.

{% capture tab_primary_vertical %}{% highlight html %}
<div class="tabs is-primary is-vertical">
<ul>
<li><a>Tab 1</a></li>
<li class="is-active"><a>Tab 2</a></li>
<li><a>Tab 3</a></li>
<li><a>Tab 4</a></li>
<li class="is-disabled"><a>Tab 5</a></li>
</ul>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=tab_primary_vertical url='tab_primary_vertical.html' %}

***


### Secondary
To create a secondary tab add the `.is-secondary` class to a tab&#39;s outer `<div>`.

{% capture tab_secondary %}{% highlight html %}
<div class="tabs is-secondary">
<ul>
<li class="is-active"><a>Tab 1</a></li>
<li><a>Tab 2</a></li>
<li><a>Tab 3</a></li>
<li><a>Tab 4</a></li>
<li class="is-disabled"><a>Tab 5</a></li>
</ul>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=tab_secondary url='tab_secondary.html' %}


***


### Tab states
Tabs have an active state and disabled state. To implement either of these states simply add the `.is-active` or `.is-disabled` class to the `<li>` or `<a>` tag containing the tab item.

#### Vertical primary link state
{% capture tab_state_link %}{% highlight html %}
<div class="tabs is-primary is-vertical">
<ul>
<li><a>Tab 1</a></li>
<li><a class="is-active">Tab 2</a></li>
<li><a>Tab 3</a></li>
<li><a>Tab 4</a></li>
<li class="is-disabled"><a>Tab 5</a></li>
</ul>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=tab_state_link url='tab_state_link.html' %}


***


### Hide & show tabs
It is useful to hide vertical tabs on screens tablet size and smaller. To do this, add the `.tablet-down-hide-left` class to the tab&#39;s outer `<div>` tag.

{% capture tab_hide_left %}{% highlight html %}
<div class="tabs is-primary is-vertical tablet-down-hide-left">
<ul>
<li class="is-active"><a>Tab 1</a></li>
<li><a>Tab 2</a></li>
<li><a>Tab 3</a></li>
<li><a>Tab 4</a></li>
<li class="is-disabled"><a>Tab 5</a></li>
</ul>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=tab_hide_left url='tab_hide_left.html' %}


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

`$tabs-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`text-size`                                  |font-size      |`1.6rem`                                         |16px    |
|`primary:background-color`                   |background     |`$brand-100`                                     |#f5f8fe           |
|`primary:padding`                            |padding        |`20px 0px 0px 30px`                              |    |
|`primary:tab-item:height`                    |height         |`40px`                                           |           |
|`primary:tab-item:padding`                   |padding        |`0px 20px`                                       |   |
|`primary:tab-item:corner-radius`             |border-radius  |`2px`                                            |   |
|`primary:tab-item:active:background-color`   |background     |`map-get($denali-grey-colors, '100')`            |#ffffff   |
|`primary:tab-item:active:text-color`         |color          |`map-get($denali-grey-colors, '800')`            |#303030   |
|`primary:tab-item:disabled:text-color`       |color          |`rgba(map-get($denali-grey-colors, '800'), 0.2)` |rgba(#303030, 0.2)   |
|`vertical:width`                             |width          |`300px`  ||
|`vertical:padding`                           |padding        |`12px 0px 40px 0px`||
|`vertical:tab-item:height`                   |height         |`46px`||
|`vertical:tab-item:active:background-color`  |background     |`map-get($denali-grey-colors, '100')`|#ffffff|
|`vertical:tab-item:active:border-left`       |border-left    |`inset 4px 0px map-get($denali-brand-colors, '600')`|inset 4px 0px #3697f2|
|`vertical:tab-item:active-accordion:background-color`    |background     |`map-get($denali-brand-colors, '200')`|#d7e2fd|
|`vertical:tab-item:active-accordion:text-color`          |color          |`map-get($denali-brand-colors, '600')`|#3697f2|
|`vertical:tab-item:active-accordion:text-weight`         |font-weight    |`bold`||
|`vertical:tab-item:active-accordion:corner-radius`       |border-radius  |`8px`||
|`secondary:border-bottom` |border-bottom  |`inset 0px -2px rgba(map-get($denali-brand-colors, '700'), .05)`|inset 0px -2px rgba(#3570f4,0.05)|
|`secondary:tab-item:height` |height  |`40px`||
|`secondary:tab-item:padding` |padding  |`0px 20px`||
|`secondary:tab-item:active:text-color` |color  |`map-get($denali-grey-colors, '800')`|#303030|
|`secondary:tab-item:active:border-bottom` |border-bottom  |`solid 2px map-get($denali-brand-colors, '600')`|solid 2px #3697f2|
