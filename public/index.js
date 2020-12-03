//  ---- Leaflet maps functionality. 
let myMap = L.map("map-container").setView([44.4759, -73.2121], 15);

L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
).addTo(myMap);


//  ----- declaring the variable Navbar and querying the HMTL element with the id "restaurant-links"

let navBar = document.getElementById("restaurant-links");

fetch("/api")
  .then((response) => response.json())
  .then((restaurantsObj) => {
    restaurantsObj.forEach((restaurant) => {
      let anchor = document.createElement("a");
      anchor.href = "restaurant.html#" + restaurant;
      anchor.textContent = restaurant;
      navBar.appendChild(anchor);
      fetch(`/api/${restaurant}`)
        .then((response) => response.json())
        .then((singleRestaurant) => {
          L.marker([singleRestaurant.lat, singleRestaurant.long]).addTo(myMap).bindPopup(anchor)
        });
    });
  });






