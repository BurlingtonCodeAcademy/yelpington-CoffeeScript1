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

// ------- declaring variables for the restaurant names
let restName = window.location.hash;
let restWithoutHash = restName.split("#")[1];
let restInfo = document.getElementById("restaurant-info");
let restAddress = document.getElementById("restaurant-address");
let restPhone = document.getElementById("restaurant-phone");
let restHours = document.getElementById("restaurant-hours");
let restNotes = document.getElementById("restaurant-notes");
// ---- restJsonData is a variable that will be rendered in the restaurant-info element
// with this DOM query targetting the element.

// ---- this is just a test for me to view a variable in the console.
console.log(restWithoutHash);

//----- fetching the restaurant object without the #
fetch(`/api/${restWithoutHash}`)
  .then((response) => response.json())
  .then((restaurantsObj) => {
    //-----creating elements to append the data/key value pairs in the JSON objects
    let title = document.createElement("h1");
    title.textContent = restaurantsObj.name;
    restInfo.appendChild(title);

    let address = document.createElement("p");
    address.textContent = restaurantsObj.address;
    restAddress.appendChild(address);

    let phone = document.createElement("p");
    phone.textContent = restaurantsObj.phone;
    restPhone.appendChild(phone);

    let hours = document.createElement("p");
    hours.textContent = restaurantsObj.hours;
	restHours.appendChild(hours);

	
	 //------ putting pin for individual restaurant pages on map
	 L.marker([restaurantsObj.lat, restaurantsObj.long])
	 .addTo(myMap)
	 .bindPopup(restaurantsObj.name);

    // ------ iterating through notes array to append to parragraph tag
    restaurantsObj.notes.forEach((note) => {
      let parragraph = document.createElement("p");
      parragraph.textContent = note;
      restNotes.appendChild(notes);
    });

   

    console.log(restaurantsObj);
  });
