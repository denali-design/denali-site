---
permalink: /documentation/whats-new
section: "whats-new"
title: "Updates, bug fixes & new features"
layout: framed
gitcontent: true
---

# {{ page.title }}

***

### Version 0.4.1 - Apr. 30th 2018
We are now focusing on the details of each component and switching to a theme-able system. See the many additions for each component and now available on most pages are variables that can be changed for each component. Note: you will need to recompile if you plan on making changes to the variables.

#### Enhancements or new components
1. Links - To add icons to the front or back you now need to add the class `has-icon-front` or `has-icon-back`.
2. Fields - To add icons or buttons to the front or back of fields add the class `has-button`, `has-icon-front` or `has-icon-back`.
3. Tags - To add icons to the front or back you now need to add the class `has-icon-front` or `has-icon-back`.
4. Tag Container - Modifier `nowrap` was added to allow users to make tags a scrollable inline area.
5. Loader - Added `is-extrasmall` modifier to match icons.
6. Tabs - Added breakpoint helpers `tablet-down-hide-left` and `tablet-down-toggle-tabs-left` to help with hiding and showing.
7. Toggle - A smaller toggle is now avaiable with the `is-small` class.
8. Tables - To align items right add `is-right` class to `<th>` or `<td>`.

#### Bug fixes
1. [Issue #122](https://github.com/denali-system-language/denali-styleguide/issues/122){:target='blank'} Loaders are now showing in loader docs page.
2. [Issue #123](https://github.com/denali-system-language/denali-styleguide/issues/123){:target="blank"} Paragraphs documentation has been added into the site default `<p>` tag is 14px font-size / 18px line-height and a display `<p>` tag is 16px font-size / 22px line-height.

#### Breaking changes
1. Links
- `is-black` changed to `is-secondary`
2. Tags
- `is-selectable` to `is-outlined`
- `is-removable` is now longer available
3. Tables
- `is-centered` to `is-center`

***

### Version 0.4.0 - Dec. 7th 2018
We have been working hard and adding a lot into Denali in the past few months, so much we had to skip version 3. From bug fixes to new components there's a lot so feel free to explore.

#### New components
Look for documentation coming in 2019 Q1
1. Layout - Containers, rows, and columns all our pages are now using these components so feel free to explore the source code. a good example is on our principles pages.
2. Helpers - We have introduced a lot of helpers that gives a lot of flexibility when scaffolding a page.
3. Tabs - Helpers for hiding at certain breakpoints, also added new tab active states.

#### Bug fixes
These include...
1. Added icon css into main css file, so users using other icon fonts have access to the helpers.
2. Updated alerts height so it can expand when multiple lines of text are written.
3. Dropdown arrow is now clickable and supported on all browsers.
4. Tags removable "X" was not rendering correctly in all browsers, now it is.
5. Navbar position absolute was fixed.
6. Menu browser compatibility has been fixed, along with position absolute.

#### Breaking changes (maybe)
These include...
1. Button margins have been removed.
2. Titles HTML structure has changed. Inspect source code to see.
3. Input margins have been removed.
4. Inputs icons have been fixed so when you resize a input the icon will stick to the right side.

***

### Version 0.2.1 Fixes - Aug. 31st 2018
This was a long over due update, but we have finally have updated our documentation site to reflect the CSS in production.

#### Bug fixes
These include...
1. Right navbar container will stay aligned to the right and no need for .nav-center
2. Loader now includes svg element in the CSS file, so no need to call loader.svg
3. Some cross browser compatibility issues fixed
4. Inputs rearranged see breaking changes for updates.

#### Breaking changes
One breaking change this update.
1. We revamped the input structure to breakdown responsively and contain results containers for dropdowns. The only updates that need to be made are adding a wrapper with the class `.input-group` around all labels, inputs, and results containers. See inputs component page for updates HTML structure.

***

### Version 0.2.1 - Jun. 5th 2018
Design Principles section was added. The principles section provides designers with guidelines on the application of our component library in their designs.

#### Bug fixes
Bug Fixes will be coming in late June. Join the #denali slack channel to get the latest updates.

***

### Version 0.2.0 - Feb. 19th 2018
With this release of Denali v0.2.0 we were hard at work adding in responsiveness to all our components, and you can see a great example with the navbar. We added breakpoints using media queries, that are easy for you to use by sass includes.

#### Bug fixes
We had a few bugs and were able to update all of them. They include...
1. Logo was shrinking and disappearing in the navbar when you resize your browser.
2. Horizontal tabs are now scrollable on a smaller screen size.
3. One of our modal on our docs site was not showing up.
4. Input states code was not showing.

#### Breaking changes
1. By adding responsiveness we had to change the navbar. We removed lists within the center and right nav. Also we changes the class `nav-items` to `nav-item`. You will need to make these changes when downloading v0.2.0
2. We also updated the menu component to require you to add the class `menu-trigger` to your `a` tags which will trigger the hover state and make the menu visible.
