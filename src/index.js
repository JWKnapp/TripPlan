// console.log('hello World');
const mapboxgl = require("mapbox-gl");
const createMarker = require('./marker.js');

mapboxgl.accessToken = "pk.eyJ1IjoicmNoYW80IiwiYSI6ImNqaW00ZHdoOTAwOG0za28ydjB6c2Q5a2wifQ.meGWBAB525S8OEn_XnYsuQ";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

//const markerDomEl = document.createElement('div');
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
//
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

createMarker('hotels',[-74.009151, 40.705086]).addTo(map);