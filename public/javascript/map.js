function Map(zoomLevel, mapCanvasId, initialLocation) {
  var map = new GMap2(document.getElementById(mapCanvasId));
  map.setCenter(new GLatLng(initialLocation.latitude, initialLocation.longitude), zoomLevel);
  map.setMapType(G_HYBRID_MAP);


  this.plotPlacesOfInterest = function(dataSource) {
    var bounds = map.getBounds();

    dataSource.getPlacesOfInterest(bounds.getNorthEast().lat(), bounds.getSouthWest().lat(), bounds.getNorthEast().lng(), bounds.getSouthWest().lng(), function(places) {
      places.forEach(function(place) {
        var point = new GLatLng(place.latitude, place.longitude);
        var marker = new GMarker(point);
        map.addOverlay(marker);
      });
    });
  };
}