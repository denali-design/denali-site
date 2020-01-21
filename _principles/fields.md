---
title: 'Fields'
permalink: /principles/fields
excerpt: 'Fields allow users to enter text information within your product.'
---


# {{ page.title }}
{{ page.excerpt }}


***


## Foundation
Fields are comprised of the following foundational elements:

### Container
The basic element of a field is a container. Containers differentiate fields from other elements on the page and enclose text a user enters and default information such as hint, prefix, and suffix text.

{% include principles-1-col.html
  standard-image='fields/foundation-1.png'
%}

### Label
Labels call out the type of text information that should be entered in the field by a user. Labels can be placed to the left of fields or stacked on top. Label text should be concise and informative.

{% include principles-1-col.html
  standard-image='fields/foundation-2.png'
%}

### Hint text
Hint text appears within the field container. Hint text should be concise and provide users with an example of the text information that should be entered in the field. Hint text appears at a lower opacity and disappears as soon as a user begins to type text into the field.

{% include principles-1-col.html
  standard-image='fields/foundation-3.png'
%}

### Input text
Input text is text that a user has entered into a field. Unlike hint text, input text appears at full opacity. When a user is actively typing within the field, input text should be followed by a blinking text cursor.

{% include principles-1-col.html
  standard-image='fields/foundation-4.png'
%}

### Prefix + Suffix
Prefix and suffix text indicate the type of information that should be entered in the field. They appear at a lower opacity, but unlike hint text, prefix and suffix text resides in the field permanently. Examples include currency symbols or units of measurement.

{% include principles-1-col.html
  standard-image='fields/foundation-5.png'
%}

### Descriptive Text
Descriptive text is text that provides further guidance about the type of information a user is expected to enter in the field. This includes descriptive sentences, character counts, and error messages.

{% include principles-1-col.html
  standard-image='fields/foundation-6.png'
%}


***


## Types
Denali offers three types of fields - inline, text area, and expanding. Each field type has specific use cases and usage recommendations.

### Inline
Inline fields are fields that appear inline. Denali provides 3 sizes for inline fields - default, medium, and small. We recommend selecting the size of your fields based on the density of your page. Small fields are recommended for use in high density pages and default fields are recommended for use in low density pages.

{% include principles-1-col.html
  standard-image='fields/inline-sizes.png'
%}

We recommend using inline text fields when the requested input text is expected to fit within the width of the inline field. Otherwise, the input text will become hidden behind a vertical scroll which can create frustration.

{% include principles-2-col.html
  do-image='fields/inline-do.png'
  do-description='use an inline field when the requested input text is expected to fit within the width of the inline field'
  dont-image='fields/inline-dont.png'
  dont-description='use an inline field when there is a possibility that requested input text will not fit within the with of the field'
%}

Inline fields that appear alongside each other should be the same size and height to maintain visual consistency and hierarchy.

{% include principles-2-col.html
  do-image='fields/sizes-do.png'
  do-description='use fields of the same size in a form'
  dont-image='fields/sizes-dont.png'
  dont-description='don’t vary the sizes of fields in a form'
%}


***

## Text area
Text areas are fields that span multiple lines. We recommend using text area fields when the requested input text is expected to span multiple lines.

{% include principles-1-col.html
  standard-image='fields/textarea.png'
%}

Denali does not offer fixed text area sizes. Instead, the height of text areas should be sized to accommodate the expected input text. If necessary, text areas can scroll vertically to accommodate input text that goes beyond the height of the field.

{% include principles-2-col.html
  do-image='fields/textarea-do.png'
  do-description='use a text area when the requested input text is expected to span multiple lines'
  dont-image='fields/textarea-dont.png'
  dont-description='use a text area when the requested input text is not expected to span multiple lines'
%}


***


## Positioning
Field labels can be placed either to the left of a field or stacked on top of a field. The recommended placement of labels varies by use case.

### Left
Left aligned labels appear to the left of a field. We recommended using left aligned labels in low density pages where there is plenty of space for the label to be placed to the left.

{% include principles-1-col.html
  standard-image='fields/labels-left.png'
%}

{% include principles-1-col.html
  standard-image='fields/inline-example.png'
%}

### Stacked
Stacked labels appear on top of a field. We recommended using stacked labels in high density pages. They are also recommended in situations where horizontal space is limited, such as mobile views.

{% include principles-1-col.html
  standard-image='fields/labels-stacked.png'
%}

{% include principles-1-col.html
  standard-image='fields/stacked-example.png'
%}


***


## States
Fields have active, error, and disabled states.

### Active
Field active state indicates that a field has been clicked by a user. An active field has a solid color border along the bottom of the container and a blinking text cursor. The placeholder text remains inside active text fields until a user begins typing, at which point the placeholder text is replaced by input text.

{% include principles-1-col.html
  standard-image='fields/states-active.png'
%}

### Disabled
A disabled field is indicated by a field label, container, and placeholder text with a greyed out appearance.

{% include principles-1-col.html
  standard-image='fields/states-disabled.png'
%}

### Error
When the information entered in a field returns an error, it is indicated by a solid warning color along the bottom of the container and identically colored descriptive text explaining the error directly underneath the container.

{% include principles-1-col.html
  standard-image='fields/states-error.png'
%}
