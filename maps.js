let map

function initMap(){

map=L.map('map').setView([20.5937,78.9629],5)

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{maxZoom:19}
).addTo(map)

loadPropertyMarkers()

}

function loadPropertyMarkers(){

properties.forEach(property=>{

const marker=L.marker([
property.coords.lat,
property.coords.lng
]).addTo(map)

marker.bindPopup(`
<b>${property.title}</b><br>
${property.location}<br>
₹${property.price}
`)

})

}

document.addEventListener("DOMContentLoaded",initMap)