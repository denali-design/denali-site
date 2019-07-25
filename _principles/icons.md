---
title: 'Icons'
permalink: /principles/icons
excerpt: 'Icons are an important part of our interfaces. They allow us to visually communicate actions and create patterns that allow users to work through our interfaces efficiently.'

---

<div id="top"></div>

<!-- Intro and secondary navigation -->
<h1>Icons</h1>
<p class="m-t-1 m-b-3">Icons are an important part of our interfaces. They allow us to visually communicate actions and create patterns that allow users to work through our interfaces efficiently.</p>
<div class="tabs is-secondary sticky has-bg-grey-100">
  <ul id="navLinks">
    <li><a href="{{ site.baseurl }}/principles/icons#design">Design</a></li>
    <li><a href="{{ site.baseurl }}/principles/icons#grid">Grid</a></li>
    <li><a href="{{ site.baseurl }}/principles/icons#strokes">Strokes</a></li>
    <li><a href="{{ site.baseurl }}/principles/icons#usage">Usage</a></li>
    <li><a href="{{ site.baseurl }}/principles/icons#meaning">Meaning</a></li>
  </ul>
</div>

<div id="design" class="p-t-6">
  <h2>Icon Design</h2>
  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <p class="m-t-1">
        Our icons are designed to communicate ideas in their simplest form. Designing for simplicity ensures that our icons provide clarity to our users and that they maintain their readability even at small sizes.
      </p>
    </div>
    <div class="column flex-column flex-2 m-b-3">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-6">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-icons/icon-design@2x.png" alt="">
      </div>
    </div>
  </div>
</div>

<div id="grid" class="p-t-2">
<hr class="m-b-3">
  <h2>Icon Grid</h2>
  <p class="m-t-1 m-b-3">Our icon grid was developed to maintain consistency across our icon family. When designing icons, always work at 100% scale. Download the Icon Grid.</p>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Grid Dimensions</h4>
      <p class="m-t-1 m-b-2">
        The icon grid is 48 by 48 pixels wide and is comprised of a 46 by 46 pixel live area surrounded by a 2 pixel border of padding on each side.rid Dimensions.
      </p>
      <h4>Live Area</h4>
      <p class="m-t-1 m-b-2">
        The live area represents the “safe space” in which the icon should reside. No part of the icon should extend pt this space.
      </p>
      <h4>Grid Padding</h4>
      <p class="m-t-1 m-b-2">
        The padding represents the “bounding box” that surrounds the live area. Preserving the white space created by the padding ensures that our icons look balanced when paired with other icons or when scaled to small sizes.
      </p>
      <h4>Key Line</h4>
      <p class="m-t-1 m-b-2">
        Contained within the grid are various key line shapes. Designing within the bounds of these shapes ensures visual consistency and balance between icons.
      </p>
    </div>
    <div class="column flex-column flex-2 m-b-3">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-6">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-icons/icon-grid@2x.png" alt="">
      </div>
    </div>
  </div>
</div>


<!-- Types -->
<div id="strokes" class="p-t-2">
  <hr class="m-b-3">
  <h2>Strokes & Corners</h2>
  <p class="m-t-1 m-b-3">In order to maintain visual consistency between icons it is important to maintain a consistent stroke weight and corner rounding radius.</p>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Stroke Weight</h4>
      <p class="m-t-1">
        Our icons are built using a 4 pixel stroke weight. This stroke weight should be applied to every stroke, except where minor optical adjustments to the stroke weight are necessary to maintain visual balance.
      </p>
    </div>
    <div class="column  flex-2">
      <div class="row">
        <div class="column flex-column">
          <div class="align-items-center justify-content-center has-bg-grey-300 br-4">
            <img class="example small" src="{{ site.baseurl }}/assets/images/principles-icons/stroke-do@2x.png" alt="">
          </div>
          <p class="m-t-1 m-b-3">
            The stroke weight around this icon is 4 px.
          </p>
        </div>
        <div class="column flex-column">
          <div class="align-items-center justify-content-center has-bg-grey-300 br-4">
            <img class="example small" src="{{ site.baseurl }}/assets/images/principles-icons/stroke-dont@2x.png" alt="">
          </div>
          <p class="m-t-1 m-b-3">
            The stroke weight around this icon is 4 px, but the stroke weight inside is 2 px.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Corner Rounding</h4>
      <p class="m-t-1">
        Corners should always be rounded by 2 pixels to maintain an open and optimistic character across our icon family.
      </p>
    </div>
    <div class="column  flex-2">
      <div class="row">
        <div class="column flex-column">
          <div class="do align-items-center justify-content-center has-bg-grey-300 br-4">
            <img class="example small" src="{{ site.baseurl }}/assets/images/principles-icons/corner-do@2x.png" alt="">
          </div>
          <p class="m-t-1 m-b-3">
            <span class="upper bold is-status-success">Do </span>make sure icons have rounded corners.
          </p>
        </div>
        <div class="column flex-column">
          <div class="dont align-items-center justify-content-center has-bg-grey-300 br-4">
            <img class="example small" src="{{ site.baseurl }}/assets/images/principles-icons/corner-dont@2x.png" alt="">
          </div>
          <p class="m-t-1 m-b-3">
            <span class="upper bold is-status-danger">Don't </span>use icons with with straight corners.
          </p>
        </div>
      </div>
    </div>
  </div>

</div>


<!-- Usage -->
<div id="usage" class="p-t-2">
  <hr class="m-b-3">
  <h2>Icon Usage</h2>
  <p class="m-t-1 m-b-3">We use icons throughout our products to communicate actions, create patterns, and help reinforce messages visually. Icons are most meaningful when paired with descriptive text but they can also function on their own. </p>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Size</h4>
      <p class="m-t-1">
        Icons are meant to represent larger actions or ideas in their simplest, most compact form. Therefore, icons should never be scaled down to the point that they lose their readability or scaled up to the point that dominate the visual hierarchy of the page.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="recommended flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-icons/icon-size@2x.png" alt="">
      </div>
      <p class="m-t-1 m-b-3">
        <span class="upper bold is-status-info">Recommended </span>Use the following icon scale to size your icons: 12px, 16px, 28px, 36px, 48px.
      </p>
    </div>
  </div>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Spacing</h4>
      <p class="m-t-1">
        Providing adequate spacing around icons is essential to maintaining their readability. We recommend the following white space guidelines for each icon size. Icon space values specific to the use of icons in certain UI components such as the navbar and buttons can be found on their respective component page.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="recommended flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-icons/icon-spacing@2x.png" alt="">
      </div>
      <p class="m-t-1 m-b-3">
        <span class="upper bold is-status-info">Recommended </span>Keep a minimum space of 6px between icons and other elements.
      </p>
    </div>
  </div>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Mobile Targets</h4>
      <p class="m-t-1">
        In mobile products it is important to remember that icons at any size must be given a “touch target” of 48 by 48 pixels.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-icons/icon-mobile-target@2x.png" alt="">
      </div>
    </div>
  </div>
</div>

<!-- Meaning -->
<div id="meaning" class="p-t-2">
  <hr class="m-b-3">
  <h2>Meaning</h2>

  <h4 class="m-t-4">Static Icons</h4>
  <p class="m-t-1 m-b-4">
    Static icons are icons whose primary purpose is to help convey an idea visually. Static icons can’t be acted upon. Examples of static icons include icons that accompany status alerts and icons that accompany descriptive labels.
  </p>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Colors</h4>
      <p class="m-t-1 m-b-2">
        Static icons can be colored using colors from any of our color palettes. However we recommend not coloring static icons with our blue link color (#3697F2) as it may cause confusion.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-icons/static-icons@2x.png" alt="">
      </div>
    </div>
  </div>

  <h4 class="m-t-4">Actionable Icons</h4>
  <p class="m-t-1 m-b-4">
    Actionable icons are icons whose primary purpose is to convey an action. Actionable icons can be acted upon. Examples of actionable icons include icons that accompany buttons or links.
  </p>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Colors</h4>
      <p class="m-t-1 m-b-2">
        We recommend only coloring static icons with our link blue color (#3697F2). This ensures that the icon will look actionable to users.
      </p>
    </div>
    <div class="column  flex-2">
      <div class="row">
        <div class="column flex-column">
          <div class="align-items-center justify-content-center has-bg-grey-300 br-4">
            <img class="example small" src="{{ site.baseurl }}/assets/images/principles-icons/actionable-icons-main@2x.png" alt="">
          </div>
        </div>
        <div class="column flex-column">
          <div class="align-items-center justify-content-center has-bg-grey-300 br-4">
            <img class="example small" src="{{ site.baseurl }}/assets/images/principles-icons/actionable-icons-sub@2x.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
