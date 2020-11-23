---
title: Visualizations
permalink: /viz/
id: js
layout: default
---

<!--Add viz 1-->
<div id="occupation" class="container">
<div class="row align-items-center viz">
<h2>Occupation Data Bar Graph</h2>
<p>This chart graphs the top 15 most common jobs among males and females
surveyed in the 1847 census. Hover over each bar to see the frequency
count for males and females for each occuption. Click on each gender
in the legend to hide those bars. This provides a broad
overview of the occupation data.
</p>
</div>
<div class="container">
<span class="graph-title">15 Most Common Jobs in Philadelphia's 1847 Census</span>
<div id="chart"></div>
<div id="null-jobs"><span>other common "occupations"</span></div> <!--transparent rectangle-->
</div>
</div>
<!--Link to top of page-->
<a class="btn btn-danger btn-sm top" href="viz.html" role="button" id="b1">Back to top</a>

<!--------------------------------------------------------------------->
<!--viz 2-->
<div id="occupation2" class="container">
<div class="row align-items-center viz">
<h2>Occupation Data Bar Graph by Category</h2>
<p>This chart graphs the most common jobs (15 at most) for males and females, respectively,
in each of 8 job categories. Hover over each bar to see the frequency
count for each occupation. Click on each gender
in the legend to hide those bars. This visualization breaks up the many jobs into more
comprehensible categories for comparison.
</p>
</div>
<div class="container">
<div id="title"></div>
<div id="chart3"></div>
<div class="row align-items-center">

<!--job category dropdown-->
<div class="input-group" id="occ">
<select class="custom-select" id="inputGroupSelect04" aria-label="select occupation category">
<option value="ag" selected>Agricultural Pursuits</option>
<option value="dp">Domestic & Personal Service</option>
<option value="la">Laborer</option>
<option value="ma">Manufacturing & Mechanical Pursuits</option>
<option value="ps">Professional Service</option>
<option value="tr">Trade & Transportation</option>
<option value="mto">More than One</option>
<option value="niw">Not in Work</option>
</select>
</div>
</div>
</div>
</div>
<!--link to top of page-->
<a class="btn btn-danger btn-sm top" href="viz.html" role="button">Back to top</a>

<!--------------------------------------------------------------------->
<!--Katie's viz, tabulated data for future implementation-->

<!-- <div id="population" class="container">
<div class="row align-items-center viz"> -->
<!-- <div class="col-md-6 order-md-1 text-center text-md-left pr-md-5"> -->
<!-- <h2>Tabular Data</h2>
<p>Explore the visualizations in tabular form here!
</p> -->
<!-- </div> -->
<!-- </div> -->
<!-- <div class="col-6 mx-auto col-md-6 order-md-2"> -->
<!-- <div class="container">
<span class="graph-title">Visualization 1: 15 Most Common Jobs in Philadelphia's 1847 Census</span>
<div id="chart5"></div>
</div> -->
<!-- </div> -->
<!-- </div>
<a class="btn btn-danger btn-sm top" href="viz.html" role="button">Back to top</a> -->

<!-- <div id="population" class="container">
<div class="row align-items-center viz">
<h2>Age Distribution Data by Region</h2>
<p> This graph depicts the age distribution of the African-American
population by region.
</p>
</div>
<div class="container">
<div class="col-md-6 order-md-1 text-center text-md-left pr-md-5 viz">

</div>
<div id="legend-age-population"></div>
<div id="age-population"></div>
</div>
</div> -->
<!-- <div id="literacy" class="container">
<div class="col-md-6 order-md-1 text-center text-md-left pr-md-5">
<h2>Another Cool Viz</h2>
<p>More to come...</p>
</div>
</div> -->