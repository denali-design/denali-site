---
title: "Themeable"
permalink: docs/:path
excerpt: 'Follow the steps below to theme your app with Denali.'
---

# {{ page.title }}
{{ page.excerpt }}


***


## Theme Your App with Denali

Front-end frameworks are a valuable engineering asset that reduces time spent on front-end development and encourages collaboration through the sharing of a common code base.

But what happens when the visual design of a project you’ve been tasked to develop does not match the visual style of your favorite framework? Typically this means painstakingly digging through the framework’s source CSS to alter its visual style.

Well not anymore! In this guide, you’ll learn how to use a single CSS file to override Denali’s default visual style and create a custom theme for any project.

<!-- Download the <a href="/assets/downloads/guides/themeable-guide.zip" download>exercise files</a> and let’s get started! -->


***


## Understanding theming
Let’s imagine that you’ve been tasked to design the following website:

{% include principles-1-col.html
  standard-image='themeable/themeable-guide-01.png'
%}

You’ve built the site using Denali’s framework and it now looks like this:

{% include principles-1-col.html
  standard-image='themeable/themeable-guide-02.png'
%}

Unfortunately, Denali’s visual style does not match the original design. Luckily, Denali was built to support custom theming which will allow you to update the visual style of Denali’s components and match the original design in a few easy steps:

1. Download or clone the Denali CSS repository.
2. Duplicate and rename the denali-dark-theme.scss file.
3. Update global and component overrides to style all necessary components.
4. Compile the code to a CSS file that will override Denali's visual style.

Let’s walk through these steps together and create a custom theme to match our design.


***


## Download Denali CSS
First, you'll need to download out Denali CSS repo. This includes everything that makes up our CSS framework. Download or clone [here](https://github.com/denali-design/denali-css).

Once you have in on your computer open up terminal and `cd` into the repo.

```html
cd user/path-to-folder/denali-css
```

Next, we need to preview what we are doing so install NPM packages by entering the command `npm install` and then you can run `gulp serve` do spin up a local server.

***


## Linking your theme
Start by duplicating the `denali-dark-theme.scss` file located in the scss folder, we’ll name ours `dennit-theme.scss`. Link to this file to the demo page by adding the path to the file in your head tag in the `index.html` file in the docs folder. 

```html
<link rel="stylesheet" href="../css/dennit-theme.css">
```

Next, you’ll want to decide whether to add your CSS styles within a :root or any parent container. A :root tag is recommended if you plan on creating a single theme, but a specific class is recommended if you plan on creating multiple themes for a project. This is because multiple themes can be stored in a single file, but they can only be called upon individually if they are wrapped in any parent container with the theme class. Storing multiple themes in a single file is especially useful if you want to provide multiple variations of the same theme (such as a default, dark, or color accessible) to your end users.

Since our project only requires one theme, we’ll add a :root tag in our dennit-theme.css file. Find the line for code that wraps all the css together. It will be located at the end of the `dennit-theme.scss` file.

```css
.denali-dark-theme { // Line 439
```

We are going to replace `.denali-dark-theme` with `:root`.

```css
:root { 
```


***


## Understanding overrides
The next step is to override Denali’s visual style using overrides. Denali offers global overrides and component overrides. Global overrides override Denali’s default styling of multiple components at once, while component overrides only override styles specific to that component. Available overrides are documented at the end of each component page.

### Global Overrides
Let's start with a global override. By default Denali uses Helvetica, but our design calls for Kanit. Luckily, type is a global override. All we need to do is update the type override:

```css
$font-family-sans-serif: 'Kanit', sans-serif; // Line 45
```
> Kanit is a google font. In order to load Kanit into your project you’ll also need to add the `@import` code Google provides for [Kanit](https://fonts.google.com/specimen/Kanit?selection.family=Kanit) to the top of your theme SCSS file.

And just like that, with a few lines of code, Helvetica has been updated to Kanit across our entire project:

{% include principles-1-col.html
  standard-image='themeable/themeable-guide-03.png'
%}

### Component Overrides
Next we’ll make updates to a specific component using component overrides. By default, Denali’s navbar component has a dark blue background and uses a solid blue line to indicate the current page. However, the design we’ve been given calls for a black background with a solid red line indicator. To remedy this, we’ll reference the navbar documentation page to determine which component overrides are needed to match our design and assign them the correct values:

```css
  $navbar-bg-color: #27292B; // Line 252
  $navbar-height: 92px; // Line 257
  $navbar-item-hover-text-color: #ff5454; // Line 259
  $navbar-item-active-border-color: #E13030; // Line 261
```

To finish up the navbar we’ll also need to use component overrides to update our button: 

```css  
  $button-corner-radius: var(--border-radius-pill); // Line 92
  $button-solid-default-bg-color: #E72B2B; // Line 106
  $button-solid-focus-bg-color: #606060; // Line 110
```

After saving our changes we see that our nav bar now matches the design:

{% include principles-1-col.html
  standard-image='themeable/themeable-guide-04.png'
%}

Now repeat this process with the remaining components until we’ve finished matching our design or create something totally unique:

{% include principles-1-col.html
  standard-image='themeable/themeable-guide-01.png'
%}


***


## Wrapping Up
We’ve successfully updated Denali’s visual design to match the visual design we were given in no time!

Hopefully, this guide has demonstrated how easy it is to theme Denali’s framework to support projects with unique visual styles. If you found it useful, please share it with others who might find it useful as well.
