---
permalink: /documentation/get-started
section: "resources"
title: "Getting started"
layout: framed
gitcontent: true
excerpt: 'Follow the steps below to get started with Denali.'
---

# {{ page.title }}
{{ page.excerpt }}

{% include copy-alert.html %}

***

## Denali Components
Denali has three easy ways to quickly get started, each one appealing to a different skill level and use case.
Read through to see what suits your particular needs.

### Use NPM (recommended)
{% include copy-input.html id='denaliCssNpm' copy-text='npm install denali-css' %}
or
### Use jsdelivr CDN
{% include copy-input.html id='denaliCssJsdeliver' copy-text='https://cdn.jsdelivr.net/npm/denali-css/css/denali.css' %}
or
### Clone/Fork Git Repository
{% include copy-input.html id='denaliCssGit' copy-text='git@github.com:denali-design/denali-css.git' %}

***

## Denali Icons
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Use NPM (recommended)
{% include copy-input.html id='denaliIconNpm' copy-text='npm install denali-icon-font' %}
or
### Use jsdelivr CDN
{% include copy-input.html id='denaliIconJsdeliver' copy-text='https://cdn.jsdelivr.net/npm/denali-icon-font/dist/denali-icon-font.css' %}
or
### Clone/Fork Git Repository
{% include copy-input.html id='denaliIconGit' copy-text='git@github.com:denali-design/denali-icon-font.git' %}

***

## Code Requirements
For Denali to work correctly, you need to remember a few requirements when working with Denali.

### Use the HTML5 doctype
```css
<!DOCTYPE html>
```
<br>
### Add the responsive viewport meta tag
```css
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
```

***

## Starter Template
If you want to get started right away, you can use this HTML starter template. Just copy/paste this code in a file and
save it on your computer.

```css
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Hello Denali!</title>
    <!-- Denali CSS & Icons -->
    <link rel="stylesheet" href="../css/denali.css" />
    <link rel="stylesheet" href="../css/denali-icon-font-v1.0.0.css" />
  </head>
  <body class="denali-default-theme">
    <div class="container">
      <h1>Hello World</h1>
      <p>My first website with <strong>Denali</strong>!</p>
    </div>
  </body>
</html>
```

***

## Community Support
Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.

- Join the official [Denali Slack](https://denali-design.slack.com/app_redirect?channel=general)
- Follow [@denali_designs](https://twitter.com/denali_design) on Twitter
- Read our blog on [Medium](https://medium.com/denali-design)
