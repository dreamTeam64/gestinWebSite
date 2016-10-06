$(function () {
  // Dunno how dis ting works lul
  function initMap(){
    var location = new google.maps.LatLng(50,50);
    var mapCanvas = document.getElementbyId('map')
    var mapOptions = {
      center: location,
      zoom: 16,
      panControl: false,
      mapTypeId: google.maps.mapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas,mapOptions);
  }
  google.maps.event.addDomListener(window,'load',initMap());
});
