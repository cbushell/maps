function Map(canvas, initialLocation) {
  this._inintializeMap(canvas, initialLocation);
}

Map.prototype.plot = function(datasource) {
  var self = this;
  var bounds = self.map.getBounds();


  datasource.getPlacesOfInterest(bounds.getNorthEast().lat(), bounds.getSouthWest().lat(), bounds.getNorthEast().lng(), bounds.getSouthWest().lng(), function(places) {
    places.forEach(function(place) {
      var point = new GLatLng(place.latitude, place.longitude);
      var marker = new GMarker(point);
      self.map.addOverlay(marker);
    });
  });
};


Map.prototype._inintializeMap = function(canvas, location) {
  var zoom = 15;

  this.map = new GMap2(document.getElementById(canvas));
  this.map.setCenter(new GLatLng(location.latitude, location.longitude), zoom);
  this.map.setMapType(G_HYBRID_MAP);
};