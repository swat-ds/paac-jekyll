---
title: Occupations
permalink: /occupations/
id: js
layout: default
---

<div class="row">
    <h2>Exploring Occupations in the Census</h2>
</div>

<div class="row" markdown="1">

What kinds of stories might the 1847 data allow us to tell? Students took the occupation column in order to begin exploring what kinds of occupations were most common among recorded genders in households surveyed as well as how those map onto labor categories.

</div> 

<div id="occupation">

<!--Add viz 1-->
<div class="row">
<h3>Occupation Data Bar Graph</h3>
</div>

<div class="row">
<p>This chart graphs the top 15 most common jobs among males and females
surveyed in the 1847 census. Hover over each bar to see the frequency
count for males and females for each occuption. Click on each gender
in the legend to hide those bars. This provides a broad
overview of the occupation data.
</p>
</div>

<div class="row">
<p class="graph-title">15 Most Common Jobs in Philadelphia's 1847 Census</p>
</div>
<div class="row" id="chart">aria-label= “Interactive bar graph"/div>
<div id="null-jobs"><span>other common "occupations"</span></div> <!--transparent rectangle-->

</div>

<!--Add Viz 2-->
<div id="occupation2">

<div class="row">
<h3>Occupation Data Bar Graph by Category</h3>
</div>

<div class="row">
<p>This chart graphs the most common jobs (15 at most) for males and females, respectively,
in each of 8 job categories. Hover over each bar to see the frequency
count for each occupation. Click on each gender
in the legend to hide those bars. This visualization breaks up the many jobs into more
comprehensible categories for comparison.
</p>
</div>

<div class="row">
<!--job category dropdown-->
<div class="input-group col-3" id="occ">
    <label>
<select class="custom-select form-control" id="inputGroupSelect04" aria-label="select occupation category">
<option value="ag" selected>Agricultural Pursuits</option>
<option value="dp">Domestic & Personal Service</option>
<option value="la">Laborer</option>
<option value="ma">Manufacturing & Mechanical Pursuits</option>
<option value="ps">Professional Service</option>
<option value="tr">Trade & Transportation</option>
<option value="mto">More than One</option>
<option value="niw">Not in Work</option>
</select>
   </label>
</div>
</div>

<div class="row" id="chart3"></div>

</div>

<!--link to top of page-->
<a class="btn btn-danger btn-sm top" href="#" role="button">Back to top</a>
