---
title: "Getting started"
permalink: docs/:path
excerpt: 'Follow the steps below to get started with Denali.'
---

# {{ page.title }}
{{ page.excerpt }}

{% include copy-alert.html %}

***

## Denali components
Denali components have three easy ways to get started, each one appealing to a different skill level and use case. Read on to see what suits your particular needs:

### Use NPM (recommended)
{% include copy-input.html id='denaliCssNpm' copy-text='npm install denali-css' %}
or
### Use jsdelivr CDN
{% include copy-input.html id='denaliCssJsdeliver' copy-text='https://cdn.jsdelivr.net/npm/denali-css/css/denali.css' %}
or
### Clone/Fork Git Repository
{% include copy-input.html id='denaliCssGit' copy-text='git@github.com:denali-design/denali-css.git' %}

***

## Denali icon font
Denali's icon font has three easy ways to get started, each one appealing to a different skill level and use case. Read on to see what suits your particular needs:

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
For Denali to work correctly, the following items are required:

### Use the HTML5 doctype
```html
<!DOCTYPE html>
```

<br>

### Add the responsive viewport meta tag
```html
<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
```

***

## Starter Template
If you want to get started right away, you can use this HTML starter template.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Hello Denali!</title>
    <!-- Denali CSS & Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/denali-design/denali-css/css/denali.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/denali-design/denali-icon-font/dist/denali-icon-font.css">
  </head>
  <body>
    <div class="container">
      <h1>Hello World</h1>
      <p>My first website with <strong>Denali</strong>!</p>
    </div>
  </body>
</html>
```

***

## Community Support
Stay up to date with Denali's development and join the community:

- Join the official [Denali Slack](https://denali-design.slack.com/app_redirect?channel=general)
- Follow [@denali_designs](https://twitter.com/denali_design) on Twitter
- Read our blog on [Medium](https://medium.com/denali-design)
