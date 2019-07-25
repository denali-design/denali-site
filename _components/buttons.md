---
title: 'Buttons'
permalink: /documentation/components/buttons
excerpt: 'Buttons allow users to take actions within a product. Denali buttons come in a variety of styles, sizes, and states.'
---

# {{ page.title }}
{{ page.excerpt }}

***


### States
By default, our buttons appear darker when active. However, you can force the active state appearance by adding the `.is-active` modifier to your `<button>`. Alternatively, Denali buttons have a greyed out appearance when disabled. To disable a button, add the `disabled` attribute to your `<button>`.

#### Primary
{% capture button_primary %}{% highlight html %}
<button class="button is-primary">Primary Default</button>
<button class="button is-primary is-active">Primary Active</button>
<button class="button is-primary" disabled="">Primary Disabled</button>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=button_primary url='button_primary.html' %}

#### Secondary
{% capture button_secondary %}{% highlight html %}
<button class="button is-secondary">Secondary Default</button>
<button class="button is-secondary is-active">Secondary Active</button>
<button class="button is-secondary" disabled="">Secondary Disabled</button>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=button_secondary url='button_secondary.html' %}

#### Danger
{% capture button_danger %}{% highlight html %}
<button class="button is-danger">Danger Default</button>
<button class="button is-danger is-active">Danger Active</button>
<button class="button is-danger" disabled="">Danger Disabled</button>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=button_danger url='button_danger.html' %}


***


### Buttons with icons
Icons can be placed within buttons on their own or accompanied by text. Icons placed within buttons adopt button styles.

#### Button with icon & text
To place icons alongside text in buttons, insert an `<i>` or `<span>` tag with the `.d-icon` class followed by the `.d-$icon-name` class.

{% capture button_icon_text %}{% highlight html %}
<button class="button is-primary">
<i class="d-icon d-share is-small"></i>
Share
</button>
<button class="button is-secondary">
<i class="d-icon d-share is-small"></i>
Share
</button>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=button_icon_text url='button_icon_text.html' %}

#### Button with icon
To place an icon in a button on its own, add the `.has-icon` class to the outer `<button>` tag.

{% capture button_icon %}{% highlight html %}
<button class="button is-primary has-icon">
<i class="d-icon d-check is-small"></i>
</button>
<button class="button is-secondary has-icon">
<i class="d-icon d-check is-small"></i>
</button>
<button class="button is-danger has-icon">
<i class="d-icon d-check is-small"></i>
</button>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=button_icon url='button_icon.html' %}


***


### Button sizes
Buttons are available in default, medium, and small sizes. The default button size is automatically built into our button styles. Implement medium and small buttons by adding an `.is-medium` or `.is-small` class to the `<button>` tag.

{% capture button_sizes %}{% highlight html %}
<button class="button is-primary">Default</button>
<button class="button is-primary is-medium">Medium</button>
<button class="button is-primary is-small">Small</button>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=button_sizes url='button_sizes.html' %}


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

#### Coming soon
