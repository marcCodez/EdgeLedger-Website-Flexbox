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

  // Sticky menu background
window.addEventListener('scroll', function() {
    // when  we hit the 150position scrollingdown active opacity
    if (window.scrollY > 150) {
      document.querySelector('#navbar').style.opacity = 0.9;
    } else {
      document.querySelector('#navbar').style.opacity = 1;
    }
  });

  // Smooth Scrolling
  // it will target the links in navbar and btn for read more
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
            // speed of scroll
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });