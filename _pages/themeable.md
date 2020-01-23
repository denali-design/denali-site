---
permalink: /documentation/themeable
layout: framed-space
gitcontent: true
title: "Themeable"
excerpt: 'Follow the steps below to theme your app with Denali.'
---

# {{ page.title }}
{{ page.excerpt }}

***

## Theme Your App with Denali

Front-end frameworks are a valuable engineering asset that reduces time spent on front-end development and encourages collaboration through the sharing of a common code base.

But what happens when the visual design of a project you’ve been tasked to develop does not match the visual style of your favorite framework? Typically this means painstakingly digging through the framework’s source CSS to alter its visual style.

Well not anymore! In this guide, you’ll learn how to use a single CSS file to override Denali’s default visual style and create a custom theme for any project.

Download the <a href="/assets/downloads/guides/themeable-guide.zip" download>exercise files</a> and let’s get started!

***

## Understanding theming
Let’s imagine that you’ve been tasked to design the following website:

{% include principles-1-col.html
  standard-image='themeable/themeable-end.png'
%}

You’ve built the site using Denali’s framework and it now looks like this:

{% include principles-1-col.html
  standard-image='themeable/themeable-dennit-denali-style.png'
%}

Unfortunately, Denali’s visual style does not match the original design. Luckily, Denali was built to support custom theming which will allow you to update the visual style of Denali’s components and match the original design in two easy steps:

1. Create a CSS file to store your custom CSS styling and link to it in your project, this is your theme.
2. Save global and component overrides within that file that will override Denali’s visual style.

Let’s walk through these steps together and create a custom theme to match our design.

***

## Linking your theme
Start with a new CSS file, we’ll name ours dennit-theme.css. Link to this file in your project by adding the path to the file in your head tag:

```html
<link rel="stylesheet" href="dennit-theme.css">
```

Next, you’ll want to decide whether to add your CSS styles within a :root or body tag. A :root tag is recommended if you plan on creating a single theme, but a body tag is recommended if you plan on creating multiple themes for a project. This is because multiple themes can be stored in a single file, but they can only be called upon individually if they are wrapped in body tags. Storing multiple themes in a single file is especially useful if you want to provide multiple variations of the same theme (such as a default, dark, or color accessible) to your end users.

Since our project only requires one theme, we’ll add a :root tag in our dennit-theme.css file:

```css
:root { /* add all overrides here */ }
```

***

## Understanding overrides
The next step is to override Denali’s visual style using overrides. Denali offers global overrides and component overrides. Global overrides override Denali’s default styling of multiple components at once, while component overrides only override styles specific to that component. Available overrides are documented at the end of each component page.

### Global Overrides
Let's start with a global override. By default Denali uses Helvetica, but our design calls for Kanit. Luckily, type is a global override. All we need to do is update the type override:

```css
:root {
  --font-family-sans-serif: 'Kanit', sans-serif;
}
```
> Kanit is a google font. In order to load Kanit into your project you’ll also need to add the `@import` code Google provides for [Kanit](https://fonts.google.com/specimen/Kanit?selection.family=Kanit) to the top of your theme CSS file.

And just like that, with a single line of code, Helvetica has been updated to Kanit across our entire project:

{% include principles-1-col.html
  standard-image='themeable/themeable-type-updated.png'
%}

### Component Overrides
Next we’ll make updates to a specific component using component overrides. By default, Denali’s navbar component has a dark blue background and uses a solid blue line to indicate the current page. However, the design we’ve been given calls for a black background with a solid red line indicator. To remedy this, we’ll reference the navbar documentation page to determine which component overrides are needed to match our design and assign them the correct values:

```css
:root {
  ...

  --navbar-height: 92px;
  --navbar-bg-color: #27292B;
  --navbar-item-text-color: #fff;
  --navbar-item-hover-text-color: #ff5454;
  --navbar-item-active-border-color: #E13030;
}
```

To finish up the navbar we’ll also need to use component overrides to update our button: 

```css
:root {
  ...
  
  --button-corner-radius: var(--border-radius-pill);
  --button-solid-default-bg-color: #E72B2B;
  --button-solid-focus-bg-color: #606060;

}
```

After saving our changes we see that our nav bar now matches the design:

{% include principles-1-col.html
  standard-image='themeable/themeable-components-updated.png'
%}

We’ll repeat this process with the remaining components until we’ve finished matching our design:

{% include principles-1-col.html
  standard-image='themeable/themeable-end.png'
%}

***

## Wrapping Up
We’ve successfully updated Denali’s visual design to match the visual design we were given in no time!

Hopefully, this guide has demonstrated how easy it is to theme Denali’s framework to support projects with unique visual styles. If you found it useful, please share it with others who might find it useful as well.
