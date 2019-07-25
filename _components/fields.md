---
title: "Fields"
permalink: /documentation/components/fields
excerpt: 'Fields allow users to enter text information. They come in two styles, inline and text area. Buttons and icons can be added to both field styles.'
---

# {{ page.title }}
{{ page.excerpt }}


***


### Inline field
Inline fields can be implemented by wrapping an `<input>` tag in a `<div>` tag with the `.input` class. Add a hint label to fields by inserting the `placeholder` attribute in the `<input>` tag.

{% capture field_default %}{% highlight html %}
<div class="input">
<input class="" type="text" placeholder="Just a field" />
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=field_default url='field_default.html' %}


***


### Text area field
Text area fields can be implemented by wrapping a `<textarea>` tag in a `<div>` tag with the `.input` class. Add a hint label to text area fields by inserting the `placeholder` attribute in the `<textarea>` tag.

{% capture field_textarea %}{% highlight html %}
<div class="input">
<textarea type="text" placeholder="Text area"></textarea>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=field_textarea url='field_textarea.html' %}


***


### Sizes
Inline fields are available in default, medium, and small sizes. The default field size is automatically built into our `.input` class. However, you may implement smaller sizes by adding the `.is-medium` or `.is-small` classes to a field&#39;s outer `<div>`tag.

{% capture field_size %}{% highlight html %}
<div class="input">
<input type="text" placeholder="Just a field" />
</div>
<div class="input is-medium">
<input type="text" placeholder="Just a field" />
</div>
<div class="input is-small">
<input type="text" placeholder="Just a field" />
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=field_size url='field_size.html' %}


***


### States
Inline fields and text area fields have `.is-active`,`.is-warning`, and disabled states. Active and warning states can be forced by adding the corresponding state class to a field&#39;s outer `<div>`tag. To add an error message to `.is-warning` fields, wrap text in a `<p>` tag with the `.message` class and insert it within the field&#39;s`<input>` tag. To implement a disabled state, add the `disabled` attribute to a field&#39;s`<input>` tag.

{% capture field_state %}{% highlight html %}
<div class="input">
<input type="text" placeholder="Just a field" />
</div>
<div class="input is-error">
<input type="text" placeholder="Just a field" />
<p class="message">with an error</p>
</div>
<div class="input">
<input type="text" placeholder="Just a field" disabled="" />
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=field_state url='field_state.html' %}

### Type attributes
Email, number and password fields can be implemented by adding the `type` attribute to a field's `<input>` tag and setting the value to `email`, `number`, or `password`.

{% capture field_types %}{% highlight html %}
<div class="input">
<input type="text" placeholder="Text field" />
</div>
<br>
<div class="input">
<input type="email" placeholder="Email field" />
</div>
<br>
<div class="input">
<input type="number" placeholder="Number field" />
</div>
<br>
<div class="input">
<input type="password" placeholder="Password field" />
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=field_types url='field_types.html' %}


***


### Field label
Add a label to fields by wrapping inline or text area fields within a `<div>` tag with the `.input-group` class. Field labels are positioned to the left by default but can be repositioned on top by adding the `.is-stacked` class to the field&#39;s outer `<div>` tag.

{% capture field_label_position %}{% highlight html %}
<div class="input-group">
<label>Label</label>
<div class="input">
<input type="text" placeholder="Default field" />
</div>
</div>
<div class="input-group is-stacked">
<label>Label</label>
<div class="input">
<input type="text" placeholder="Stacked field" />
</div>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=field_label_position url='field_label_position.html' %}


***


### Icons in fields
To insert an icon into a field add a `<span>` tag with the `.d-icon` and `.d-$icon-name` classes before or after the `<input>` tag. You can also customize icon color using the `.is-$color-$value` class.

#### Front
Position an icon at the front of a field by adding the `.has-icon-front` class to a field&#39;s `<div>` tag.

{% capture field_icon_front %}{% highlight html %}
<div class="input has-icon-front">
  <span class="d-icon d-filter-horizontal is-brand-300"></span><input type="text" placeholder="Icon front">
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=field_icon_front url='field_icon_front.html' %}

#### Back
Position an icon to the back of a field by adding the `.has-icon-back` class to a field&#39;s `<div>` tag.

{% capture field_icon_back %}{% highlight html %}
<div class="input has-icon-back">
  <input type="text" placeholder="Icon back"></input><a class="d-icon d-close-circle-solid is-secondary is-sub"></a>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=field_icon_back url='field_icon_back.html' %}


***


### Inline fields with button
To place a button at the end of an inline field wrap an `<input>` and `<button>` tag within `<div
class="input-group has-button">`.

{% capture field_button %}{% highlight html %}
<div class="input-group has-button">
  <div class="input">
    <input type="text" placeholder="Field with button"></input>
  </div>
  <button class="button is-primary has-icon"><i class="d-icon d-add is-small"></i></button>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=field_button url='field_button.html' %}


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

#### Coming Soon
