function LonelyPlanetDataSource() {
  this.url = "/api/bounding_boxes";

  this.getPlacesOfInterest = function(north, south, east, west, callback) {
    $.get(this.url + "/" + north + "," + south + "," + east + "," + west + "/pois", function(data) {
      var placesOfInterest = [];

      $(data).find("poi").each(function() {
        var place = {
          id : $(this).find("id").text(),
          name : $(this).find("name").text(),
          category : $(this).find("poi-type").text(),
          latitude : $(this).find("latitude").text(),
          longitude : $(this).find("longitude").text()
        };

        placesOfInterest.push(place);
      });

      callback(placesOfInterest);
    }, "xml");
  };
}