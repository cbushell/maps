function LonelyPlanetDataSource() {

}


LonelyPlanetDataSource.prototype.getPlacesOfInterest = function(north, south, east, west, callback) {
  var self = this;

  $.get(this._url(north, south, east, west), function(data) {
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


LonelyPlanetDataSource.prototype._url = function(north, south, east, west) {
  return "/api/bounding_boxes/" +
          [ north,
            south,
            east,
            west].join(",") +
          "/pois";
};