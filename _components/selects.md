---
title: "Selects"
permalink: /documentation/components/selects
excerpt: 'Selects are used to store selectable options and collect user input. They come in a variety of sizes and states. Their labels can be positioned either to the left or the right.'
---

# {{ page.title }}
{{ page.excerpt }}


***


### Implementation
Denali selects are built using `<select>` tags. Labels and hint labels can be added using the `<label>` tag and selected attribute.

{% capture select_default %}{% highlight html %}
<div class="input has-arrow">
<select name="">
<option value="" disabled="" selected="">Select your option</option>
<option value="">Value 1</option>
<option value="">Value 2</option>
<option value="">Value 3</option>
</select>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=select_default url='select_default.html' %}


***


### States
Selects have 2 states - active and disabled. By default, a blue underline appears when select drop downs are active. However, you can force the active state appearance by adding the `.is-active` modifier or attribute to your select dropdown. Select dropdowns that are disabled have a greyed out appearance. The disabled appearance can be accessed by adding the `.is-disabled` modifier to your select dropdowns.

{% capture select_states %}{% highlight html %}
<div class="input has-arrow">
<select name="">
<option value="" disabled="">Select your option</option>
<option value="" selected="">Value 1</option>
<option value="">Value 2</option>
<option value="" disabled="">Value 3</option>
</select>
</div>
<br>
<div class="input has-arrow">
<select name="" disabled="">
<option value="" disabled="" selected="">Select your option</option>
</select>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=select_states url='select_states.html' %}


***


### Sizes
Denali offers 3 selects sizes - default, medium, and small. The default field size is automatically built into our selects. However, you may access smaller sizes using the `.is-medium` or `.is-small` modifiers.

{% capture select_sizes %}{% highlight html %}
<div class="input has-arrow">
<select name="">
<option value="" disabled="">Select your option</option>
<option value="" selected="">Value 1</option>
<option value="">Value 2</option>
<option value="">Value 3</option>
</select>
</div>
<br>
<div class="input is-medium has-arrow">
<select name="">
<option value="" disabled="">Select your option</option>
<option value="" selected="">Value 1</option>
<option value="">Value 2</option>
<option value="">Value 3</option>
</select>
</div>
<br>
<div class="input is-small has-arrow">
<select name="">
<option value="" disabled="">Select your option</option>
<option value="" selected="">Value 1</option>
<option value="">Value 2</option>
<option value="">Value 3</option>
</select>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=select_sizes url='select_sizes.html' %}


***


### Label Positioning
The default position of select dropdown labels is to the left. However, labels can be positioned above selects using the modifier `.is-stacked`.

{% capture select_label %}{% highlight html %}
<div class="input-group is-stacked">
<label>Label</label>
<div class="input has-arrow">
<select name="">
<option value="" disabled="" selected="">Select your option</option>
<option value="">Value #1</option>
<option value="">Value #2</option>
<option value="">Value #3</option>
</select>
</div>
</div>
<br>
<div class="input-group">
<label>Label</label>
<div class="input has-arrow is-active">
<select name="">
<option value="" disabled="" selected="">Select your option</option>
<option value="">Value #1</option>
<option value="">Value #2</option>
<option value="">Value #3</option>
</select>
</div>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=select_label url='select_label.html' %}


***


### Variables
You can use these variables in a `override.css` file to customize this component.

The selects component utilized the fields variables, please refer to this [page]({{ site.baseurl }}/documentation/components/fields#variables).
