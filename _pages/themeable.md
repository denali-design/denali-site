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

Download the exercise files and let’s get started!

<<EXCERISE DOWNLOAD SNIPPET>>

***

## Understanding theming
Let’s imagine that you’ve been tasked to design the following website:

<<IMAGE: Image of what we’re designing>>

You want to use Denali’s framework, but Denali’s visual style does not match the design you’ve been given. Luckily, Denali was built to support custom theming in two easy steps:

Create a CSS file to store your custom CSS styling and link to it in your project, this is your theme.

Save global and component overrides within that file that will override Denali’s visual style.

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

And just like that, with a single line of code, Helvetica has been updated to Kanit across our entire project:

<<IMAGE: Image showing just the type updated>>

Info box: Kanit is a google font. In order to load Kanit into your project you’ll also need to add the @import code google provides for Kanit to the top of your theme CSS file.

### Component Overrides
Now let’s finish our design by moving onto component overrides. By default, Denali’s button component is a blue rectangle with rounded corners and white text, but the design we’ve been given calls for dark blue pill shaped buttons. To remedy this, we’ll reference the buttons documentation page to determine which overrides are needed to match our design and assign them the correct values.

```css
:root {
  ...

  --button-corner-radius: var(--border-radius-pill);
  --button-solid-default-bg-color: #0065bf;
  --button-solid-focus-bg-color: #004b80;
  --button-outline-default-text-color: #0065bf;
  --button-outline-default-border: solid 2px #0065bf;
  --button-outline-focus-bg-color: #bee0fc;
  --button-outline-focus-text-color: #004b80;
  --button-outline-focus-border: transparent;
}
```

After saving our changes we see that our buttons now match the design.

<<IMAGE: Image showing buttons updated but all other components not>>

We’ll repeat this process with the remaining components until we’ve finished matching our design.

<<IMAGE: Image showing all components updated but not our type>>

***

## Wrapping Up
We’ve successfully updated Denali’s visual design to match the visual design we were given in no time!

Hopefully, this guide has demonstrated how easy it is to theme Denali’s framework to support projects with unique visual styles. If you found it useful, please share it with others who might find it useful as well.
