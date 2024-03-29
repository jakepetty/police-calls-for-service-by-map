"strict";
let codes = {
    ABDUCTIO: "ABDUCTION",
    ABUSEABA: "ABUSE ABANDONMENT NEGLECT",
    ACCPRT: "ACCIDENT (REPORT ONLY)",
    ACCPD: "ACCIDENT PD",
    ACCPI: "ACCIDENT PI",
    ASSTOTHE: "ASSISTANCE OTHER",
    ACCUNK: "ACCIDENT UNKNOWN INJURY",
    ADMINIST: "ADMIN DOCUMENT LOST OR FOUND MSG TRANSPORT",
    ALERT1: "AIRPORT ALERT 1",
    ALERT2: "AIRPORT ALERT 2 AIRCRAFT IN TROUBLE",
    ALERT3: "AIRPORT ALERT 3 AIRCRAFT ACCIDENT",
    ALARMAUD: "ALARM (AUDIBLE) - POLICE",
    ALARM: "ALARM COMPANY - POLICE",
    ANIMAL: "ANIMAL PROBLEM",
    ASSLTIP: "ASSAULT IN PROGRESS",
    "ASSAULT REPORT": "ASSAULT REPORT",
    ASSLTSEX: "ASSAULT SEXUAL",
    ASSLTIJ: "ASSAULT WITH INJURY (NOT IN PROGRESS)",
    ASSOC: "ASSOCIATED EVENT",
    ATL: "ATTEMPT TO LOCATE",
    BOMBEXP: "BOMB EXPLOSION",
    BOMBFND: "BOMB FOUND",
    BOMBTHRT: "BOMB THREAT",
    BURGLARY: "BURGLARY HOME INVASION",
    BURGIP: "BURGLARY IN PROGRESS",
    BURG: "BURGLARY REPORT",
    CARJACK: "CAR JACKING",
    CHILDCAR: "CHILD LOCKED IN CAR",
    CODE1: "CODE1",
    CONTSUBS: "CONTROLLED SUBSTANCE",
    CRCOPPS: "CR COPS PROJECT",
    CRIMISIP: "CRIMINAL MISCHIEF IN PROGRESS",
    CRIMIS: "CRIMINAL MISCHIEF REPORT",
    DAMAGEVA: "DAMAGE VANDALISM MISCHIEF",
    DECEASED: "DECEASED PERSON",
    DELMESSG: "DELIVER MESSAGE",
    DIST: "DISTURBANCE",
    DISTDOME: "DISTURBANCE - DOMESTIC",
    DISTNOIS: "DISTURBANCE - NOISE",
    DISTURBN: "DISTURBANCE NUISANCE",
    DISTWEAP: "DISTURBANCE W/WEAPON",
    DOMESTIC: "DOMESTIC DISTURBANCE VIOLENCE",
    DRILL: "DRILL",
    DUI: "DRIVING UNDER THE INFLUENCE (IMPAIRED DRIVING)",
    DUMP: "ILLEGAL DUMPING",
    ENFORC: "SELECTIVE ENFORCEMENT PROJECT",
    EXPLOS: "EXPLOSION EMERGENCY",
    FALARM: "AUTOMATIC FIRE ALARM",
    FBRUSH: "GRASS, BRUSH, or OR TIMBER FIRE",
    FCOALARM: "CARBON MONOXIDE ALARM",
    FCONFINE: "CONFINED SPACE RESCUE",
    FEXTRIC: "EXTRICATION",
    "FHAZM-0": "HAZ-MAT STILL",
    "FHAZM-1": "HAZ-MAT FIRST ALARM",
    FHAZMAT: "HAZ-MAT",
    FIGHT: "FIGHT",
    FIGHTWEA: "FIGHT W/WEAPON",
    FNDPERS: "FOUND PERSON",
    FNDPROP: "FOUND PROPERTY",
    FNONSTR: "NON-STRUCTURE FIRE",
    FRAUDDEC: "FRAUD DECEPTION",
    FSTRUCT: "STRUCTURE FIRE",
    GUNSHOTS: "GUNSHOTS REPORTED",
    HARASSME: "HARASSMENT STALKING THREAT",
    HELI: "HELICOPTER, EMERGENCY - CRPD",
    HELINON: "HELICOPTER, NON EMERGENCY - CRPD",
    HITRUN: "HIT & RUN",
    HITRUNIJ: "HIT & RUN WITH INJURY",
    HOMICID: "HOMICIDE",
    HOSTAGE: "HOSTAGE",
    INDECENC: "INDECENCY LEWDNESS",
    INDEXP: "INDECENT EXPOSURE",
    INTOXDRV: "INTOXICATED DRIVER",
    INTOXPER: "INTOXICATED PERSON",
    JUVENILE: "JUVENILE TROUBLE",
    KIDNAPIP: "KIDNAPPING IN PROGRESS",
    KIDNAP: "KIDNAPPING REPORT",
    MEDI: "MEDICAL",
    MEETOFF: "MEET OFFICER",
    MISCELLA: "MISCELLANEOUS",
    MISSPERS: "MISSING 12/UNDER/CHALLENGED",
    MISSINGF: "MISSING RUNAWAY FOUND PERSON",
    NCORDER: "NO CONTACT ORDER VIOLATION",
    ODORSTRN: "ODORSTRNGUNK",
    OPENBLDG: "OPEN BUILDING",
    OTHER: "OTHER",
    OUTSIDEF: "OUTSIDE FIRE",
    PICKUP: "PICKUP ITEM/PROPERTY",
    PRSNDWN: "PERSON DOWN",
    PROWLER: "PROWLER",
    PUBLICSE: "PUBLIC SERVICE",
    PURSUITF: "FOOT PURSUIT",
    PURSUITV: "VEHICLE PURSUIT",
    RECKLESS: "RECKLESS DRIVER",
    RECOVERY: "RECOVERY STOLEN VEHICLE",
    ROBBERYC: "ROBBERY CARJACKING",
    ROBERYIP: "ROBBERY IN PROGRESS",
    ROBBERY: "ROBBERY REPORT",
    RUNAWAY: "RUNAWAY",
    S1: "VIOLATOR",
    S10: "ASSIGNMENT",
    S11: "STORAGE",
    S12: "PROZONE",
    S13: "WARRANT",
    S14: "CITATION",
    S15: "PAROLE",
    S18: "BAR CHECK",
    S2: "INVESTIGATION",
    S21: "MOTEL CHECK",
    S23: "CMVI",
    S24: "FOOT PATROL",
    S26: "SCHOOL CHECK",
    S27: "BUSINESS CHECK",
    S31: "FOCUSED PATROL",
    S32: "COMMUNITY OUTREACH",
    S33: "PARK CHECK",
    S34: "SPECIAL DUTY",
    S35: "EXTRA PATROL REQUEST",
    S36: "MAKE YOUR OWN CASE",
    SEESUBJ: "SEE SUBJECT",
    SHOOTING: "SHOOTING",
    SRT: "SRT CALL",
    SP: "SUBJECT PURSUIT",
    SS: "SUBJECT STOP",
    STABBING: "STABBING",
    STALLVEH: "STALLED VEHICLE",
    SUBJWEAP: "SUBJECT WITH A WEAPON",
    SUPPLEME: "SUPPLEMENTAL",
    SUSPPKGB: "SUSPICIOUS PACKAGE/BOMB THREAT",
    SUSPPERS: "SUSPICIOUS PERSON",
    SUSPVEH: "SUSPICIOUS VEHICLE",
    SUSPICIO: "SUSPICIOUS WANTED PERSON CIRCUMSTANCES VEHICLE",
    THEFT: "THEFT",
    THEFTFRV: "THEFT FROM VEHICLE",
    THEFTIC: "THEFT IN CUSTODY",
    THEFTIP: "THEFT IN PROGRESS",
    THEFTVEH: "THEFT OF VEHICLE",
    TRAFFTOW: "TOW VEHICLE",
    TRAFFIC: "TRAFFIC",
    TRAFFHAZ: "TRAFFIC HAZARD",
    TS: "TRAFFIC STOP",
    TRAFFICA: "TRAFFIC TRANSPORTATION ACCIDENT (CRASH)",
    TRAFFICV: "TRAFFIC VIOLATION",
    TRAINCOL: "TRAIN AND RAIL COLLISION / DERAILMENT",
    TRAINAND: "TRAIN AND RAIL FIRE",
    TRANSPRT: "TRANSPORT",
    TRESPASS: "TRESPASSING UNWANTED",
    TRBLUNK: "TROUBLE UNKNOWN",
    UNKNOWN: "UNKNOWN 3RD PARTY",
    VEHICLEF: "VEHICLE FIRE",
    WATERRES: "WATER RESCUE",
    WATERCRA: "WATERCRAFT IN DISTRESS",
    WEAPONSF: "WEAPONS FIREARMS",
    WELFCHK: "WELFARE CHECK"
};
let badList = ["WEAPONSF", "DRUGS", "BURGLARY", "DAMAGEVA", "SHOOTING", "STABBING", "HOMICID", "FIGHTWEA", "DOMESTIC", "DISTWEAP", "DISTNOIS", "DISTDOME", "DIST", "THEFT", "DISTURBN", "ASSLTSEX", "ASSAULT REPORT"];
class MapClass {
    constructor() {
        this.setupServiceWorker();
        this.loader = document.getElementById("loader");

        // Define results element
        this.results = document.getElementById("results");

        // Setup Browser Location API
        navigator.geolocation.getCurrentPosition(this.setupMap.bind(this), this.setupMap.bind(this));

        // Capture form submit event
        document.getElementById("search-form").addEventListener("submit", (e) => {
            e.preventDefault();
            this.geocoder.geocode(
                {
                    address: document.getElementById("search-address").value + " Cedar Rapids, IA" // Limit address lookup to Cedar Rapids
                },
                (results, status) => {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            // Set map location
                            let latLng = results[0].geometry.location;
                            this.map.setCenter(latLng);

                            // Zoom in to location
                            this.map.setZoom(18);

                            // Get results from API
                            let street_address = results[0].address_components[0].long_name + " " + results[0].address_components[1].short_name;
                            this.getResults(street_address, latLng);
                        }
                    }
                }
            );
        });
    }
    setupServiceWorker() {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/service-worker.js");
        }
    }
    getScript(src, callback) {
        let el = document.createElement("script");
        el.onload = callback;
        el.src = src;
        document.body.appendChild(el);
    }

    setupMap(position) {
        this.getScript("https://maps.googleapis.com/maps/api/js?v=3.37&key=AIzaSyByLobYLYqhklGiVYWVuRPbdzhYYkPYO9w", () => {
            // Map Options
            let options = {
                center: {},
                zoom: 17,
                backgroundColor: "none",
                styles: [
                    {
                        featureType: "all",
                        elementType: "all",
                        stylers: [
                            {
                                visibility: "off"
                            }
                        ]
                    },
                    {
                        featureType: "administrative.country",
                        elementType: "geometry.stroke",
                        stylers: [
                            {
                                visibility: "on"
                            },
                            {
                                color: "#363b4a"
                            },
                            {
                                lightness: "-30"
                            }
                        ]
                    },
                    {
                        featureType: "administrative.country",
                        elementType: "labels",
                        stylers: [
                            {
                                visibility: "simplified"
                            },
                            {
                                color: "#50b87f"
                            },
                            {
                                lightness: "15"
                            }
                        ]
                    },
                    {
                        featureType: "administrative.province",
                        elementType: "geometry.stroke",
                        stylers: [
                            {
                                visibility: "on"
                            },
                            {
                                color: "#363b4a"
                            },
                            {
                                lightness: "-30"
                            }
                        ]
                    },
                    {
                        featureType: "administrative.locality",
                        elementType: "labels",
                        stylers: [
                            {
                                visibility: "simplified"
                            },
                            {
                                color: "#363b4a"
                            },
                            {
                                lightness: "30"
                            }
                        ]
                    },
                    {
                        featureType: "landscape",
                        elementType: "all",
                        stylers: [
                            {
                                color: "#363b4a"
                            },
                            {
                                visibility: "simplified"
                            },
                            {
                                lightness: "-40"
                            }
                        ]
                    },
                    {
                        featureType: "landscape.man_made",
                        elementType: "geometry.stroke",
                        stylers: [
                            {
                                visibility: "on"
                            },
                            {
                                color: "#363b4a"
                            },
                            {
                                lightness: "10"
                            }
                        ]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [
                            {
                                visibility: "on"
                            },
                            {
                                color: "#0069ff"
                            }
                        ]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [
                            {
                                visibility: "on"
                            },
                            {
                                color: "#0069ff"
                            },
                            {
                                lightness: "0"
                            }
                        ]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "labels",
                        stylers: [
                            {
                                visibility: "on"
                            }
                        ]
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [
                            {
                                visibility: "on"
                            },
                            {
                                color: "#0097ff"
                            },
                            {
                                lightness: "-61"
                            }
                        ]
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "labels",
                        stylers: [
                            {
                                visibility: "on"
                            }
                        ]
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                visibility: "on"
                            },
                            {
                                color: "#ffffff"
                            }
                        ]
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "labels.text.stroke",
                        stylers: [
                            {
                                visibility: "off"
                            }
                        ]
                    },
                    {
                        featureType: "road.local",
                        elementType: "geometry.fill",
                        stylers: [
                            {
                                visibility: "on"
                            },
                            {
                                color: "#2e323e"
                            },
                            {
                                lightness: "5"
                            }
                        ]
                    },
                    {
                        featureType: "road.local",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                visibility: "on"
                            },
                            {
                                color: "#4d5765"
                            },
                            {
                                lightness: "59"
                            }
                        ]
                    },
                    {
                        featureType: "water",
                        elementType: "all",
                        stylers: [
                            {
                                visibility: "on"
                            },
                            {
                                color: "#363b4a"
                            },
                            {
                                lightness: "-30"
                            }
                        ]
                    }
                ]
            };
            if (position.PERMISSION_DENIED) {
                // If user denies location sharing
                options.center = {
                    lat: 41.9779,
                    lng: -91.6656
                };
                options.zoom = 13;
            } else {
                options.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            }
            // Create Info Window
            this.infowindow = new google.maps.InfoWindow();

            // Create Geocoder
            this.geocoder = new google.maps.Geocoder();

            // Create Map
            this.map = new google.maps.Map(document.getElementById("map"), options);

            // Create Home Marker
            this.home = new google.maps.Marker({
                position: options.center,
                map: this.map,
                icon: {
                    url: "/img/home-icon.png"
                }
            });

            // Create Lookup Marker
            this.marker = new google.maps.Marker({
                map: this.map,
                icon: {
                    scaledSize: new google.maps.Size(0, 0),
                    url: " "
                }
            });

            google.maps.event.addListener(this.map, "click", (event) => {
                // Clear Results
                this.geocoder.geocode(
                    {
                        latLng: event.latLng
                    },
                    (results, status) => {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                // Geocoded Street Address
                                let street_address = results[0].address_components[0].long_name + " " + results[0].address_components[1].short_name;

                                // Fetch Results
                                this.getResults(street_address, event.latLng);
                            }
                        }
                    }
                );
            });
        });
    }
    getResults(street_address, geo) {
        let date, month, day, year, start_date, end_date;

        // Clear results and prepare for new data
        this.results.innerHTML = "";
        this.loader.style = "display:block";

        // Set Lookup Marker Location
        this.marker.setPosition(geo);

        date = new Date();

        // Month with leading zero
        month = date.getMonth();
        month = month + 1;
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

        // Set content for the info window
        this.infowindow.setContent(street_address);

        // Show the Info Window
        this.infowindow.open(this.map, this.marker);

        // Post search to the API
        this.post(
            "/api.php",
            {
                Address: street_address,
                StartSearchDate: start_date,
                EndSearchDate: end_date
            },
            this.showResults.bind(this)
        );
    }
    showResults(callback) {
        this.loader.style = "display:none";
        this.results.innerHTML = callback;
        if (document.getElementsByTagName("td").length == 22) {
            document.getElementsByClassName("gm-style-iw-t")[0].classList.add("clean-record");
        } else {
            document.getElementsByClassName("gm-style-iw-t")[0].classList.add("bad-record");
        }

        // Count Reports and append them inside the Google Maps tooltip
        let report_count = document.getElementById("report-count") || document.createElement("small");
        let count = document.getElementsByClassName("table")[0].rows.length - 1;
        if (count >= 25) {
            report_count.innerText = count + " or More Report" + (count > 1 ? "s" : "") + " Found";
        } else if (count > 0) {
            report_count.innerText = count + " Report" + (count > 1 ? "s" : "") + " Found";
        } else {
            report_count.innerText = `Clean Record`;
        }
        report_count.id = "report-count";

        document.getElementsByClassName("gm-style-iw-d")[0].append(report_count);

        // Remove Call ID column to save space
        this.results.querySelectorAll(".table > thead tr").forEach((el) => {
            let th = el.querySelectorAll("th");
            th[0].remove(); // Remove Call ID
            th[2].classList.add("hidden-md"); // Time Received Hide On Mobile
            th[3].remove(); // Remove Address
            th[4].classList.add("hidden-xs"); // Apt Hide On Mobile
            th[6].classList.add("hidden-lg"); // Case Number Hide On Mobile
        });

        this.results.querySelectorAll(".table > tbody tr").forEach((el) => {
            let td = el.querySelectorAll("td");
            td[0].remove(); // Remove Call ID
            td[2].classList.add("hidden-md"); // Time Received Hide On Mobile
            td[3].remove(); // Remove Address
            td[4].classList.add("hidden-xs"); // Apt Hide On Mobile
            td[6].classList.add("hidden-lg"); // Case Number Hide On Mobile

            // Replace call type text
            let text = td[5].textContent.trim();
            td[5].innerText = codes[text] ? codes[text] : text;
            if (badList.includes(text)) {
                el.classList.add("bad");
            }
        });

        // Update pagination to be bootstrap 4 compatible
        document.querySelectorAll(".pagination li").forEach((el) => {
            el.classList.add("page-item");
        });

        // Make pagination work
        let self = this;
        document.querySelectorAll(".pagination li a").forEach((el) => {
            el.classList.add("page-link");
            el.addEventListener("click", (e) => {
                e.preventDefault();
                self.post(
                    "/api.php",
                    {
                        url: el.getAttribute("href")
                    },
                    self.showResults.bind(self)
                );
            });
        });
    }
    post(url, data, callback) {
        // Create xhr request
        var request = new XMLHttpRequest();

        // Define request method
        request.open("POST", url);

        // Set header
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                callback(request.responseText);
            }
        };

        // Send json data in base64 format
        request.send("data=" + btoa(JSON.stringify(data)));
    }
}
let map = new MapClass();
