"strict"
let codes = {
    "ABDUCTIO": "ABDUCTION",
    "ABUSEABA": "ABUSE ABANDONMENT NEGLECT",
    "ACCPRT": "ACCIDENT (REPORT ONLY)",
    "ACCPD": "ACCIDENT PD",
    "ACCPI": "ACCIDENT PI",
    "ACCUNK": "ACCIDENT UNKNOWN INJURY",
    "ADMINIST": "ADMIN DOCUMENT LOST OR FOUND MSG TRANSPORT",
    "ALERT1": "AIRPORT ALERT 1",
    "ALERT2": "AIRPORT ALERT 2 AIRCRAFT IN TROUBLE",
    "ALERT3": "AIRPORT ALERT 3 AIRCRAFT ACCIDENT",
    "ALARMAUD": "ALARM (AUDIBLE) - POLICE",
    "ALARM": "ALARM COMPANY - POLICE",
    "ANIMAL": "ANIMAL PROBLEM",
    "ASSLTIP": "ASSAULT IN PROGRESS",
    "ASSAULT REPORT": "ASSAULT REPORT",
    "ASSLTSEX": "ASSAULT SEXUAL",
    "ASSLTIJ": "ASSAULT WITH INJURY (NOT IN PROGRESS)",
    "ASSOC": "ASSOCIATED EVENT",
    "ATL": "ATTEMPT TO LOCATE",
    "BOMBEXP": "BOMB EXPLOSION",
    "BOMBFND": "BOMB FOUND",
    "BOMBTHRT": "BOMB THREAT",
    "BURGLARY": "BURGLARY HOME INVASION",
    "BURGIP": "BURGLARY IN PROGRESS",
    "BURG": "BURGLARY REPORT",
    "CARJACK": "CAR JACKING",
    "CHILDCAR": "CHILD LOCKED IN CAR",
    "CODE1": "CODE1",
    "CONTSUBS": "CONTROLLED SUBSTANCE",
    "CRCOPPS": "CR COPS PROJECT",
    "CRIMISIP": "CRIMINAL MISCHIEF IN PROGRESS",
    "CRIMIS": "CRIMINAL MISCHIEF REPORT",
    "DAMAGEVA": "DAMAGE VANDALISM MISCHIEF",
    "DECEASED": "DECEASED PERSON",
    "DELMESSG": "DELIVER MESSAGE",
    "DIST": "DISTURBANCE",
    "DISTDOME": "DISTURBANCE - DOMESTIC",
    "DISTNOIS": "DISTURBANCE - NOISE",
    "DISTURBN": "DISTURBANCE NUISANCE",
    "DISTWEAP": "DISTURBANCE W\/WEAPON",
    "DOMESTIC": "DOMESTIC DISTURBANCE VIOLENCE",
    "DRILL": "DRILL",
    "DUI": "DRIVING UNDER THE INFLUENCE (IMPAIRED DRIVING)",
    "DUMP": "ILLEGAL DUMPING",
    "ENFORC": "SELECTIVE ENFORCEMENT PROJECT",
    "EXPLOS": "EXPLOSION EMERGENCY",
    "FALARM": "AUTOMATIC FIRE ALARM",
    "FBRUSH": "GRASS, BRUSH, or OR TIMBER FIRE",
    "FCOALARM": "CARBON MONOXIDE ALARM",
    "FCONFINE": "CONFINED SPACE RESCUE",
    "FEXTRIC": "EXTRICATION",
    "FHAZM-0": "HAZ-MAT STILL",
    "FHAZM-1": "HAZ-MAT FIRST ALARM",
    "FHAZMAT": "HAZ-MAT",
    "FIGHT": "FIGHT",
    "FIGHTWEA": "FIGHT W\/WEAPON",
    "FNDPERS": "FOUND PERSON",
    "FNDPROP": "FOUND PROPERTY",
    "FNONSTR": "NON-STRUCTURE FIRE",
    "FRAUDDEC": "FRAUD DECEPTION",
    "FSTRUCT": "STRUCTURE FIRE",
    "GUNSHOTS": "GUNSHOTS REPORTED",
    "HARASSME": "HARASSMENT STALKING THREAT",
    "HELI": "HELICOPTER, EMERGENCY - CRPD",
    "HELINON": "HELICOPTER, NON EMERGENCY - CRPD",
    "HITRUN": "HIT & RUN",
    "HITRUNIJ": "HIT & RUN WITH INJURY",
    "HOMICID": "HOMICIDE",
    "HOSTAGE": "HOSTAGE",
    "INDECENC": "INDECENCY LEWDNESS",
    "INDEXP": "INDECENT EXPOSURE",
    "INTOXDRV": "INTOXICATED DRIVER",
    "INTOXPER": "INTOXICATED PERSON",
    "JUVENILE": "JUVENILE TROUBLE",
    "KIDNAPIP": "KIDNAPPING IN PROGRESS",
    "KIDNAP": "KIDNAPPING REPORT",
    "MEDI": "MEDICAL",
    "MEETOFF": "MEET OFFICER",
    "MISCELLA": "MISCELLANEOUS",
    "MISSPERS": "MISSING 12\/UNDER\/CHALLENGED",
    "MISSINGF": "MISSING RUNAWAY FOUND PERSON",
    "NCORDER": "NO CONTACT ORDER VIOLATION",
    "ODORSTRN": "ODORSTRNGUNK",
    "OPENBLDG": "OPEN BUILDING",
    "OTHER": "OTHER",
    "OUTSIDEF": "OUTSIDE FIRE",
    "PICKUP": "PICKUP ITEM\/PROPERTY",
    "PRSNDWN": "PERSON DOWN",
    "PROWLER": "PROWLER",
    "PUBLICSE": "PUBLIC SERVICE (LOCK OUT\/PEACE\/WELFARE)",
    "PURSUITF": "FOOT PURSUIT",
    "PURSUITV": "VEHICLE PURSUIT",
    "RECKLESS": "RECKLESS DRIVER",
    "RECOVERY": "RECOVERY STOLEN VEHICLE",
    "ROBBERYC": "ROBBERY CARJACKING",
    "ROBERYIP": "ROBBERY IN PROGRESS",
    "ROBBERY": "ROBBERY REPORT",
    "RUNAWAY": "RUNAWAY",
    "S1": "VIOLATOR",
    "S10": "ASSIGNMENT",
    "S11": "STORAGE",
    "S12": "PROZONE",
    "S13": "WARRANT",
    "S14": "CITATION",
    "S15": "PAROLE",
    "S18": "BAR CHECK",
    "S2": "INVESTIGATION",
    "S21": "MOTEL CHECK",
    "S23": "CMVI",
    "S24": "FOOT PATROL",
    "S26": "SCHOOL CHECK",
    "S27": "BUSINESS CHECK",
    "S31": "FOCUSED PATROL",
    "S32": "COMMUNITY OUTREACH",
    "S33": "PARK CHECK",
    "S34": "SPECIAL DUTY",
    "S35": "EXTRA PATROL REQUEST",
    "S36": "MAKE YOUR OWN CASE",
    "SEESUBJ": "SEE SUBJECT",
    "SHOOTING": "SHOOTING",
    "SRT": "SRT CALL",
    "SP": "SUBJECT PURSUIT",
    "SS": "SUBJECT STOP",
    "STABBING": "STABBING",
    "STALLVEH": "STALLED VEHICLE",
    "SUBJWEAP": "SUBJECT WITH A WEAPON",
    "SUPPLEME": "SUPPLEMENTAL",
    "SUSPPKGB": "SUSPICIOUS PACKAGE\/BOMB THREAT",
    "SUSPPERS": "SUSPICIOUS PERSON",
    "SUSPVEH": "SUSPICIOUS VEHICLE",
    "SUSPICIO": "SUSPICIOUS WANTED PERSON CIRCUMSTANCES VEHICLE",
    "THEFT": "THEFT",
    "THEFTFRV": "THEFT FROM VEHICLE",
    "THEFTIC": "THEFT IN CUSTODY",
    "THEFTIP": "THEFT IN PROGRESS",
    "THEFTVEH": "THEFT OF VEHICLE",
    "TRAFFTOW": "TOW VEHICLE",
    "TRAFFIC": "TRAFFIC",
    "TRAFFHAZ": "TRAFFIC HAZARD",
    "TS": "TRAFFIC STOP",
    "TRAFFICA": "TRAFFIC TRANSPORTATION ACCIDENT (CRASH)",
    "TRAFFICV": "TRAFFIC VIOLATION",
    "TRAINCOL": "TRAIN AND RAIL COLLISION \/ DERAILMENT",
    "TRAINAND": "TRAIN AND RAIL FIRE",
    "TRANSPRT": "TRANSPORT",
    "TRESPASS": "TRESPASSING UNWANTED",
    "TRBLUNK": "TROUBLE UNKNOWN",
    "UNKNOWN": "UNKNOWN 3RD PARTY",
    "VEHICLEF": "VEHICLE FIRE",
    "WATERRES": "WATER RESCUE",
    "WATERCRA": "WATERCRAFT IN DISTRESS",
    "WEAPONSF": "WEAPONS FIREARMS",
    "WELFCHK": "WELFARE CHECK"
}
class Map {
    constructor() {
        this.results = document.getElementById("results")
        navigator.geolocation.getCurrentPosition(this.setupMap.bind(this))
    }
    getScript(src, callback) {
        let el = document.createElement('script')
        el.onload = callback
        el.src = src

        document.body.appendChild(el)
    }

    setupMap(position) {
        let location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        }
        this.getScript("https://maps.googleapis.com/maps/api/js?v=3.34&key=AIzaSyByLobYLYqhklGiVYWVuRPbdzhYYkPYO9w", () => {
            this.infowindow = new google.maps.InfoWindow()
            this.geocoder = new google.maps.Geocoder()
            this.map = new google.maps.Map(document.getElementById("map"), {
                center: location,
                zoom: 17
            })
            this.home = new google.maps.Marker({
                position: location,
                map: this.map,
                icon: {
                    url: "https://maps.google.com/mapfiles/ms/icons/blue.png"
                }
            })
            this.marker = new google.maps.Marker({
                map: this.map,
                icon: {
                    url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                }
            })
            google.maps.event.addListener(this.map, "click", (event) => {
                // Clear Results
                this.results.innerHTML = "Loading..."
                this.marker.setPosition(event.latLng)
                this.geocoder.geocode({
                    "latLng": event.latLng
                }, (results, status) => {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            let date, month, day, year, street_address, start_date, end_date

                            // Geocoded Street Address
                            street_address = results[0].address_components[0].long_name + " " + results[0].address_components[1].short_name
                            this.infowindow.setContent(street_address)
                            this.infowindow.open(this.map, this.marker)
                            date = new Date()

                            // Month with leading zero
                            month = date.getMonth()
                            month = (month + 1)
                            month = month < 10 ? "0" + month : month

                            // Day with leading zero
                            day = date.getDate()
                            day = day < 10 ? "0" + day : day

                            // Year
                            year = date.getFullYear()

                            // Formatted Start Date
                            start_date = month + "/" + day + "/" + (year - 1)

                            // Formatted End Date
                            end_date = month + "/" + day + "/" + year
                            this.post("/api.php", {
                                Address: street_address,
                                StartSearchDate: start_date,
                                EndSearchDate: end_date
                            }, this.showResults.bind(this))
                        }
                    }
                })
            })
        })
    }
    showResults(callback) {
        this.results.innerHTML = callback
        // Remove Call ID column to save space
        this.results.querySelectorAll('.table > thead tr th')[0].remove()

        // Remove address column to save space
        this.results.querySelectorAll('.table > thead tr th')[2].remove()

        // Replace Call Type Code with human readable call type
        let rows = this.results.querySelectorAll('.table > tbody tr')
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i]
            row.childNodes[1].remove() // Remove address column to save space
            row.childNodes[6].remove() // Remove Call ID column to save space

            // Replace call type text
            let text = row.childNodes[9].textContent.trim()
            row.childNodes[9].innerText = codes[text] ? codes[text] : text
        }

        // Update pagination to be bootstrap 4 compatible
        document.querySelectorAll('.pagination li').forEach((el) => {
            el.classList.add('page-item')
        })

        // Add table-hover to table element
        document.getElementsByClassName('table')[0].classList.add('table-hover')

        // Add thead-dark to thead element
        document.getElementsByTagName('thead')[0].classList.add('thead-dark')

        // Make pagination work
        let self = this
        document.querySelectorAll('.pagination li a').forEach((el) => {
            el.classList.add('page-link')
            el.addEventListener('click', (e) => {
                e.preventDefault()
                self.post("/api.php", {
                    url: el.getAttribute("href")
                }, self.showResults.bind(self))
            })
        })
    }
    post(url, data, callback) {
        var request = new XMLHttpRequest()
        request.open('POST', url)
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                callback(request.responseText)
            }
        }
        request.send("data=" + btoa(JSON.stringify(data)))
    }
}
let map = new Map()