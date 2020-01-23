---
title: 'Alerts'
permalink: /principles/alerts
excerpt: 'Alerts provide users with information and to notify them of actions that need to be taken. Denali categorizes alerts into 3 distinct types with specific use cases for each.'

---

# {{ page.title }}
{{ page.excerpt }}

***

## Colors
Alerts utilize the status color palette to visually convey the context and severity of each alert:
<br><br>Red - High severity, danger messages.
<br><br>Yellow - Medium severity, warning messages.
<br><br>Green - No severity, success messages.
<br><br>Blue - No severity, informational messages.'

{% include principles-1-col.html  
  standard-image='alerts@2x.png'
%}

***

## Types
<br>
### Static
Static alerts are informational in nature. They appear by default and are not dismissible. We suggest using inline or block level style alerts for static alerts as they fit alongside the content they are referencing.

{% include principles-2-col.html
  do-image='static-do@2x.png'
  do-description='use a block level alert below a delivery tracking element notifying a user that their order delivery is behind schedule.'
  dont-image='static-dont@2x.png'
  dont-description='use a inline style alert above the element to notify a user that their package is behind schedule.'
%}

### Notification
Notification alerts are informational in nature and appear immediately in response to an action a user has taken. Notification alerts are dismissed on their own after a period of 3-5 seconds. We recommend using notification style alerts for notification alerts as they call attention to themselves by appearing on top of all other elements on a page.

{% include principles-1-col.html
  do-image='notification-do@2x.png'
  do-description='use a notification style alert to notify a user that changes they made to a page have been saved, immediately after they select the save button.'
  dont-image='notification-dont@2x.png'
  dont-description='use an inline style alert to notify a user that changes they made to a page have been saved.'
%}

***

## Positioning
<br>
### Global
Global alerts reference information pertaining to an entire system or application. For this reason we recommend placing global alerts at the top of the application screen. We suggest using inline or notification alerts as global alerts as they appear at the top of the screen and visually encompass the entirety of the system or application they are applied to.

{% include principles-1-col.html
  do-image='global-do@2x.png'
  do-description='use an inline alert throughout a site to notify users that the entire system is down for maintenance.'
  dont-image='global-dont@2x.png'
  dont-description='use notifications style alert on the landing page of a site to notify users that the entire system is down for maintenance.'
%}

### Local
Local alerts contain information specific to an element on the page and are located in close proximity to that element. We suggest using block level or text style alerts as local alerts as they can be placed next to the elements they are referencing.

{% include principles-2-col.html
  do-image='local-do@2x.png'
  do-description='use block level alerts adjacent to an upload form to notify a user that their upload was successful.'
  dont-image='local-dont@2x.png'
  dont-description='use an inline alert to notify a user that their upload was successful.'
%}
