

let myMap = L.map('map-container').setView([44.4759, -73.2121],15)



L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(myMap);


var blueCat = new L.marker([44.4759871,-73.1966404]).addTo(myMap).bindPopup('bluecat')

fetch('/api')
	.then(response=>response.json())	
	.then((restaurantsObj)=>{
		console.log(restaurantsObj)
		restaurantsObj.forEach((restaurant)=>{
			console.log(restaurant)
			fetch(`/api/${restaurant}`)
			.then(response=>response.json())
			.then((singleRestaurant)=>{
				console.log(singleRestaurant.phone)
				console.log(singleRestaurant.name)
				console.log(singleRestaurant.id)
				console.log(singleRestaurant.address)
			})
		})
	})

	
	   



/// will need another fetch , it is going to be inside the foreach loop.  The reason: each of these restaurants, if lat long is put into
//restaurant.json, I can do a fetch for the restaurant and get back all the JSON information and say create a marker using the lat long
//that is inside of the json obj.	
