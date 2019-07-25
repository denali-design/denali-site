---
title: 'Data Visualization'
permalink: /principles/graphs
excerpt: ''

---

<div id="top"></div>

<!-- Intro and secondary navigation -->
<h1>Data Visualization</h1>
<p class="m-t-1 m-b-3"></p>
<div class="tabs is-secondary sticky has-bg-grey-100">
  <ul id="navLinks">
    <li><a href="{{ site.baseurl }}/principles/graphs#foundation">Foundation</a></li>
    <li><a href="{{ site.baseurl }}/principles/graphs#legend">Legend</a></li>
    <li><a href="{{ site.baseurl }}/principles/graphs#palettes">Palettes</a></li>
    <li><a href="{{ site.baseurl }}/principles/graphs#visualizations">Visualizations</a></li>
    <!-- <li><a href="{{ site.baseurl }}/principles/graphs#meaning">Specs</a></li> -->
  </ul>
</div>

<!-- foundation -->
<div id="foundation" class="p-t-6">
  <h2>Foundation</h2>
  <p class="m-t-1 m-b-3">Most data visualizations contain three foundational elements - a title, labels, and axes. We recommend styling these foundational elements as follows:</p>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Titles</h4>
      <p class="m-t-1">
        We recommend placing titles above visualizations and coloring them with black (#303030) to ensure that they are clearly visible.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/titles.png" alt="">
      </div>
    </div>
  </div>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Labels</h4>
      <p class="m-t-1">
        We recommend coloring unit labels grey (#9A9A9A) and placing them at the top of the Y axis to avoid interfering with axis values. Always use abbreviated unit labels to avoid cluttering your visualizations with long label names.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/labels.png" alt="">
      </div>
    </div>
  </div>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Axes</h4>
      <p class="m-t-1">
        Most data visualizations rely on both a horizontal X axis and a vertical Y axis. We recommend using grey (#EAEAEA) to color axis lines and black (#303030) to color the values displayed on each axis.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/axes.png" alt="">
      </div>
    </div>
  </div>
</div>

<!-- legend -->
<div id="legend" class="p-t-2">
  <hr class="m-b-3">
  <h2>Legend</h2>
  <p class="m-t-1 m-b-3">Legends are the key to understanding data visualizations. Therefore, it is important to ensure that legends are well organized and clearly placed so that they are easy to decipher.</p>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Legend Items</h4>
      <p class="m-t-1">
        Legend items are comprised of two key components: a color or symbol indicator and the data value the indicator represents. We recommend placing indicators to the left of their corresponding data values and truncating long values names to keep legends uniform and easy to read.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/legend-items.png" alt="">
      </div>
    </div>
  </div>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Table Legend</h4>
      <p class="m-t-1">
        Table legends organize legend items as a table. They are best suited for data visualizations with large amounts of data because they allow the reader to quickly scan up and down to find the information they are looking for.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="recommended flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/table-legend-rec.png" alt="">
      </div>
      <p class="m-t-1 m-b-3">
        <span class="upper bold is-status-info">Recommended </span>Place table legends to the right of your visualization to avoid interfering with any content presented in the visualization.
      </p>
    </div>
  </div>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Inline Legend</h4>
      <p class="m-t-1">
        Inline legends organize legend items as an inline list. They are best suited for data visualizations with small amounts of data, otherwise the list may interfere with unit labels on the left side of the visualization.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="recommended flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/inline-legend-rec.png" alt="">
      </div>
      <p class="m-t-1 m-b-3">
        <span class="upper bold is-status-info">Recommended </span>Place inline legends at the top right of your visualization to avoid interfering with any content presented on the left side of the visualization.
      </p>
    </div>
  </div>

</div>

<!-- Palettes -->
<div id="palettes" class="p-t-2">
  <hr class="m-b-3">
  <h2>Color Palettes</h2>
  <p class="m-t-1 m-b-3">Denali offers two data visualization palettes: the standard visualization palette for small data sets and the extended visualization palette for larger data sets. These palettes were created specifically to ensure minimum contrast ratios between colors in visualizations.</p>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Standard Visualization Palette</h4>
      <p class="m-t-1">
      Our standard visualization palette provides the highest contrast ratio between colors and supports up to 10 data values. If your data set contains more than 10 data values, the extended palette offers additional colors to choose from.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="recommended flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/standard-visualization-palette-rec.png" alt="">
      </div>
      <p class="m-t-1 m-b-3">
        <span class="upper bold is-status-info">Recommended </span>assign colors to represent your data values in the order they are presented within the standard palette to ensure maximum contrast ratios.
      </p>
    </div>
  </div>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Extended visualization palette</h4>
      <p class="m-t-1">
        Our extended data visualization palette contains 90 additional colors that can be utilized to represent larger data sets. We recommend selecting from the starred colors first and refraining from placing colors with the same value near each other as they have low contrast ratios when placed next to each other.
      </p>
    </div>
    <div class="column  flex-2">
      <div class="row">
        <div class="column flex-column">
          <div class="do align-items-center justify-content-center has-bg-grey-300 br-4">
            <img class="example small" src="{{ site.baseurl }}/assets/images/principles-graphs/Extended-visualization-palette-do.png" alt="">
          </div>
          <p class="m-t-1 m-b-3">
            <span class="upper bold is-status-success">Do </span>place stared colors with different values near each other.
          </p>
        </div>
        <div class="column flex-column">
          <div class="dont align-items-center justify-content-center has-bg-grey-300 br-4">
            <img class="example small" src="{{ site.baseurl }}/assets/images/principles-graphs/Extended-visualization-palette-dont.png" alt="">
          </div>
          <p class="m-t-1 m-b-3">
            <span class="upper bold is-status-danger">Don't </span>place stared colors and near non-starred colors with the same values near each other.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Palette usage</h4>
      <p class="m-t-1">
        We recommend only using colors from the standard or extended palettes in your data visualizations as our other color palettes do not provide enough visual contrast.
      </p>
    </div>
    <div class="column  flex-2">
      <div class="row">
        <div class="column flex-column">
          <div class="do align-items-center justify-content-center has-bg-grey-300 br-4">
            <img class="example small" src="{{ site.baseurl }}/assets/images/principles-graphs/palette-usage-do.png" alt="">
          </div>
          <p class="m-t-1 m-b-3">
            <span class="upper bold is-status-success">Do </span>use colors from the standard data visualization palette for data visualizations.
          </p>
        </div>
        <div class="column flex-column">
          <div class="dont align-items-center justify-content-center has-bg-grey-300 br-4">
            <img class="example small" src="{{ site.baseurl }}/assets/images/principles-graphs/palette-usage-dont.png" alt="">
          </div>
          <p class="m-t-1 m-b-3">
            <span class="upper bold is-status-danger">Don't </span>use colors from the brand color palette for data visualizations.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Cultural Color Associations</h4>
      <p class="m-t-1">
      Colors often carry inherent meanings that differ depending on cultural associations. Therefore it is important to research the cultural associations of your product’s user base before assigning meaning with color in your visualizations.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="recommended flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/cultural-color-associations.png" alt="">
      </div>
      <p class="m-t-1 m-b-3">
        <span class="upper bold is-status-info">Example </span>In China, red is associated with positive change and growth. However in western countries, green is associated with positive change and growth.
      </p>
    </div>
  </div>

</div>

<!-- visualizations -->
<div id="visualizations" class="p-t-2">

  <hr class="m-b-3">
  <h2>Line Graph</h2>
  <p class="m-t-1 m-b-3">Line graphs display values in a data series as points connected by line segments. Time intervals are displayed along the X axis and a value scale is displayed along the Y axis.</p>
  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Use Case</h4>
      <p class="m-t-1">
        We recommend using area graphs when you need to represent changes in a data series’ volume overtime. However, it is important to limit the data you display in an area graph because the areas can become difficult to discern if too many are stacked on top of each other.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/line-graphs-use-case.png" alt="">
      </div>
    </div>
  </div>
  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Legend Options</h4>
      <p class="m-t-1">
        We recommend displaying legend items as a table positioned to the right or as an inline list positioned at the top of an area graph to avoid interfering with the content of your area graph.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/line-graphs-legend-options.png" alt="">
      </div>
    </div>
  </div>

  <hr class="m-b-3">
  <h2>Area Graph</h2>
  <p class="m-t-1 m-b-3">Area graphs are similar to line graphs in that they also display values in a data series as points connected by line segments. However in area graphs, the area between line segments and the X axis is filled with color. These color blocks allow you to visually represent the volume of each data set. As with line graphs, time intervals are displayed along the X axis of area graphs and a value scale is displayed along the Y axis.</p>
  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Use Case</h4>
      <p class="m-t-1">
        We recommend using line graphs when you need to represent trends or changes in data overtime.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/area-graphs-use-case.png" alt="">
      </div>
    </div>
  </div>
  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Legend Options</h4>
      <p class="m-t-1">
        We recommend displaying legend items as a table positioned to the right of your line graph or as an inline list positioned at the top of your line graph to avoid interfering with the content of your line graph.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/area-graphs-legend-options.png" alt="">
      </div>
    </div>
  </div>

  <hr class="m-b-3">
  <h2>Bar Graph</h2>
  <p class="m-t-1 m-b-3">Bar graphs are composed of rectangles whose lengths or heights are proportional to the data values they represent. In bar graphs, values related to time or volume are displayed along one axis while category labels are displayed along the other. Bar graphs can be displayed vertically, horizontally, or stacked. We recommend using bar graphs when you want to compare categories of data against each other.</p>

  <h4 class="m-t-4">Vertical Bar Graph</h4>
  <p class="m-t-1 m-b-4">
    Vertical bar graphs display data as vertically positioned rectangular bars. The differences in data values can be perceived by noting the differences in heights between each bar.
  </p>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Use Case</h4>
      <p class="m-t-1">
        We recommend using a vertical bar graph when the width of your data visualization can comfortably display your data categories along the X axis.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/vertical-bar-graph-use-case.png" alt="">
      </div>
    </div>
  </div>


  <h4 class="m-t-4">Horizontal Bar Graph</h4>
  <p class="m-t-1 m-b-4">
    Horizontal bar graphs display data as horizontally positioned rectangular bars. The differences in data values can be perceived by noting the differences in lengths between each bar.
  </p>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Use Case</h4>
      <p class="m-t-1">
        We recommend using a horizontal bar graph when the width of your data visualization cannot comfortably display your data categories along the X axis.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/horizontal-bar-graph-use-case.png" alt="">
      </div>
    </div>
  </div>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Legend Options</h4>
      <p class="m-t-1">
        Bar graphs do not require a legend as the categories listed along the x axis in a vertical bar graph or along the y axis in a horizontal bar graph function as legends.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="dont flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/horizontal-bar-graph-legend-options.png" alt="">
      </div>
      <p class="m-t-1 m-b-3">
        <span class="upper bold is-status-danger">Don't </span>include a legend with vertical bar graph as the information it presents is already available along the x axis.
      </p>
    </div>
  </div>

  <!-- Stacked -->
  <hr class="m-b-3">
  <h2>Stacked Bar Graph</h2>
  <p class="m-t-1 m-b-3">Stacked bar graphs provide both a high level and detailed view of data by displaying subsections within larger categories. The height or width of a stacked bar graph represents the total value of a category as a whole, while individually colored subsections represent contributions to that whole. Values related to time or volume are displayed along one axis while category labels are displayed along the other. Stacked bar graphs can be displayed either vertically or horizontally.</p>
  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Use Case</h4>
      <p class="m-t-1">
        We recommend using stacked bar graphs when you need to compare both individual data categories and their respective composition.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/stacked-bar-graph-use-case.png" alt="">
      </div>
    </div>
  </div>
  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Legend Options</h4>
      <p class="m-t-1">
        We recommend displaying legend items as a table positioned to the right or as an inline list positioned at the top of stacked bar graphs to avoid interfering with the content of your stacked bar graph.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/stacked-bar-graph-legend-options.png" alt="">
      </div>
    </div>
  </div>

  <!-- Circular -->
  <hr class="m-b-3">
  <h2>Circular charts</h2>
  <p class="m-t-1 m-b-3">Circular charts represent data categories as parts or slices of a larger whole. The value of each category is represented as a percentage of the whole.</p>

  <h4 class="m-t-4">Pie Chart</h4>
  <p class="m-t-1 m-b-4">
    Pie charts are the standard circular chart. They display a data category’s contribution to a whole as an individual slice of that whole.
  </p>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Use Case</h4>
      <p class="m-t-1">
        We recommend using pie charts when you need to see a high level comparison of different data categories.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/pie-chart-use-case.png" alt="">
      </div>
    </div>
  </div>

  <h4 class="m-t-4">Donut Chart</h4>
  <p class="m-t-1 m-b-4">
    Donut charts are pie charts whose centers have been removed. This space can be utilized to present additional information pertaining to the visualization such as data totals.
  </p>

  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Use Case</h4>
      <p class="m-t-1">
        We generally recommend using pie charts over donut charts as the differences in contribution sizes are easier to discern in pie charts. However, donut charts are recommended when you need to present a singular value in conjunction with your data category comparison.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/donut-chart-use-case.png" alt="">
      </div>
    </div>
  </div>
  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Legend Options</h4>
      <p class="m-t-1">
        We recommend displaying legend items stacked as a table on pie and donut charts. Legend tables can be placed either to the left or the right.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/circular-chart-legend-options.png" alt="">
      </div>
    </div>
  </div>

  <!-- Big Number -->
  <hr class="m-b-3">
  <h2>Big Number Charts</h2>
  <p class="m-t-1 m-b-3">Big number charts represent single data values as large numbers in a container.</p>
  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Use Case</h4>
      <p class="m-t-1">
        We recommend using big number charts when you need to a display a single data value.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/big-number-chart-use-case.png" alt="">
      </div>
    </div>
  </div>
  <div class="row m-t-1 m-b-6">
    <div class="column flex-column m-b-3">
      <h4>Sparklines and Trend Indicators</h4>
      <p class="m-t-1">
        Sparklines and trend indicators that represent past data values can be added to big numbers to provide additional information.
      </p>
    </div>
    <div class="column flex-column flex-2">
      <div class="flex flex-column align-items-center has-bg-grey-300 br-4">
        <img class="example" src="{{ site.baseurl }}/assets/images/principles-graphs/big-number-chart-sparklines-trend-indicator.png" alt="">
      </div>
    </div>
  </div>


</div>
