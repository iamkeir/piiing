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
var $form = $('#new_ping');

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

  console.log('seeking location...');
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

  console.log('your location:', latitude, longitude);

  // populate form with location data
  $('#ping_lat').val(latitude);
  $('#ping_lng').val(longitude);

  // submit form
  $('#new_ping').submit();

  // centre map on my location
  showMeOnMap(latitude,longitude);

  // handle ajax
  $form.on('ajax:success', function() {
    $overlay.hide();

    console.log('ready to sniff out other pingers...');
    // go do ajax to get users...

    // FAUX AJAX DATA
    var pingersJSON = [
      {
        'username': 'Clifton',
        'lat': '51.4628192',
        'lng': '-2.6388274'
      },
    ];

    // show tha pingers!
    showOtherPingers(pingersJSON);

  });
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

  // map options
  var mapOptions = {
    zoom: 10,
    center: { lat: latitude, lng: longitude }
  };

  // create new map instance
  gmap = new google.maps.Map($mapContainer.get(0), mapOptions);

  // Add me as a marker!
  var marker = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: gmap
  });

  console.log('shown you on map!');
};

// Get other pinger data
function showOtherPingers(pingersJSON) {
  console.log('showing other pingers...');

  // ['Clifton', 51.4628192, -2.6388274, 5],
  // ['Coogee Beach', -33.923036, 151.259052, 4],
  // // ['Cronulla Beach', -34.028249, 151.157507, 3],
  // // ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  // ['Maroubra Beach', -33.950198, 151.259302, 1]

  // loop through pingers
  $.each(pingersJSON, function (i, v) {

    console.log(v);

  });

};

//



