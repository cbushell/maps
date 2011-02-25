function Map(zoomLevel, mapCanvasId, initialLocation) {
  var map = new GMap2(document.getElementById(mapCanvasId));
  map.setCenter(new GLatLng(initialLocation.latitude, initialLocation.longitude), zoomLevel);
  map.setMapType(G_HYBRID_MAP);
}