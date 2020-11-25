---
title: Map
permalink: /map/
id: js
layout: default
---
<div class="row">
        <h2>Regional Map Visualization</h2>
</div>

<!--add map-->
<div class="row" markdown="1">

This map depicts the four regions of Philadelphia surveyed in the 1847 census. Hover over each region to see aggregate statistics for the individuals living in that region. Use the opacity slider to see how the street names from 1847 map onto present-day streets and regions.

</div>

<div class="container viz">
<!--add map overlay layers for legend, etc.-->
<div id='map'></div>
<div class='map-overlay' id='features'><div id='pd'>
        
        <div id='opacity-slider'>
                <label for="slider" aria-describedby="slider">1847 Map (opacity): <span id='slider-value'>0%</span></label>
                <input id='slider' type='range' min='0' max='100' step='0' value='0'>
        </div>
        
        
        <ul class="list-group list-group-flush">Hover over a region</ul></div>

</div>
<div class='map-overlay' id='legend'></div>

<nav id="menu"></nav>
</div>