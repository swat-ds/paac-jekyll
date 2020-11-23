---
title: Occupations
permalink: /occupations/
id: js
layout: default
---

<div class="row">
    <h3>Exploring Occupations in the Census</h3>
</div>

<div class="row" markdown="1">

What kinds of stories might the 1847 data allow us to tell? Students took the occupation column in order to begin exploring what kinds of occupations were most common among recorded genders in households surveyed as well as how those map onto labor categories.

</div> 

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