let map;

function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 47.608013, lng: -122.335167},
        zoom: 11,
    });
    const marker = new google.maps.Marker({
        position: { lat: 47.608013, lng: -122.335167 },
        icon: 'https://360shopping.s3.us-west-2.amazonaws.com/markImg.png',
        map: map,
    });
    const circle = new google.maps.Circle({
        center: { lat: 47.608013, lng: -122.335167 },
        map: map,
        radius: 16093,
        strokeOpacity: 0.8,
        strokeWeight: 0.5,
        fillOpacity: 0.01,
    });

    directionsRenderer.setMap(map);
    directionsService
    .route({
        origin: "47.608013,-122.335167",
        destination: "47.658114,-122.335168",
        waypoints: [{ location: "47.598011,-122.335161", stopover: true }],
        travelMode: google.maps.TravelMode.DRIVING
    })
    .then((response) => {
        console.log(response);
        directionsRenderer.setDirections(response); 

        // const route = response.routes[0];
        // const summaryPanel = document.getElementById("directions-panel");
  
        // summaryPanel.innerHTML = "";
  
        // for (let i = 0; i < route.legs.length; i++) {
        //   const routeSegment = i + 1;
          
        //   summaryPanel.innerHTML += route.legs[i].start_address +" to ";
        //   summaryPanel.innerHTML += route.legs[i].end_address +"<br>";
        //   summaryPanel.innerHTML += route.legs[i].duration.text +"<br>";
        //   summaryPanel.innerHTML += route.legs[i].distance.text +"<br><br>";
        // };
      });
}

