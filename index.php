<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Police Calls For By Map</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/app.css">
</head>

<body>
    <div class="container-fluid h-100">
        <div class="row h-100">
            <div class="col-md-6" id="map"></div>
            <div class="col-md-6">
                <form id="search-form">
                    <div class="form-group mt-3">
                        <input type="text" name="address" id="search-address" class="form-control" placeholder="Enter the street address you wish to lookup">
                    </div>
                </form>
                <div id="results">
                    <h1>Cedar Rapids Police Calls For Service</h1>
                    <p>Information presented on this website belongs to <a href="http://www.cedar-rapids.org/local_government/departments_g_-_v/police/police_calls_for_service.php">Cedar Rapids</a>. No infomation is collected or stored.</p>
                </div>
            </div>
        </div>
    </div>
    <script src="/js/app.js"></script>
</body>

</html>