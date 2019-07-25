---
title: "Alerts"
permalink: /documentation/components/alerts
excerpt: 'Alerts are used to provide feedback and information to users. They come in a variety of styles and colors to fit specific use cases.'
---

# {{ page.title }}
{{ page.excerpt }}

***

### Alert types
Denali offers five types of alerts: default, informational, success, warning, and danger. Implement different alert types by adding a `.is-info`, `.is-success`, `.is-warning`, or `.is-danger` class to an alert&#39;s outer `<div>`.

{% capture alert_type %}{% highlight html %}
<div class="alert">
  <span class="d-icon d-domain"></span>
  <div>
    <h5 >This is a default alert</h5>
  </div>
  <a class="close is-secondary"><span class="d-icon d-close is-sub"></span></a>
</div>

<br>

<div class="alert is-info">
  <span class="d-icon d-information-circle"></span>
  <div>
    <h5 >This is an informational alert</h5>
  </div>
  <a class="close is-secondary"><span class="d-icon d-close is-sub"></span></a>
</div>

<br>

<div class="alert is-warning">
  <span class="d-icon d-warning"></span>
  <div><h5 >This is a warning alert</h5>
  </div>
  <a class="close is-secondary"><span class="d-icon d-close is-sub"></span></a>
</div>

<br>

<div class="alert is-success">
  <span class="d-icon d-check-circle"></span>
  <div><h5 >This is a success alert</h5>
  </div>
  <a class="close is-secondary"><span class="d-icon d-close is-sub"></span></a>
</div>

<br>

<div class="alert is-danger">
  <span class="d-icon d-stop-warning"></span>
  <div><h5 >This is a danger alert</h5>
  </div>
  <a class="close is-secondary"><span class="d-icon d-close is-sub"></span></a>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=alert_type url='alert_type.html' %}


***


### Alerts with context
Alerts with context contain text underneath the alert&#39;s headline. To implement alerts with context, wrap text within a `<p>` tag and insert it below the alert&#39;s `<h5>` tag.

{% capture alert_context %}{% highlight css %}
<div class="alert is-danger">
  <span class="d-icon d-stop-warning"></span>
  <div>
    <h5 >This is a danger alert</h5>
    <p>This domain can’t be deleted because there is another product using this domain.</p>
  </div>
  <a class="close is-secondary"><span class="d-icon d-close is-sub"></span></a>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=alert_context url='alert_context.html' %}


***


### Inline alerts
Inline alerts appear as a full-width bar at the top of their container. Implement inline alerts by adding the `.is-inline` modifier to an alert&#39;s outer `<div>` tag. The alert type classes listed above can also be added to inline alerts.

{% capture alert_context %}{% highlight css %}
<div class="alert is-inline">
  <p><span class="is-bold">Non-Production Instance:</span> Do not use for Production or CI/CD (Screwdriver)</p>
</div>

<br>

<div class="alert is-inline has-bg-status-danger">
  <p><span class="is-bold">Non-Production Instance:</span> Do not use for Production or CI/CD (Screwdriver)</p>
</div>

<br>

<div class="alert is-inline has-bg-status-success">
  <p><span class="is-bold">Non-Production Instance:</span> Do not use for Production or CI/CD (Screwdriver)</p>
</div>

<br>

<div class="alert is-inline has-bg-status-warning">
  <p><span class="is-bold">Non-Production Instance:</span> Do not use for Production or CI/CD (Screwdriver)</p>
</div>

<br>

<div class="alert is-inline has-bg-status-info">
  <p><span class="is-bold">Non-Production Instance:</span> Do not use for Production or CI/CD (Screwdriver)</p>
</div>
{% endhighlight %}{% endcapture %}
{% include code-snippet.html code=alert_context url='alert_inline.html' %}


***


### Variables
You can use these variables to customize this component. Simply set one or multiple of these variables and recompile the SCSS.

#### Alert
`$alert-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`width`            |width          |`400px`                                |           |
|`backgound-color`  |background     |`map-get($denali-grey-colors, '100')`  |#fff       |
|`color`            |color          |`null`                                 |           |
|`border-radius`    |border-radius  |`2px`                                  |           |
|`box-shadow`       |box-shadow     |`0px 4px 8px rgba(0, 0, 0, 0.16)`      |           |
|`border-top:color` |border-top-color     |`map-get($denali-brand-colors, '400')` |#5d8cf6    |
|`border-top:width` |border-top-width     |`4px`                                  |           |
|`border-top:style` |border-top-style     |`solid`                                |           |

#### Inline alert
`$alert-inline-config:`

|**Name**|**Type**|**Default value**|**Computed value**|
|`backgound-color`  |background     |`map-get($denali-brand-colors, '200')` |#d7e2fd    |
|`color`            |color          |`map-get($denali-grey-colors, '800')`  |#303030    |
|`font-size`        |font-size      |`inherit`                              |           |
|`alignemnt:text`   |text-align     |`center`                               |           |
|`alignment:content`|justify-content|`center`                               |           |
|`padding`          |padding        |`4px 10px`                             |           |
