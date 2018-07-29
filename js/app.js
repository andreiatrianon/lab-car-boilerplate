function myMap() {
  var mapProp = {
      center:new google.maps.LatLng(-3.677377, -64.744112),
      zoom: 3
  };
  var map = new google.maps.Map(document.getElementById("google-map"),mapProp);
}