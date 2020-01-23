---
title: 'Buttons'
permalink: /principles/buttons
excerpt: 'Buttons allow users to take actions within your product. '
---

# {{ page.title }}
{{ page.excerpt }}

***

## Foundation
Regardless of their size or style, Denali buttons are comprised of the following foundational elements:

### Labels
Labels inform users of the action that will occur if they click the button.

{% include principles-1-col.html
  standard-image='foundation-1.png'
%}

### Container
Labels are housed within containers to provide greater visual contrast and negative space between the button and surrounding elements.

{% include principles-1-col.html
  standard-image='foundation-2.png'
%}

### Minimum width and padding
Buttons with text and text with labels have a minimum width of 120 pixels. Wider buttons and buttons with an icon only label must maintain a minimum 10 pixel padding on the left and right. This ensures that the label is legible and clear. In special cases, such as with loader labels, additional padding to the right is required.

{% include principles-1-col.html
  standard-image='foundation-3.png'
%}

### Margins
Always maintain a minimum 10 pixel margin between buttons and other buttons or components so that they do not become lost.

{% include principles-1-col.html
  standard-image='foundation-4.png'
%}

***

## Labels
Labels can be comprised of text, a single icon followed by text, or an icon on its own.

### Concise and informative
Labels should be concise and informative so that users know what action will be triggered when they click the button. Icon-only labels can be used in situations where an icon alone is sufficient to communicate button actions, otherwise we suggest using a text only label or an icon and text label.

{% include principles-2-col.html
  do-image='labels-do.png'
  do-description='use direct and concise button labels'
  dont-image='labels-dont.png'
  dont-description='use multiple icons or unnecessarily long button labels'
%}

### Loading labels
Loader labels are a special type of label that contain text followed by an animated loader icon. By default loader labels display text, but when clicked an animated loader icon appears to the right of the text to indicate that an action is in progress.

{% include principles-1-col.html
  standard-image='loading-label.png'
  standard-description='Submit button is a loader button that animates on click'
%}

***

## Density
In general you should aim to have only one high prominence button per layout in order to ensure that the most important or essential action is immediately clear. From there, it is important to have a balanced mix of buttons styles and sizes based on the density of the layout. Smaller and less visually prominent buttons should be used in high density layouts while larger more visually prominent buttons and sizes can be used in lower density layouts.

Layout with a balanced mix of buttons styles and sizes

{% include principles-1-col.html
  standard-image='density-example.png'
%}

Submit button is a loader button that animates on click

### Styles
Different button styles command different levels of visual prominence. As a general rule, the importance of a button’s action should match the visual prominence of the button itself. For example, an essential action should be signified with a button of high visual prominence such as a Solid button.

{% include principles-1-col.html
  standard-image='styles-scale.png'
%}

In this layout a Solid button is used to call out a primary action while a Ghost button is used to call out a secondary action

{% include principles-1-col.html
  standard-image='styles-example.png'
%}

### Sizes
As with button styles, different button sizes command different levels of visual prominence. When selecting button sizes it is important to consider the density of the page. Smaller buttons should be used in high density layouts while larger buttons can be used in lower density layouts.

Density scale according to button size

{% include principles-1-col.html
  standard-image='sizes-scale.png'
%}

Additionally, buttons that are used in conjunction with other elements such as form fields should be sized the same so that they appear as a single component unit.

{% include principles-2-col.html
  do-image='sizes-do.png'
  do-description='use a default sized field with a default sized button'
  dont-image='sizes-dont.png'
  dont-description='use a small sized field with a default sized button'
%}

### Placement
Multiple button styles can be placed alongside each other to convey the various actions a user may take as well as the importance of one action over another. Avoid placing the same button styles directly adjacent to each other as it gives both actions the same importance which may cause confusion or lack of direction.

{% include principles-2-col.html
  do-image='placement-do.png'
  do-description='use buttons with different visual prominence to convey actions with different levels of importance'
  dont-image='placement-dont.png'
  dont-description='use buttons with the same visual prominence to convey actions with different levels of importance'
%}

***

## Solid
Solid buttons are comprised of a label housed within a gradient-fill container.

### States
Solid buttons have 3 states: standard, hovered, and disabled. Standard solid buttons have a gradient-fill container. When hovered, the gradient-fill color becomes darker to indicate that the button is clickable. When disabled the gradient-fill becomes a solid gray color to indicate that it is not clickable.

{% include principles-1-col.html
  standard-image='solid-states.png'
%}

### Usage
Solid buttons are the most visually prominent button style. For that reason, we recommend using Solid button styles to call attention to important or necessary actions you want a user to take. It is best to use only one Solid button per layout to avoid causing confusion by assigning primary importance to too many actions.

{% include principles-2-col.html
  do-image='solid-do.png'
  do-description='use a single Solid button to call attention to the most important action'
  dont-image='solid-dont.png'
  dont-description='use Solid buttons alongside each other as it becomes unclear which action is most important'
%}

***

## Ghost
Ghost buttons are comprised of a label housed within a low opacity solid-fill container.

### States
Ghost buttons have 3 states: standard, hovered, and disabled. Standard Ghost buttons have a low opacity solid-fill container. When hovered, the solid-fill color and label color become darker to indicate that the button is clickable. When disabled, the solid-fill becomes a gray color and the label becomes grey to indicate that it is not clickable.

{% include principles-1-col.html
  standard-image='ghost-states.png'
%}

### Usage
Ghost buttons can be thought of as secondary buttons. Secondary buttons are used to call attention to less essential information and actions that a user may want to take, but that are not necessary. Due to the low opacity fill color of Ghost buttons we do not recommend using them alongside other low opacity components such as fields as they become difficult to differentiate visually.

{% include principles-2-col.html
  do-image='ghost-do.png'
  do-description='use a ghost button alongside opaque components such as text'
  dont-image='ghost-dont.png'
  dont-description='use a ghost button alongside low opacity components such as fields'
%}

***

## Outline
Outline buttons are comprised of a label housed within a solid outline container.

### States
Outline buttons have 3 states: standard, hovered, and disabled. Standard Outline buttons have a solid outline container. When hovered, the solid outline color and label color become darker and the container becomes filled with a low opacity color to indicate that the button is clickable. When disabled, the outline disappears, the container is filled with grey, and the label becomes grey to indicate that it is not clickable.

{% include principles-1-col.html
  standard-image='outline-states.png'
%}

### Usage
Outline buttons can also be considered secondary buttons. For that reason, we recommend using Outline buttons to call attention to less essential information and actions that a user may want to take, but are not necessary.

{% include principles-2-col.html
  do-image='outline-do.png'
  do-description='use an Outline button to call out a secondary action alongside a Solid button because they have different levels of visual prominence'
  dont-image='outline-dont.png'
  dont-description='use an Outline button to call out a secondary action alongside a Ghost button because they have the same visual prominence'
%}

***

## Text
Text buttons are comprised of a label with an invisible container.

### States
Text buttons have 3 states: standard, hovered, and disabled. Standard Text buttons have a colored label within an invisible container. When hovered, the label color becomes darker and the container becomes filled with a low opacity solid color to indicate that the button is clickable. When disabled the label becomes grey colored to indicate that it is not clickable.

{% include principles-1-col.html
  standard-image='text-states.png'
%}

### Usage
Text buttons are the least visually prominent. For that reason we recommend using them to indicate non-essential actions a user may want to take.

{% include principles-2-col.html
  do-image='text-do.png'
  do-description='use Text buttons to indicate a non essential action'
  dont-image='text-dont.png'
  dont-description='use Text buttons to indicate an essential or primary action'
%}
