function Map(canvas, location) {
  this._inintializeMap(canvas, location);
}


Map.prototype.plot = function(datasource) {
  var self = this;
  var bounds = this._bounds();

  datasource.getPlacesOfInterest(bounds, function(places) {
    places.forEach(function(place) {
      var point = new GLatLng(place.latitude, place.longitude);
      var marker = new GMarker(point);
      self.gmap.addOverlay(marker);
    });
  });
};


Map.prototype._inintializeMap = function(canvas, location) {
  var zoom = 15;

  this.gmap = new GMap2(document.getElementById(canvas));
  this.gmap.setCenter(new GLatLng(location.latitude, location.longitude), zoom);
  this.gmap.setMapType(G_HYBRID_MAP);
};


Map.prototype._bounds = function() {
  var bounds = this.gmap.getBounds();

  return {northEastLat: bounds.getNorthEast().lat(),
          southWestLat: bounds.getSouthWest().lat(),
          northEastLong: bounds.getNorthEast().lng(),
          southWestLong: bounds.getSouthWest().lng()}
};