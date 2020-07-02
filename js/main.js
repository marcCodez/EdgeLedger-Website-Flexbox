// The script is calling this initMap function

// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 	-33.865143, lng: 151.209900 };
    // Centered map on location
    // creating a variable map and setting it to an instance of google maps
    // it targets the class map we created in the html to insert the map
    const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 14,
      center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
  }