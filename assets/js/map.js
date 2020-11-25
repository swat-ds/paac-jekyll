//Helen Huh 2019 
// refactored 2020-11-25 @bulbil

mapboxgl.accessToken = 'pk.eyJ1IjoiMTg0N2NlbnN1cyIsImEiOiJjanllcnY1MmYwM3doM2JudnZkdDl4eWs1In0.F_3cfs4al_haneDBGnscIw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/1847census/cjyahhgxs0a7t1cnph92hmkgv'
});

//gives map default pointer cursor
map.getCanvas().style.cursor = 'default';

//ensures map shows Philadelphia when it's loaded by setting the bounds of the map on load
map.fitBounds([[-75.228132, 39.915362], [-75.075565, 39.975790]]);
var slider = document.getElementById('slider');
var sliderValue = document.getElementById('slider-value');
map.on('load', function () {
    //create legend
    var layers = ['City', 'Northern Liberties', 'Spring Garden and West Philadelphia', 'Southwark and Moyamensing'];
    var colors = ['#aad9e9', '#ffffbf', '#d7191c', '#2c79b5'];
    for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;
        var value = document.createElement('span');
        value.innerHTML = layer;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }
    //add 1847 Map layer using TileJSON link
    map.addLayer({
        "id": "1847 Map",
        "source": {
            "type": "raster",
            "url": "https://maps.georeferencer.com/georeferences/237857156156/2017-02-20T14:25:19.132722Z/map.json?key=YAuFmpBUothIHUoOrApf"
        },
        "type": "raster",
        "layout": {
            'visibility': 'none' //ensures the 1847 map does not initial show
        }
    });
    slider.addEventListener('input', function (e) {
        // Adjust the layers opacity. layer here is arbitrary - this could
        // be another layer name found in your style or a custom layer
        // added on the fly using `addSource`.
        map.setLayoutProperty('1847 Map', 'visibility', 'visible') //enables user to see the 1847 map
        map.setPaintProperty('1847 Map', 'raster-opacity', parseInt(e.target.value, 10) / 100);
        // Value indicator
        sliderValue.textContent = e.target.value + '%';
    });
});
//add listener for mousemove event, identify which region is at location of cursor, and update information window
map.on('mousemove', function (e) {

    const labels = ["people surveyed", "male intemperate", "female intemperate", "can read", "can write", "born slaves", "attend religious meetings", "not attend religious meetings", "belong to temperance societies"];

    let region = map.queryRenderedFeatures(e.point, {
        layers: ['1847census_city-ax73r3', "1847census_springgarden-7nvrq9", "1847census_southwark-6rjwko", "1847census_northernliberties-3qpqea"]
    });
    if (region.length > 0) {

        let regionList = labels.map(d => ('<li class="list-group-item"><span>' + region[0].properties[d] + '</span>' + d + '</li>'));
        
        regionList.unshift( '<li class="list-group-item">' + region[0].properties.name + '</li>' );

        document.querySelector('#features ul').innerHTML = regionList.join(' ');

    } else {
        // document.getElementById('pd').innerHTML = '<p>Hover over a region!</p>';
    }
});
