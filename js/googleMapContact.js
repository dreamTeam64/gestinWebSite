function initMap() {
  var myLatLng = {lat: 43.891008, lng: -0.500929};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
  center: myLatLng,
  scrollwheel: false,
  zoom: 8,
  zoomControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  scaleControl: false,
  draggable:false,
  disableDoubleClickZoom:true
  });

  //just a commit test another one

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
  map: map,
  animation: google.maps.Animation.DROP,
  draggable: false,
  position: myLatLng,
  title: 'Hello World!'
  });
}
