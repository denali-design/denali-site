---
title: "Icons"
permalink: /documentation/aesthetics/icons
excerpt: "Denali&#39;s icon library offers hundreds of icons in outline and solid styles that have been carefully crafted to ensure a coherent and unified UI."
---

# {{ page.title }}

{{ page.excerpt }}


***


### Implementation
To access icons in the Denali Icon Library create an `<i>` or `<span>` tag with the `.d-icon` class followed by the `.d-$icon-name` class that corresponds to the icon you would like to use. For a list of all icon names visit [Denali icons page](https://github.com/pages/denali-system-language/denali-icons/dist/){:target='blank'}. 

{% capture icon_default %}{% highlight html %}
<i class="d-icon d-user-profile-circle is-medium"></i>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=icon_default url='icon_default.html' %}


***


### Icon links
To use an icon as a link wrap your `<i>` or `<span>` tag in an `<a>` tag.  You can modify an icon link&#39;s appearance using the `.sub action` and `.inverse` classes.

#### Default icon links
By default icon links adopt standard link styling.

{% capture icon_main %}{% highlight html %}
<a><i class="d-icon d-notification is-medium"></i></a>
<a class="is-secondary"><i class="d-icon d-notification is-medium"></i></a>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=icon_main url='icon_main.html' %}

#### Sub action icon links
To adopt sub action link styling add the `.is-sub` class to `<a>` tags.

{% capture icon_sub %}{% highlight html %}
<a><span class="d-icon d-star is-sub is-medium"></span></a>
<a class="is-secondary"><span class="d-icon d-star is-sub is-medium"></span></a>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=icon_sub url='icon_sub.html' %}

#### Inverse
Inverse link styling can also be adopted by adding the `.is-inverse` class to `<a>` tags.

{% capture icon_inverse %}{% highlight html %}
<a class="is-inverse"><span class="d-icon d-trash is-medium"></span></a>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=icon_inverse url='icon_inverse.html' inverse='true' %}


***


### Icon sizes
Icons are available in variety of sizes. Implement these sizes by adding the `.is-extrasmall`, `.is-small`, `.is-medium`, or `.is-large ` classes to `<i>` or `<span>` tags.

{% capture icon_sizes %}{% highlight html %}
<i class="d-icon d-user-profile-circle is-extrasmall"></i>
<i class="d-icon d-user-profile-circle is-small"></i>
<i class="d-icon d-user-profile-circle"></i>
<i class="d-icon d-user-profile-circle is-medium"></i>
<i class="d-icon d-user-profile-circle is-large"></i>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=icon_sizes url='icon_sizes.html' %}


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

`$icon-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`sizes:extra-small`      |font-size          |`1.2rem`          |12px           |
|`sizes:small`            |font-size          |`1.8rem`          |18px           |
|`sizes:medium`           |font-size          |`3.6rem`          |36px           |
|`sizes:large`            |font-size          |`4.8rem`          |48px           |
