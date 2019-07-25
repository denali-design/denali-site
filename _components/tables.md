---
title: "Tables"
permalink: /documentation/components/tables
excerpt: 'Tables organize information in columns and rows. Table cells can be aligned to the left, center, or right. Stripes can also be added to tables to differentiate between rows.'
---

# {{ page.title }}

{{ page.excerpt }}


***


### Standard
To create a table start with a `<table>` tag with the class `.table`. Then add rows by inserting `<tr>` tags. Within rows insert header cells by adding `<th>` tags and insert standard cells by adding `<td>` tags.

{% capture table_default %}{% highlight html %}
<table class="table">
<tr>
<th>Date</th>
<th>Time</th>
<th>User</th>
<th>Cause</th>
</tr>
<tr>
<td>04/14/2017</td>
<td>1:34 PDT</td>
<td>yby.jupiter</td>
<td>jira123</td>
</tr>
<tr>
<td>04/14/2017</td>
<td>19:34 PDT</td>
<td>yby.jupiter</td>
<td>jira123</td>
</tr>
</table>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=table_default url='table_default.html' %}


***


### Striped
Add stripes to table rows by adding the `.is-striped` class to the `<table>` tag.

{% capture table_striped %}{% highlight html %}
<table class="table is-striped">
<tr>
<th>Name</th>
<th>Domain</th>
<th class="is-center">Delete</th>
</tr>
<tr>
<td><a>AC::CGQ1::BULLETMAIL_CLIENTS</a></td>
<td><a>pes.acl.greylist</a></td>
<td class="is-center"><a><span class="d-icon d-trash is-small"></span></a></td>
</tr>
<tr>
<td><a>BULLETMAIL_CLIENTS</a></td>
<td><a>pes.acl.greylist</a></td>
<td class="is-center"><a><span class="d-icon d-trash is-small"></span></a></td>
</tr>
<tr>
<td><a>AC::CGQ1::BULLETMAIL_CLIENTS</a></td>
<td><a>pes.acl.greylist</a></td>
<td class="is-center"><a><span class="d-icon d-trash is-small"></span></a></td>
</tr>
<tr>
<td><a>AC::CGQ1::BULLETMAIL_CLIENTS</a></td>
<td><a>pes.acl.greylist</a></td>
<td class="is-center"><a><i class="d-icon d-trash is-small"></i></a></td>
</tr>
</table>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=table_striped url='table_striped.html' %}


***


### Alignment
Table header cells and standard cells are aligned to the left by default. To align these cells to the center or right, add an `.is-center` or `.is-right` class to `<th>` or `<td>` tags.

{% capture table_alignment %}{% highlight html %}
<table class="table">
<tr>
<th>Default</th>
<th class="is-center">Center</th>
<th class="is-right">Right</th>
</tr>
<tr>
<td><span class="d-icon d-text-left"></td>
<td class="is-center"><span class="d-icon d-text-center"></td>
<td class="is-right"><span class="d-icon d-text-right"></td>
</tr>
</table>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=table_alignment url='table_alignment.html' %}


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

`$table-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`header:text:color`                |color           |`rgba(map-get($denali-grey-colors, '800'), 0.4)`            |rgba(#303030,0.4)    |
|`header:text:size`                 |font-size       |`1.2rem`                                                    |12px           |
|`header:text:transform`            |text-transform  |`uppercase`                                                 |    |
|`header:text:weight`               |font-weight     |`normal`                                                    |           |
|`header:padding`                   |padding         |`10px`                                                      |   |
|`header:border-bottom`             |border-bottom   |`1px solid rgba(map-get($denali-grey-colors, '800'), 0.4)`  |1px solid rgba(#303030,0.4)|
|`header:background-color`          |background      |`transparent`                                               |   |
|`row:padding`                      |padding         |`14px 10px`                                                 |   |
|`row:border-bottom`                |border-bottom   |`1px solid rgba(map-get($denali-grey-colors, '800'), 0.2)`  |1px solid rgba(#303030,0.2)|
|`striped-row:background-color`     |background      |`rgba(map-get($denali-brand-colors, '700'), 0.05)`          |1px solid rgba(#3570f4,0.05)|
