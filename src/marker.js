const mapbox = require('mapbox-gl');

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const createMarker = (pic, coords) => {
    const markerDomEl = document.createElement('div');
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${iconURLs[pic]})`;
    return new mapbox.Marker(markerDomEl).setLngLat(coords);
}

module.exports = createMarker;