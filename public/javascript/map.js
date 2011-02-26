function Map(canvas, location, datasource) {
  var mapOptions = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    center: new google.maps.LatLng(location.latitude, location.longitude)
  };

  this.gmap = new google.maps.Map(document.getElementById(canvas), mapOptions);


  var self = this;

  google.maps.event.addListener(this.gmap, 'bounds_changed', function() {
    self._plot(datasource, self._bounds(this.getBounds()));
  });
}

Map.prototype._plot = function(datasource, bounds) {
  var self = this;

  datasource.getPlacesOfInterest(bounds, function(places) {
    places.forEach(function(place) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(place.latitude, place.longitude)
      });

      marker.setMap(self.gmap);
    });
  });
};


Map.prototype._bounds = function(bounds) {
  return {
    northEastLat: bounds.getNorthEast().lat(),
    southWestLat: bounds.getSouthWest().lat(),
    northEastLong: bounds.getNorthEast().lng(),
    southWestLong: bounds.getSouthWest().lng()
  }
};