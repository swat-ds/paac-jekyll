---
title: Data
permalink: /data/
layout: default
---

<!--add data table-->
<div class="row align-items-center" markdown="1">

## Explore the Data

The following data were taken from the original csv file that
    the 2002 exhibit uses, created by digitizing the 1847 census data
    collected by hand. The data categories shown were cleaned using
    OpenRefine, Python scripts, and Excel tools. Subsets of the data
    were used to create the visualizations housed on this site. Toggle
    the drop-down menu to search by different parameters.

</div>

<!--category drop down to search by-->
<div id="search-container">
<div class="input-group">
<select class="custom-select" id="inputGroupSelect04" aria-label="select filter column">
<option value="ID" selected>ID</option>
<option value="Last Name">Last Name</option>
<option value="First Name">First Name</option>
<option value="Residence Street">Residence Street</option>
<option value="Male Occupation 1">Male Occupation 1</option>
<option value="Female Occupation 1">Female Occupation 1</option>
<option value="Region">Region</option>
</select>
</div>

<!--button to download csv-->
<div id="download">
<a class="btn btn-danger btn-sm download" href="Data/test.csv" download="1847_census.csv" role="button">Download the CSV file</a>
<p>We encourage you to download and explore this dataset further,
normalize the columns even more, and create more visualizations.</p>
</div>
</div>

<div id="table-container">

<div id="chart4"></div>
</div>