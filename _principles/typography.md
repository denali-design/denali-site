---
title: "Typography"
permalink: /principles/typography
excerpt: "Words are our primary means of communication. Therefore careful selection of typography and the use of typographic patterns is essential to a successful product."
---

# {{ page.title }}
{{ page.excerpt }}

***

## Font Families
It is important to take careful consideration when selecting a font family for your product as not all font styles read well on screens. San Serif and Monospace fonts are optimal for desktop and mobile products as they have high legibility at large and small sizes. Additionally, Monospace fonts provide consistent letter spacing that is essential to displaying data and programming languages.

{% include principles-3-col.html
  title='Helvetica & Roboto Mono'
  description='Denali utilizes Helvetica and Roboto Mono as they both have high legibility and are widely available as free fonts. We recommend selecting one Sans Serif font and one Monospace font for use throughout your product.'
  do-image='helvetica-do@2x.jpg'
  do-description='use a sans serif font such as Helvetica throughout your product.'
  dont-image='helvetica-dont@2x.jpg'
  dont-description='use decorative fonts throughout your product.'
%}

{% include principles-3-col.html
  title=''
  description=''
  do-image='Roboto-do@2x.jpg'
  do-description='use a monospace font when displaying changing time on a countdown or timer.'
  dont-image='Roboto-dont@2x.jpg'
  dont-description='use a serif font when displaying static time stamps.'
%}

***

## Styles
Practicing restraint when selecting type weights and styles is important to establishing visual hierarchy, consistency, and typographic patterns.

{% include principles-2-col.html
  title='Denali Heading Styles'
  description='In order to simplify your type selection process and establish recognizable typographic patterns we’ve recommend the following heading styles and use cases:'
  recommended-image='display@2x.jpg'
  recommended-description='as a heading on welcome pages.'
%}

{% include principles-2-col.html
  title=''
  description=''
  recommended-image='headline@2x.jpg'
  recommended-description='as a heading on a low density page.'
%}

{% include principles-2-col.html
  title=''
  description=''
  recommended-image='title@2x.jpg'
  recommended-description='as a heading on a high density page.'
%}

{% include principles-2-col.html
  title=''
  description=''
  recommended-image='subheading@2x.jpg'
  recommended-description='as a heading to break up subsections on a page.'
%}

{% include principles-2-col.html
  title=''
  description=''
  recommended-image='caption@2x.jpg'
  recommended-description='as a descriptor to display secondary information or meta-data.'
%}

{% include principles-2-col.html
  title=''
  description=''
  recommended-image='value-id@2x.jpg'
  recommended-description='as labels on data visualizations and tables.'
%}

***

## Colors
The majority of Denali’s type is black. In certain situations white, grey, blue or status colors can be applied to type to aid visual hierarchy, provide contrast, or convey meaning.

{% include principles-3-col.html
  title='Black'
  description='Black (#303030) is our primary type color. It should be used for static text elements such as heading and body text.'
  do-image='type-black-do@2x.jpg'
  do-description='use black on headlines and body copy.'
  dont-image='type-black-dont@2x.jpg'
  dont-description='use black on text links.'
%}

{% include principles-3-col.html
  title='White'
  description='White (#FFFFFF) should be used in situations where black text does not contrast well against the text element’s background color.'
  do-image='type-white-do@2x.jpg'
  do-description='use white text against an element with a dark background.'
  dont-image='type-white-dont@2x.jpg'
  dont-description='use white text against an element with a light background.'
%}

{% include principles-3-col.html
  title='Grey'
  description='Grey (#XXXXXX) should be used to de-emphasize the visual importance of text such as a caption or to convey a disabled state.'
  do-image='type-grey-do@2x.jpg'
  do-description='use grey on a text element with low visual importance such as a page title.'
  dont-image='type-grey-dont@2x.jpg'
  dont-description='use grey on a text element with high visual importance such as a a caption.'
%}

{% include principles-3-col.html
  title='Blue'
  description='Blue (#3697F2) should only be used to convey active links and buttons.'
  do-image='type-blue-do@2x.jpg'
  do-description='use blue to convey an active link within body copy.'
  dont-image='type-blue-dont@2x.jpg'
  dont-description='use blue to color sections of static body copy.'
%}

{% include principles-2-col.html
  title='Status Colors'
  description='Green, Yellow, and Red status colors should be used only when it is necessary to convey a status through text.'
  do-image='type-status-do@2x.jpg'
  do-description='use red text to notify users of required fields.'
  dont-image='type-status-dont@2x.jpg'
  dont-description='use red text for input field labels.'
%}

***

## Density
Body copy refers to blocks of text in a product or web page. In order to maintain body copy’s legibility it is important to use a legible font size and provide sufficient line height. Optimal font size and line height values for body copy vary by the density of a page, which is why Denali offers two body copy styles:

{% include principles-2-col.html
  title='Standard Body Copy'
  description='Standard body copy style is intended for pages with high density. Standard body copy utilizes a 14 pixels font size with a line height of 16 pixels.'
  do-image='copy-standard-do@2x.jpg'
  do-description='use standard body copy on pages with high page density.'
  dont-image='copy-standard-dont@2x.jpg'
  dont-description='use standard body copy on pages with low page density.'
%}

{% include principles-2-col.html
  title='Large Body Copy'
  description='Large body copy style is intended for pages with low density. Large body copy utilizes a 16 pixel font with a line height of 22 pixels.'
  do-image='copy-large-do@2x.jpg'
  do-description='use large body copy on pages with low density.'
  dont-image='copy-large-dont@2x.jpg'
  dont-description='use large body copy on pages with high density.'
%}

{% include principles-3-col.html
  title='Whitespace'
  description='Providing adequate white space around text elements is essential to maximizing legibility, maintaining visual hierarchy, and reducing visual noise.'
  do-image='white-space-do@2x.jpg'
  do-description='give text elements adequate white space to ensure legibility.'
  dont-image='white-space-dont@2x.jpg'
  dont-description='hinder legibility by placing text elements too close to each other.'
%}
