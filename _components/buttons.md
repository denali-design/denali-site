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

#### Solid
{% capture button_solid %}{% highlight html %}
<button class="button is-solid">Solid Default</button>
<button class="button is-solid is-active">Solid Active</button>
<button class="button is-solid" disabled="">Solid Disabled</button>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=button_solid url='button_solid.html' %}

#### Outline
{% capture button_outline %}{% highlight html %}
<button class="button is-outline">Outline Default</button>
<button class="button is-outline is-active">Outline Active</button>
<button class="button is-outline" disabled="">Outline Disabled</button>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=button_outline url='button_outline.html' %}

#### Ghost
{% capture button_ghost %}{% highlight html %}
<button class="button is-ghost">Ghost Default</button>
<button class="button is-ghost is-active">Ghost Active</button>
<button class="button is-ghost" disabled="">Ghost Disabled</button>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=button_ghost url='button_ghost.html' %}

#### Text
{% capture button_text %}{% highlight html %}
<button class="button is-text">Text Default</button>
<button class="button is-text is-active">Text Active</button>
<button class="button is-text" disabled="">Text Disabled</button>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=button_text url='button_text.html' %}

#### Danger
{% capture button_danger %}{% highlight html %}
<button class="button is-danger">Danger Default</button>
<button class="button is-danger is-active">Danger Active</button>
<button class="button is-danger" disabled="">Danger Disabled</button>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=button_danger url='button_danger.html' %}

#### Inverse
Note: you can add `.is-inverse` to any button on a darker background.
{% capture button_inverse %}{% highlight html %}
<button class="button is-solid is-inverse">Solid</button>
<button class="button is-outline is-inverse">Outline</button>
<button class="button is-ghost is-inverse">Ghost</button>
<button class="button is-text is-inverse">Text</button>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=button_inverse url='button_inverse.html' inverse='true' %}


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

<blockquote class="accessible">When using icons with buttons, reduce redundancy by adding <span class="chips has-bg-grey-100 is-red-500 is-mono">aria-hidden="true"</span> and set <span class="chips has-bg-grey-100 is-red-500 is-mono">tabindex="-1"</span> will make sure only textual link is read and focused on by screenreader.</blockquote>

***


### Button sizes
Buttons are available in default, medium, and small sizes. The default button size is automatically built into our button styles. Implement medium and small buttons by adding an `.is-medium` or `.is-small` class to the `<button>` tag.

{% capture button_sizes %}{% highlight html %}
<a class="button is-solid is-large">Large</a>
<a class="button is-solid">Default</a>
<a class="button is-solid is-medium">Medium</a>
<a class="button is-solid is-small">Small</a>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=button_sizes url='button_sizes.html' %}


***


### Full Buttons
Buttons can also be made to be the full length of the parent container. You can do this by adding the `.is-full` class to the `<button>` or `<a>` tag.

{% capture button_full %}{% highlight html %}
<a class="button is-solid is-full">Full Button</a>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=button_full url='button_full.html' %}


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.



### Global
`$button-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`border-radius`      |border-radius          |`4px`             |           |
|`sizes:small:height` |height                 |`24px`            |           |
|`sizes:small:font-size` |font-size                 |`12px`            |           |
|`sizes:small:min-width` |min-width                 |`80px`            |           |
|`sizes:medium:height`     |height                 |`32px`            |           |
|`sizes:medium:font-size` |font-size                 |`inherit`            |           |
|`sizes:medium:min-width` |min-width                 |`null`            |           |
|`sizes:default:height`     |height                 |`36px`            |           |
|`sizes:default:font-size` |font-size                 |`inherit`            |           |
|`sizes:default:min-width` |min-width                 |`120px`            |           |
|`sizes:large:height`     |height                 |`44px`            |           |
|`sizes:large:font-size` |font-size                 |`16px`            |           |
|`sizes:large:min-width` |min-width                 |`null`            |           |

### Solid
`$button-config:solid`

|**Name**|**Type**|**Default value**|**Computed value**|
|`default:background-color`|background|`linear-gradient(to right, map-get($denali-brand-colors, '600'), map-get($denali-brand-colors, '700'))`|linear-gradient(to right, #3697F2, #3570F4)|
|`default:text-color`|color|`map-get($denali-grey-colors, '100')`|#ffffff|
|`default:inverse:background-color`|background|`linear-gradient(to right, map-get($denali-brand-colors, '600'), map-get($denali-brand-colors, '700'))`|linear-gradient(to right, #3697F2, #3570F4)|
|`default:inverse:text-color`|color|`map-get($denali-grey-colors, '100')`|#ffffff|
|`focus:background-color`|background|`linear-gradient(to right, map-get($denali-brand-colors, '700'), map-get($denali-brand-colors, '800'))`|linear-gradient(to right, #3570F4, #0044E0)|
|`focus:text-color`|color|`map-get($denali-grey-colors, '100')`|#ffffff|
|`focus:inverse:background-color`|background|`linear-gradient(to right, map-get($denali-brand-colors, '700'), map-get($denali-brand-colors, '800'))`|linear-gradient(to right, #3570F4, #0044E0)|
|`focus:inverse:text-color`|color|`map-get($denali-grey-colors, '100')`|#ffffff|
|`disabled:background-color`|background|`rgba(map-get($denali-grey-colors, '800'), .12)`|rgba(#303030), .12)|
|`disabled:text-color`|color|`rgba(map-get($denali-grey-colors, '800'), .5)`|rgba(#303030), .5)|
|`disabled:inverse:background-color`|background|`rgba(map-get($denali-grey-colors, '100'), .12)`|rgba(#ffffff), .12)|
|`disabled:inverse:text-color`|color|`rgba(map-get($denali-grey-colors, '100'), .5)`|rgba(#ffffff), .5)|

### Outline
`$button-config:outline`

|**Name**|**Type**|**Default value**|**Computed value**|
|`default:background-color`|background|`transparent`||
|`default:text-color`|color|`#3697F2`||
|`default:border:color`|border-color|`map-get($denali-brand-colors, '600')`|#3697F2|
|`default:border:width`|border-width|`1px`||
|`default:border:style`|border-style|`solid`||
|`default:inverse:background-color`|background|`transparent`||
|`default:inverse:text-color`|color|`map-get($denali-grey-colors, '100')`|#ffffff|
|`default:inverse:border:color`|border-color|`map-get($denali-brand-colors, '600')`|#3697F2|
|`default:inverse:border:width`|border-width|`1px`||
|`default:inverse:border:style`|border-style|`solid`||
|`focus:background-color`|background|`rgba(#0044E0,.26)`||
|`focus:text-color`|color|`#0044E0`||
|`focus:border:color`|border-color|`map-get($denali-brand-colors, '700')`|#0044E0|
|`focus:border:width`|border-width|`1px`||
|`focus:border:style`|border-style|`solid`||
|`focus:inverse:background-color`|background|`rgba(#0044E0,.26`||
|`focus:inverse:text-color`|color|`map-get($denali-grey-colors, '100')`|#ffffff|
|`focus:inverse:border:color`|border-color|`map-get($denali-brand-colors, '600')`|#0044E0|
|`focus:inverse:border:width`|border-width|`1px`||
|`focus:inverse:border:style`|border-style|`solid`||
|`disabled:background-color`|background|`rgba(map-get($denali-grey-colors, '800'), .12)`|rgba(#303030), .12)|
|`disabled:text-color`|color|`rgba(map-get($denali-grey-colors, '800'), .5)`|rgba(#303030), .5)|
|`disabled:border:color`|border-color|`rgba(map-get($denali-grey-colors, '800'), .5)`|rgba(#303030), .5)|
|`disabled:border:width`|border-width|`1px`||
|`disabled:border:style`|border-style|`solid`||
|`disabled:inverse:background-color`|background|`rgba(map-get($denali-grey-colors, '100'), .12)`|rgba(#ffffff), .12)|
|`disabled:inverse:text-color`|color|`rgba(map-get($denali-grey-colors, '100'), .5)`|rgba(#ffffff), .5)|
|`disabled:inverse:border:color`|border-color|`rgba(map-get($denali-grey-colors, '100'), .5)`|rgba(#ffffff), .5)|
|`disabled:inverse:border:width`|border-width|`1px`||
|`disabled:inverse:border:style`|border-style|`solid`||


### Ghost
`$button-config:ghost`

|**Name**|**Type**|**Default value**|**Computed value**|
|`default:background-color`|background|`rgba(#3697F2,.16)`||
|`default:text-color`|color|`#3697F2`||
|`default:inverse:background-color`|background|`rgba(#3697F2,.16)`||
|`default:inverse:text-color`|color|`map-get($denali-grey-colors, '100')`||
|`focus:background-color`|background|`rgba(#0044E0,.26)`||
|`focus:text-color`|color|`#0044E0`||
|`focus:inverse:background-color`|background|`rgba(#0044E0,.26)`||
|`focus:inverse:text-color`|color|`map-get($denali-grey-colors, '100')`|#ffffff|
|`disabled:background-color`|background|`rgba(map-get($denali-grey-colors, '800'), .12)`|rgba(#303030, .12)|
|`disabled:text-color`|color|`rgba(map-get($denali-grey-colors, '800'), .5)`|rgba(#303030, .5)|
|`disabled:inverse:background-color`|background|`rgba(map-get($denali-grey-colors, '100'), .12)`|rgba(#ffffff, .12)|
|`disabled:inverse:text-color`|color|`rgba(map-get($denali-grey-colors, '100'), .5)`|rgba(#ffffff, .5)|

### Text
`$button-config:text`

|**Name**|**Type**|**Default value**|**Computed value**|
|`default:background-color`|background|`transparent`||
|`default:text-color`|color|`#3697F2`||
|`default:inverse:background-color`|background|`transparent`||
|`default:inverse:text-color`|color|`map-get($denali-grey-colors, '100')`|#ffffff|
|`focus:background-color`|background|`rgba(#0044E0,.26)`||
|`focus:text-color`|color|`#0044E0`||
|`focus:inverse:background-color`|background|`rgba(#0044E0,.26)`||
|`focus:inverse:text-color`|color|`map-get($denali-grey-colors, '100')`|#ffffff|
|`disabled:background-color`|background|`transparent`||
|`disabled:text-color`|color|`rgba(map-get($denali-grey-colors, '800'), .5)`|rgba(#303030, .5)|
|`disabled:inverse:background-color`|background|`transparent`||
|`disabled:inverse:text-color`|color|`rgba(map-get($denali-grey-colors, '100'), .5)`|rgba(#ffffff, .5)|

### Danger
`$button-config:danger`

|**Name**|**Type**|**Default value**|**Computed value**|
|`default:background-color`|background|`#EA0000`||
|`default:text-color`|color|`map-get($denali-grey-colors, '100')`|#ffffff|
|`default:inverse:background-color`|background|`#EA0000`||
|`default:inverse:text-color`|color|`map-get($denali-grey-colors, '100')`|#ffffff|
|`focus:background-color`|background|`#BB0000`||
|`focus:text-color`|color|`map-get($denali-grey-colors, '100')`|#ffffff|
|`focus:inverse:background-color`|background|`#BB0000`||
|`focus:inverse:text-color`|color|`map-get($denali-grey-colors, '100')`|#ffffff|
|`disabled:background-color`|background|`rgba(map-get($denali-grey-colors, '800'), .12)`|rgba(#303030, .12)|
|`disabled:text-color`|color|`rgba(map-get($denali-grey-colors, '800'), .5)`|rgba(#303030, .5)|
|`disabled:inverse:background-color`|background|`rgba(map-get($denali-grey-colors, '100'), .12)`|rgba(#ffffff, .12)|
|`disabled:inverse:text-color`|color|`rgba(map-get($denali-grey-colors, '100'), .5)`|rgba(#ffffff, .5)|
