function LonelyPlanetDetailsDataSource() {
  this.url = "/api/pois";

  this.getDetails = function(id, callback) {
    $.get(this.url, { poi_id: id },
            function(data) {
              var name = $(data).find("name").text();
              var address = $(data).find("address").text();
              var review = $(data).find("review").text();

              callback({name : name, address : address, review : review});
            }, "xml");
  };
}


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