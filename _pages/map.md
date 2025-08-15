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

This map depicts the four regions of Philadelphia surveyed in the 1847 census. Hover over each region to see aggregate statistics for the individuals living in that region. Use the opacity slider to see how the street names from <a target="_blank" href="https://davidrumsey.oldmapsonline.org/maps/e80a03ee-f14b-5d79-a873-7af6c2610149/">an 1847 map</a> onto present-day streets and regions.

</div>

<div class="viz">
<!--add map overlay layers for legend, etc.-->
<div id='map' tabindex="0"></div>

<div class='col-3 p-2 float-right map-overlay' id='features'>
        
        <ul class="list-group list-group-flush"><label class="p-2 m-0">Hover over a region for more information.</label></ul>

        <div class="input-group mx-2 p-2 col-11" id='opacity-slider'>
                <label for="slider" id="slider-desc">1847 Historic Map Overlay</label>
                <div>
                <input id='slider' class="form-control" type='range' min='0' max='100' step='10' value='0' aria-describedby="slider-desc">
                </div>
                <span>Select opacity (<span id='slider-value'>0%</span>)</span>
        </div>
        

</div>
<div class="col-3 float-left m-3 map-overlay" id='legend'>
<span>Census Region</span>
</div>

<nav id="menu"></nav>
</div>
