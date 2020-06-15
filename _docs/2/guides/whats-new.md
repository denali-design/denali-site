---
title: "What's New"
permalink: docs/:path
excerpt: "We list all the updates, bug fixes, and new features."
---

# {{ page.title }}
{{ page.excerpt }}

## June 15th 2020 | v2.0.1

<br>

#### Components
- **Menu** Direction is can now be applied to the parent element e.g. `menu .is-right`
- **Navbar** Combine `.nav-icon` and `.nav-item` We will deprecate `.nav-icon` in a later version.
- **Navbar & Menu** Navbar now used the menu component with the modifier `.menu--nav`

#### Variables
Checkbox
- Added | $checkbox-checkmark-color
- Added | $checkbox-corner-radius

Button
- Added | $button-font-weight
- Added | $button-font-size

Navbar
- Removed | $navbar-menu-bg-color


***


## April 29th 2020 | v2.0

<br>

#### New
- **Toogles** Ability just use icons in toggles.
- **Buttons** Grouping of two buttons together using `.button-group`.
- **List** Implemented unordered and ordered lists. 
- **Navbar** Implemented a center section, `.nav-control` for adding inputs into the navbar with consisency, `.nav-menu` is to replace the menu components in the navbar, and `is-fixed-top` to apply a position fixed top.
- **Input groups** Added a modifier of `.auto` to adjust label width from size of content.
- **Icons** Icon size modifier can now be used for SVG icons
- **Colors** Added fill color helpers.
- **Menu** Added a `link` class when unable to use a href tags.
- **Breadcrumbs** This component is used to show the relationship betweens pages or content.
- **Tooltips** This component is used to display additional information when a user hovers, focuses, or taps on the element.
- **Block Level Alerts** Added a modifier of `.is-block` to apply an in context alert.

<br>

#### Fixes
- **Selects** Arrows reposition on width change. Arrow positioning at different sizes. Inverse theme issues were fixed.
- **Modal** Dark theme fixes. Border and border radius fixes on dark theme.

<br>

#### Removed
- **Navbar** `.nav-group` was removed because of the center section.
- **Colors** We condensed our brand colors from `100` to `500` values.
