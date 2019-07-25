---
title: 'Alerts'
permalink: /principles/alerts
excerpt: 'Alerts provide users with information and to notify them of actions that need to be taken. Denali categorizes alerts into 3 distinct types with specific use cases for each.'

---

<div id="top"></div>

<!-- Intro and secondary navigation -->
<h1>Alerts</h1>
<p class="m-t-1 m-b-3">Alerts provide users with information and to notify them of actions that need to be taken. Denali categorizes alerts into 3 distinct types with specific use cases for each.</p>
<div class="tabs is-secondary sticky has-bg-grey-100">
  <ul id="navLinks">
    <li><a href="{{ site.baseurl }}/principles/alerts#colors">Colors</a></li>
    <li><a href="{{ site.baseurl }}/principles/alerts#types">Types</a></li>
    <li><a href="{{ site.baseurl }}/principles/alerts#positioning">Positioning</a></li>
    <!-- <li><a href="#specs">Specs</a></li> -->
  </ul>
</div>

<!-- Colors -->
<div id="colors" class="p-t-6">
  <h2>Colors</h2>
  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Status</h4>
      <p class="m-t-1">
        Alerts utilize the status color palette to visually convey the context and severity of each alert:
      </p>
      <p class="m-t-1">
        Red - High severity, danger messages.
      </p>
      <p class="m-t-1">
        Yellow - Medium severity, warning messages.
      </p>
      <p class="m-t-1">
        Green - No severity, success messages.
      </p>
      <p class="m-t-1">
        Blue - No severity, informational messages.
      </p>
    </div>
    <div class="column flex-column flex-2 m-b-3">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-6">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-alerts/alerts@2x.png" alt="">
      </div>
    </div>
  </div>
</div>

<!-- Types -->
<div id="types" class="p-t-2">
  <hr class="m-b-3">
  <h2>Types</h2>
  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Static</h4>
      <p class="m-t-1">
        Static alerts are informational in nature. They appear by default and are not dismissable. We suggest using inline or block level style alerts for static alerts as they fit alongside the content they are referencing.
      </p>
    </div>
    <div class="column  flex-2">
      <div class="row">
        <div class="column flex-column">
          <div class="do align-items-center justify-content-center has-bg-grey-300 br-4">
            <img class="example small" src="{{ site.baseurl }}/assets/images/principles-alerts/static-do@2x.png" alt="">
          </div>
          <p class="m-t-1 m-b-3">
            <span class="upper bold is-status-success">Do </span>use a block level alert below a delivery tracking element notifying a user that their order delivery is behind schedule.
          </p>
        </div>
        <div class="column flex-column">
          <div class="dont align-items-center justify-content-center has-bg-grey-300 br-4">
            <img class="example small" src="{{ site.baseurl }}/assets/images/principles-alerts/static-dont@2x.png" alt="">
          </div>
          <p class="m-t-1 m-b-3">
            <span class="upper bold is-status-danger">Don't </span>use a inline style alert above the element to notify a user that their package is behind schedule.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Notification</h4>
      <p class="m-t-1">
        Notification alerts are informational in nature and appear immediately in response to an action a user has taken. Notification alerts are dismissed on their own after a period of 3-5 seconds. We recommend using notification style alerts for notification alerts as they call attention to themselves by appearing on top of all other elements on a page.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="do flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-alerts/notification-do@2x.png" alt="">
      </div>
      <p class="m-t-1 m-b-3">
        <span class="upper bold is-status-success">Do </span>use a notification style alert to notify a user that changes they made to a page have been saved, immediately after they select the save button.
      </p>
      <div class="dont flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-alerts/notification-dont@2x.png" alt="">
      </div>
      <p class="m-t-1 m-b-3">
        <span class="upper bold is-status-danger">Don't </span>use an inline style alert to notify a user that changes they made to a page have been saved.
      </p>
    </div>
  </div>
</div>

<!-- Positioning -->
<div id="positioning" class="p-t-2">
  <hr class="m-b-3">
  <h2>Positioning</h2>
  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Global</h4>
      <p class="m-t-1">
        Global alerts reference information pertaining to an entire system or application. For this reason we recommend placing global alerts at the top of the application screen. We suggest using inline or notification alerts as global alerts as they appear at the top of the screen and visually encompass the entirety of the system or application they are applied to.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="do flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-alerts/global-do@2x.png" alt="">
      </div>
      <p class="m-t-1 m-b-3">
        <span class="upper bold is-status-success">Do </span>use an inline alert throughout a site to notify users that the entire system is down for maintenance.</p>
      <div class="dont flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-alerts/global-dont@2x.png" alt="">
      </div>
      <p class="m-t-1 m-b-3">
        <span class="upper bold is-status-danger">Don't </span>use notifications style alert on the landing page of a site to notify users that the entire system is down for maintenance.
      </p>
    </div>
  </div>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Local</h4>
      <p class="m-t-1">
        Local alerts contain information specific to an element on the page and are located in close proximity to that element. We suggest using block level or text style alerts as local alerts as they can be placed next to the elements they are referencing.
      </p>
    </div>
    <div class="column flex-2">
      <div class="row">
        <div class="column flex-column">
          <div class="do align-items-center justify-content-center has-bg-grey-300 br-4">
            <img class="example small" src="{{ site.baseurl }}/assets/images/principles-alerts/local-do@2x.png" alt="">
          </div>
          <p class="m-t-1 m-b-3">
            <span class="upper bold is-status-success">Do </span>use block level alerts adjacent to an upload form to notify a user that their upload was successful.
          </p>
        </div>
        <div class="column flex-column">
          <div class="dont align-items-center justify-content-center has-bg-grey-300 br-4">
            <img class="example small" src="{{ site.baseurl }}/assets/images/principles-alerts/local-dont@2x.png" alt="">
          </div>
          <p class="m-t-1 m-b-3">
            <span class="upper bold is-status-danger">Don't </span>use an inline alert to notify a user that their upload was successful.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Specs -->
<!-- <div id="specs" class="p-t-2">
  <hr class="m-b-3">
  <h2 >Specs</h2>
  <div class="row flex-column m-t-1 m-b-6">
    <a class="m-b-1" href="">Notification Alerts<i class="d-icon d-external is-sub"></i></a>
    <a class="m-b-1" href="">Block Alerts<i class="d-icon d-external is-sub"></i></a>
    <a class="m-b-1" href="">Inline Alerts<i class="d-icon d-external is-sub"></i></a>
  </div>
</div> -->
