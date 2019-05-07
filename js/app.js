"strict";

var results = $("#results");

function showResults(callback) {
    results.html(callback);
    var paginator = $(".pagination", results);
    $("li", paginator).addClass("page-item");
    $("a", paginator).addClass("page-link").on("click", function (e) {
        e.preventDefault();
        $.post("/api.php", {
            url: $(this).attr("href")
        }, showResults);
    });
}

function initMap() {
    navigator.geolocation.getCurrentPosition(function (position) {
        var location, map, marker, home, geocoder;
        location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        };
        map = new google.maps.Map(document.getElementById("map"), {
            center: location,
            zoom: 17
        });
        marker = new google.maps.Marker({
            map: map,
            icon: {
                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
            }
        });
        home = new google.maps.Marker({
            position: location,
            map: map,
            icon: {
                url: "https://maps.google.com/mapfiles/ms/icons/blue.png"
            }
        });
        geocoder = new google.maps.Geocoder();

        google.maps.event.addListener(map, "click", function (event) {
            // Clear Results
            results.html("loading...");
            marker.setPosition(event.latLng);
            geocoder.geocode({
                "latLng": event.latLng
            }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        var date, month, day, year, street_address, start_date, end_date;

                        // Geocoded Street Address
                        street_address = results[0].address_components[0].long_name + " " + results[0].address_components[1].short_name;

                        date = new Date();

                        // Month with leading zero
                        month = date.getMonth();
                        month = (month + 1);
                        month = month < 10 ? "0" + month : month;

                        // Day with leading zero
                        day = date.getDate();
                        day = day < 10 ? "0" + day : day;

                        // Year
                        year = date.getFullYear();

                        // Formatted Start Date
                        start_date = month + "/" + day + "/" + (year - 1);

                        // Formatted End Date
                        end_date = month + "/" + day + "/" + year;
                        $.post("/api.php", {
                            Address: street_address,
                            StartSearchDate: start_date,
                            EndSearchDate: end_date
                        }, showResults);
                    }
                }
            });
        });
    });
}