---
title: 'Layout'
permalink: /principles/layout
excerpt: 'Layouts provide the structural foundation of our interfaces. Adhering to common foundational layouts, breakpoints, and responsive patterns promotes consistency and usability across our interfaces. '

---

# {{ page.title }}
{{ page.excerpt }}

***

## Breakpoints and Artboards Sizes
When designing layouts for responsive interfaces it is important to consider the breakpoints used in development. Denali utilizes the following breakpoint brackets:
1. Mobile 0 - 600 pixels
2. Tablets 600 - 900 pixels
3. Small Desktops 1200 - 1440 pixels
4. Large Desktops  900 - 1200 pixels
5. X-large Screens 1440+ pixels

Although our breakpoint brackets cover a wide range of screen sizes, we recommend designing for the smallest screen size in each breakpoint. Doing so ensures that interfaces fit within the lower limit of their respective breakpoint bracket while allowing them to scale up seamlessly to fit their bracket’s upper limit when necessary.

We recommend the following artboard sizes when designing for each breakpoint bracket:
1. Mobile 320 x 568 pixels
2. Tablet 768 x 1024 pixels
3. Small Desktops 1024 x 768 pixels
4. Large Desktops & X-Large Screens 1440 x 800 pixels

***

## Foundational Layouts
We’ve developed 3 foundational layouts that serve as the basis for all our interfaces. These layouts are flexible enough to fit a variety of use cases but structured enough to create organizational patterns that help guide our users through an interface at any given size.
#### Mobile Layout
Our mobile layout feature a condensed navigation bar at the top of the screen. Navigational elements and menus are hidden behind “hamburger” or “more” icons and take up the full width of the screen when acted upon.

Interface content is stacked and centered in a mobile layout.

Where necessary, drawer navigation may be added to the bottom of a mobile layout as a secondary navigation.
#### Tablet Layout
Our tablet layout features a slightly less condensed navigation bar at the top of the screen. Depending on the amount of navigational elements present, “hamburger” or “more” icons may be utilized. Additionally, a condensed search bar appears in the center of the navigation bar.

Interface content may stack or organized into columns, depending on the available space and the nature of the content itself.

A single side navigation may appear on the left or right of the screen but not on both sides.
#### Desktop Layout
Desktop layouts feature a full width navigation bar at the top of the screen. Icons that represent common actions or links such as “settings” or “support” may be present. Additionally a search bar appears in the center of the navigation bar.

Where necessary a secondary navigation may appear directly beneath the primary navigation.

Interface content can be arranged into a variety of columns but it is rarely stacked or placed directly in the center.

Side navigation may appear on the left or right side of the screen as well as simultaneously on both sides.

***

## Responsive Patterns
Responsive patterns dictate how our interfaces react to being resized. It is important to utilize these patterns when translating an interface design across screen sizes in order to promote consistency and predictability.
#### Reorganize
Content stacks on smaller screen sizes and reorganizes itself into columns at larger screen sizes.
#### Hide
Content that is not essential to the interface hides behind icons or links and only appears when acted upon. The “hamburger” and “more” icons on the mobile navigation bar are a primary example of this.
