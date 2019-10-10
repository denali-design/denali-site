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

{% include principles-2-col.html
  title='Container'
  description='The basic element of a field is a container. Containers differentiate fields from other elements on the page and enclose text a user enters and default information such as hint, prefix, and suffix text.'
  standard-image='fields/foundation-1.png'
%}

{% include principles-2-col.html
  title='Label'
  description='Labels call out the type of text information that should be entered in the field by a user. Labels can be placed to the left of fields or stacked on top. Label text should be concise and informative.'
  standard-image='fields/foundation-2.png'
%}

{% include principles-2-col.html
  title='Hint text'
  description='Hint text appears within the field container. Hint text should be concise and provide users with an example of the text information that should be entered in the field. Hint text appears at a lower opacity and disappears as soon as a user begins to type text into the field.'
  standard-image='fields/foundation-3.png'
%}

{% include principles-2-col.html
  title='Input text'
  description='Input text is text that a user has entered into a field. Unlike hint text, input text appears at full opacity. When a user is actively typing within the field, input text should be followed by a blinking text cursor.'
  standard-image='fields/foundation-4.png'
%}

{% include principles-2-col.html
  title='Prefix + Suffix'
  description='Prefix and suffix text indicate the type of information that should be entered in the field. They appear at a lower opacity, but unlike hint text, prefix and suffix text resides in the field permanently. Examples include currency symbols or units of measurement.'
  standard-image='fields/foundation-5.png'
%}

{% include principles-2-col.html
  title='Descriptive Text'
  description='Descriptive text is text that provides further guidance about the type of information a user is expected to enter in the field. This includes descriptive sentences, character counts, and error messages. '
  standard-image='fields/foundation-6.png'
%}


***


## Types
Denali offers three types of fields - inline, text area, and expanding. Each field type has specific use cases and usage recommendations.

{% include principles-2-col.html
  title='Inline'
  description='Inline fields are fields that appear inline. Denali provides 3 sizes for inline fields - default, medium, and small. We recommend selecting the size of your fields based on the density of your page. Small fields are recommended for use in high density pages and default fields are recommended for use in low density pages.'
  standard-image='fields/inline-sizes.png'
%}

{% include principles-3-col.html
  description='We recommend using inline text fields when the requested input text is expected to fit within the width of the inline field. Otherwise, the input text will become hidden behind a vertical scroll which can create frustration.'
  do-image='fields/inline-do.png'
  do-description='use an inline field when the requested input text is expected to fit within the width of the inline field'
  dont-image='fields/inline-dont.png'
  dont-description='use an inline field when there is a possibility that requested input text will not fit within the with of the field'
%}

{% include principles-3-col.html
  description='Inline fields that appear alongside each other should be the same size and height to maintain visual consistency and hierarchy.'
  do-image='fields/sizes-do.png'
  do-description='use fields of the same size in a form'
  dont-image='fields/sizes-dont.png'
  dont-description='don’t vary the sizes of fields in a form'
%}


***


{% include principles-2-col.html
  title='Text area'
  description='Text areas are fields that span multiple lines. We recommend using text area fields when the requested input text is expected to span multiple lines.'
  standard-image='fields/textarea.png'
%}

{% include principles-3-col.html
  description='Denali does not offer fixed text area sizes. Instead, the height of text areas should be sized to accommodate the expected input text. If necessary, text areas can scroll vertically to accommodate input text that goes beyond the height of the field.'
  do-image='fields/textarea-do.png'
  do-description='use a text area when the requested input text is expected to span multiple lines'
  dont-image='fields/textarea-dont.png'
  dont-description='use a text area when the requested input text is not expected to span multiple lines'
%}


***


## Positioning
Field labels can be placed either to the left of a field or stacked on top of a field. The recommended placement of labels varies by use case.

{% include principles-2-col.html
  title='Left'
  description='Left aligned labels appear to the left of a field. We recommended using left aligned labels in low density pages where there is plenty of space for the label to be placed to the left.'
  standard-image='fields/labels-left.png'
%}

{% include principles-2-col.html
  standard-image='fields/inline-example.png'
%}

{% include principles-2-col.html
  title='Stacked'
  description='Stacked labels appear on top of a field. We recommended using stacked labels in high density pages. They are also recommended in situations where horizontal space is limited, such as mobile views. '
  standard-image='fields/labels-stacked.png'
%}

{% include principles-2-col.html
  standard-image='fields/stacked-example.png'
%}


***


## States
Fields have active, error, and disabled states.

{% include principles-2-col.html
  title='Active'
  description='Field active state indicates that a field has been clicked by a user. An active field has a solid color border along the bottom of the container and a blinking text cursor. The placeholder text remains inside active text fields until a user begins typing, at which point the placeholder text is replaced by input text.'
  standard-image='fields/states-active.png'
%}

{% include principles-2-col.html
  title='Disabled'
  description='A disabled field is indicated by a field label, container, and placeholder text with a greyed out appearance.'
  standard-image='fields/states-disabled.png'
%}

{% include principles-2-col.html
  title='Error'
  description='When the information entered in a field returns an error, it is indicated by a solid warning color along the bottom of the container and identically colored descriptive text explaining the error directly underneath the container.'
  standard-image='fields/states-error.png'
%}
