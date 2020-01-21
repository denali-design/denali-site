---
title: 'Data Visualization'
permalink: /principles/graphs
excerpt: ''

---

# {{ page.title }}
{{ page.excerpt }}

***

## Foundation
Most data visualizations contain three foundational elements - a title, labels, and axes. We recommend styling these foundational elements as follows:

### Titles
We recommend placing titles above visualizations and coloring them with black (#303030) to ensure that they are clearly visible.

{% include principles-1-col.html
  standard-image='titles.png'
%}

### Labels
We recommend coloring unit labels grey (#9A9A9A) and placing them at the top of the Y axis to avoid interfering with axis values. Always use abbreviated unit labels to avoid cluttering your visualizations with long label names.

{% include principles-1-col.html
  standard-image='labels.png'
%}

### Axes
Most data visualizations rely on both a horizontal X axis and a vertical Y axis. We recommend using grey (#EAEAEA) to color axis lines and black (#303030) to color the values displayed on each axis.

{% include principles-1-col.html
  title=''
  description=''
  standard-image='axes.png'
%}

***

## Legend
Legends are the key to understanding data visualizations. Therefore, it is important to ensure that legends are well organized and clearly placed so that they are easy to decipher.

### Legend Items
Legend items are comprised of two key components: a color or symbol indicator and the data value the indicator represents. We recommend placing indicators to the left of their corresponding data values and truncating long values names to keep legends uniform and easy to read.

{% include principles-1-col.html
  standard-image='legend-items.png'
%}

### Table Legend
Table legends organize legend items as a table. They are best suited for data visualizations with large amounts of data because they allow the reader to quickly scan up and down to find the information they are looking for.

{% include principles-1-col.html
  recommended-image='legend-items.png'
  recommended-description='Place table legends to the right of your visualization to avoid interfering with any content presented in the visualization.'
%}

### Inline Legend
Inline legends organize legend items as an inline list. They are best suited for data visualizations with small amounts of data, otherwise the list may interfere with unit labels on the left side of the visualization.

{% include principles-1-col.html
  recommended-image='inline-legend-rec.png'
  recommended-description='Place inline legends at the top right of your visualization to avoid interfering with any content presented on the left side of the visualization.'
%}

***

## Color Palettes
Denali offers two data visualization palettes: the standard visualization palette for small data sets and the extended visualization palette for larger data sets. These palettes were created specifically to ensure minimum contrast ratios between colors in visualizations.

### Standard Visualization Palette
Our standard visualization palette provides the highest contrast ratio between colors and supports up to 10 data values. If your data set contains more than 10 data values, the extended palette offers additional colors to choose from.

{% include principles-1-col.html
  recommended-image='standard-visualization-palette-rec.png'
  recommended-description='assign colors to represent your data values in the order they are presented within the standard palette to ensure maximum contrast ratios.'
%}

### Extended visualization palette
Our extended data visualization palette contains 90 additional colors that can be utilized to represent larger data sets. We recommend selecting from the starred colors first and refraining from placing colors with the same value near each other as they have low contrast ratios when placed next to each other.

{% include principles-2-col.html
  do-image='Extended-visualization-palette-do.png'
  do-description='place stared colors with different values near each other.'
  dont-image='Extended-visualization-palette-dont.png'
  dont-description='place stared colors and near non-starred colors with the same values near each other.'
%}

### Palette usage
We recommend only using colors from the standard or extended palettes in your data visualizations as our other color palettes do not provide enough visual contrast.

{% include principles-2-col.html
  do-image='palette-usage-do.png'
  do-description='use colors from the standard data visualization palette for data visualizations.'
  dont-image='palette-usage-dont.png'
  dont-description='use colors from the brand color palette for data visualizations.'
%}

### Cultural Color Associations
Colors often carry inherent meanings that differ depending on cultural associations. Therefore it is important to research the cultural associations of your product’s user base before assigning meaning with color in your visualizations.

{% include principles-1-col.html
  recommended-image='cultural-color-associations.png'
  recommended-description='In China, red is associated with positive change and growth. However in western countries, green is associated with positive change and growth'
%}

***

## Line Graph
Line graphs display values in a data series as points connected by line segments. Time intervals are displayed along the X axis and a value scale is displayed along the Y axis.

### Use Case
We recommend using area graphs when you need to represent changes in a data series’ volume overtime. However, it is important to limit the data you display in an area graph because the areas can become difficult to discern if too many are stacked on top of each other.

{% include principles-1-col.html
  standard-image='line-graphs-use-case.png'
%}

### Legend Options
We recommend displaying legend items as a table positioned to the right or as an inline list positioned at the top of an area graph to avoid interfering with the content of your area graph.

{% include principles-1-col.html
  standard-image='line-graphs-legend-options.png'
%}

***

## Area Graph
Area graphs are similar to line graphs in that they also display values in a data series as points connected by line segments. However in area graphs, the area between line segments and the X axis is filled with color. These color blocks allow you to visually represent the volume of each data set. As with line graphs, time intervals are displayed along the X axis of area graphs and a value scale is displayed along the Y axis.

### Use Case
We recommend using line graphs when you need to represent trends or changes in data overtime.

{% include principles-1-col.html
  standard-image='area-graphs-use-case.png'
%}

### Legend Options
We recommend displaying legend items as a table positioned to the right of your line graph or as an inline list positioned at the top of your line graph to avoid interfering with the content of your line graph.

{% include principles-1-col.html
  standard-image='area-graphs-legend-options.png'
%}

***

## Bar Graph
Bar graphs are composed of rectangles whose lengths or heights are proportional to the data values they represent. In bar graphs, values related to time or volume are displayed along one axis while category labels are displayed along the other. Bar graphs can be displayed vertically, horizontally, or stacked. We recommend using bar graphs when you want to compare categories of data against each other.

### Vertical Bar Graph
Vertical bar graphs display data as vertically positioned rectangular bars. The differences in data values can be perceived by noting the differences in heights between each bar.

#### Use Case
We recommend using a vertical bar graph when the width of your data visualization can comfortably display your data categories along the X axis.

{% include principles-1-col.html
  standard-image='vertical-bar-graph-use-case.png'
%}

### Horizontal Bar Graph
Horizontal bar graphs display data as horizontally positioned rectangular bars. The differences in data values can be perceived by noting the differences in lengths between each bar.

#### Use Case
We recommend using a horizontal bar graph when the width of your data visualization cannot comfortably display your data categories along the X axis.

{% include principles-1-col.html
  standard-image='horizontal-bar-graph-use-case.png'
%}

#### Legend Options
Bar graphs do not require a legend as the categories listed along the x axis in a vertical bar graph or along the y axis in a horizontal bar graph function as legends.

{% include principles-1-col.html
  recommended-image='horizontal-bar-graph-legend-options.png'
  recommended-description='to not include a legend with vertical bar graph as the information it presents is already available along the x axis.'
%}

***

## Stacked Bar Graph
Stacked bar graphs provide both a high level and detailed view of data by displaying subsections within larger categories. The height or width of a stacked bar graph represents the total value of a category as a whole, while individually colored subsections represent contributions to that whole. Values related to time or volume are displayed along one axis while category labels are displayed along the other. Stacked bar graphs can be displayed either vertically or horizontally.

#### Use Case
We recommend using stacked bar graphs when you need to compare both individual data categories and their respective composition.

{% include principles-1-col.html
  standard-image='stacked-bar-graph-use-case.png'
%}

#### Legend Options
We recommend displaying legend items as a table positioned to the right or as an inline list positioned at the top of stacked bar graphs to avoid interfering with the content of your stacked bar graph.

{% include principles-1-col.html
  standard-image='stacked-bar-graph-legend-options.png'
%}

***

## Circular Charts
Circular charts represent data categories as parts or slices of a larger whole. The value of each category is represented as a percentage of the whole.

### Pie Chart
Pie charts are the standard circular chart. They display a data category’s contribution to a whole as an individual slice of that whole.

#### Use Case
We recommend using pie charts when you need to see a high level comparison of different data categories.

{% include principles-1-col.html
  standard-image='pie-chart-use-case.png'
%}

### Donut Chart
Donut charts are pie charts whose centers have been removed. This space can be utilized to present additional information pertaining to the visualization such as data totals

#### Use Case
We generally recommend using pie charts over donut charts as the differences in contribution sizes are easier to discern in pie charts. However, donut charts are recommended when you need to present a singular value in conjunction with your data category comparison.

{% include principles-1-col.html
  standard-image='donut-chart-use-case.png'
%}

#### Legend Options
We recommend displaying legend items stacked as a table on pie and donut charts. Legend tables can be placed either to the left or the right.

{% include principles-1-col.html
  standard-image='circular-chart-legend-options.png'
%}

***

## Big Number Charts
Big number charts represent single data values as large numbers in a container.

#### Use Case
We recommend using big number charts when you need to a display a single data value.

{% include principles-1-col.html
  standard-image='big-number-chart-use-case.png'
%}

#### Sparklines and Trend Indicators
Sparklines and trend indicators that represent past data values can be added to big numbers to provide additional information.

{% include principles-1-col.html
  standard-image='big-number-chart-sparklines-trend-indicator.png'
%}
