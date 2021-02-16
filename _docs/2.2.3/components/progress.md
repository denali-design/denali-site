---
title: "Progress"
permalink: docs/:path
excerpt: "A progress component indicates from an ongoing user-initated process."
---

# {{ page.title }}

{{ page.excerpt }}

---

### Default

{% capture progress_default %}

<div class="d-progress">
  <div class="d-progress--bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}
{% include code-snippet.html code=progress_default url='progress_default.html' %}

---

### Size

{% capture progress_size %}

<div class="d-progress d-progress__sm">
  <div class="d-progress--bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<br>
<div class="d-progress">
  <div class="d-progress--bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<br>
<div class="d-progress d-progress__md">
  <div class="d-progress--bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<br>
<div class="d-progress d-progress__lg">
  <div class="d-progress--bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}
{% include code-snippet.html code=progress_size url='progress_size.html' %}

---

### Multi Bar

{% capture progress_multi %}

<div class="d-progress">
  <div class="d-progress--bar has-bg-status-danger" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="d-progress--bar has-bg-status-warning" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="d-progress--bar has-bg-status-success" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}
{% include code-snippet.html code=progress_multi url='progress_multi.html' %}

---

### Loading

{% capture progress_loading %}

<div class="d-progress d-progress__loading"></div>
{% endcapture %}
{% include code-snippet.html code=progress_loading url='progress_loading.html' %}

---

### Variables

You can use these variables to change the visual appearence when creating your own Denali themes in SCSS.

|Variable Name|CSS Property|
|`$progress-bg-color`| background|
|`$progress-corner-radius`| border-radius|
|`$progress-sizes-sm-height`| height|
|`$progress-sizes-default-height`| height|
|`$progress-sizes-md-height`| height|
|`$progress-sizes-lg-height`| height|
|`$progress-bar-spacer`| width|
|`$progress-bar-bg-color`| background|
