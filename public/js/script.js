let map;

function initMap(destination) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 47.677888, lng: -122.199055},
        zoom: 11,
    });
    const marker = new google.maps.Marker({
        position: { lat: 47.677888, lng: -122.199055 },
        // icon: 'https://360shopping.s3.us-west-2.amazonaws.com/markImg.png',
        map: map,
    });
    const circle = new google.maps.Circle({
        center: { lat: 47.677888, lng: -122.199055 },
        map: map,
        radius: 16093,
        strokeOpacity: 0.8,
        strokeWeight: 0.5,
        fillOpacity: 0.01,
    });

    directionsRenderer.setMap(map);

    if(destination != null){
        if(destination.waypoint == 'true'){
            console.log(destination);
            directionsService
            .route({
                origin: "47.677888,-122.199055",
                destination: `${destination.lat2}, ${destination.lon2}`,
                waypoints: [{ location: `${destination.lat1}, ${destination.lon1}`, stopover: true }],
                travelMode: google.maps.TravelMode.DRIVING
            })
            .then((response) => {
                console.log(response);
                directionsRenderer.setDirections(response); 
        
                const route = response.routes[0];
                const summaryPanel = document.getElementById("directions-panel");
          
                summaryPanel.innerHTML = "";
          
                for (let i = 0; i < route.legs.length; i++) {
                  summaryPanel.innerHTML += `
                  <div class="route-box">
                  <span class="address">${route.legs[i].start_address}<span class="to">to</span>${route.legs[i].end_address}</span>
                  <span>Duration: ${route.legs[i].duration.text}</span>
                  <span>Distance: ${route.legs[i].distance.text}</span>
                  </div>`
                };
              });
        }else{
            directionsService
            .route({
                origin: "47.677888,-122.199055",
                destination: `${destination.lat}, ${destination.lon}`,
                travelMode: google.maps.TravelMode.DRIVING
            })
            .then((response) => {
                directionsRenderer.setDirections(response); 
        
                const route = response.routes[0];
                const summaryPanel = document.getElementById("directions-panel");
          
                summaryPanel.innerHTML = "";
          
                for (let i = 0; i < route.legs.length; i++) {
                  summaryPanel.innerHTML += `
                  <div class="route-box">
                  <span class="address">${route.legs[i].start_address}<span class="to">to</span>${route.legs[i].end_address}</span>
                  <span>Duration: ${route.legs[i].duration.text}</span>
                  <span>Distance: ${route.legs[i].distance.text}</span>
                  </div>`
                };
              });
        }
    }
}

