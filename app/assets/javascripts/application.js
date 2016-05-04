// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

var gmap;
var $mapContainer = $('.map');
var $overlay = $('.overlay');

// var latStart = 51.455313;
// var lngStart = -2.591902;

// Handle if we have the geolocation API
if (navigator.geolocation) {
  console.log('geolocation api available');
} else {
  alert('Sorry your browser doesn\'t support the Geolocation API');
}

// do shit when we click
$('.btn-get-location').click(function(e) {
  e.preventDefault();

  navigator.geolocation.getCurrentPosition(getPosition, showLocationError); // get geo data
});

// Handle geolocation error
function showLocationError(error) {
  var errors = { 1: 'Permission denied', 2: 'Position unavailable', 3: 'Request timeout' };
  alert('Error: ' + errors[error.code]);
};

// Get my position
function getPosition(position) {

  // Get the geolocation properties and set them as variables
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  console.log(latitude,longitude);

  $overlay.hide(); // hide overlay

  showMeOnMap(latitude,longitude); // centre map on my location
};

// Show me on map
function showMeOnMap(latitude,longitude) {

  /*
    1: World
    5: Landmass/continent
    10: City
    15: Streets
    20: Buildings
  */

  var mapOptions = {
    zoom: 20,
    center: { lat: latitude, lng: longitude }
  };

  gmap = new google.maps.Map($mapContainer.get(0), mapOptions); // create new map instance

};

// setTimeout(
//   function() {
//     gmap.setCenter({lat: -34.397, lng: 150.644}); // recenter
//   },
// 5000);
