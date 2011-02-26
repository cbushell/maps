function LonelyPlanetDataSource() {

}


LonelyPlanetDataSource.prototype.getPlacesOfInterest = function(bounds, callback) {
  var self = this;

  $.get(this._url(bounds), function(data) {
    var places = [];

    $(data).find("poi").each(function() {
      var place = self._parsePlaceOfInterest($(this));
      places.push(place);
    });

    callback(places);
  }, "xml");
};


LonelyPlanetDataSource.prototype._parsePlaceOfInterest = function(xml) {
  return {
    id : xml.find("id").text(),
    name : xml.find("name").text(),
    category : xml.find("poi-type").text(),
    latitude : xml.find("latitude").text(),
    longitude : xml.find("longitude").text()
  };
};


LonelyPlanetDataSource.prototype._url = function(bounds) {
  return "/api/bounding_boxes/" +
          [ bounds.northEastLat,
            bounds.southWestLat,
            bounds.northEastLong,
            bounds.southWestLong].join(",") +
          "/pois";
};