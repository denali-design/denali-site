---
title: "Containers"
permalink: docs/:path
excerpt: 'Containers are a foundational layout element. Denali offers a choice between a basic container and a full container. Basic containers can be placed within full containers for added flexibility.'

---

# {{ page.title }}
{{ page.excerpt }}

> Denali’s layout components are built using flexbox to help you layout content with ease. Unfamiliar with flexbox? Read [this guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) before getting started.

***

## Basic Container
Our basic container is a responsive container whose width automatically adjusts at each breakpoint. It can be implemented by using the class `.container`.

{% capture container_basic %}
<div class="container has-bg-blue-500 p-10 br-4">
  This is a container
</div>
{% endcapture %}
{% include code-snippet.html code=container_basic url='container_basic.html' %}

***

## Full Container
The full container spans 100% of its parent element at all times. It can be implemented by using the class `.container-full`.

{% capture container_full %}
<div class="container-full has-bg-blue-500 p-y-10 br-4">
  This is a full container
</div>
{% endcapture %}
{% include code-snippet.html code=container_full url='container_full.html' %}

***

## Marginless
Both full and basic containers have default margins. On a full container these margins change according to the breakpoint. On a basic container the default margins are always set to auto. In both cases you can remove the margins by adding the `.is-marginless` modifier.

{% capture container_marginless %}
<div class="container is-marginless has-bg-blue-500 p-10 br-4">
  This is a marginless container
</div>

<br>

<div class="container-full is-marginless has-bg-blue-500 p-y-10 br-4">
  This is a marginless full container
</div>
{% endcapture %}
{% include code-snippet.html code=container_marginless url='container_marginless.html' %}
