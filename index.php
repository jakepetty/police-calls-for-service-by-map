<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Police Calls For By Map</title>
    <link rel="stylesheet" href="/css/app.css">
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/img/icon.png" type="image/x-icon">
</head>

<body>
    <div class="row">
        <div class="col" id="map"></div>
        <div class="col">
            <div class="pad">
                <form id="search-form">
                    <input type="text" name="address" id="search-address" class="form-control" placeholder="Enter a street address">
                </form>
                
                <div id="results">
                    <div class="center">
                        <h1>Cedar Rapids Police Calls For Service</h1>
                        <p>Information presented on this website belongs to <a href="http://www.cedar-rapids.org/local_government/departments_g_-_v/police/police_calls_for_service.php" target="_blank" rel="noopener noreferrer">Cedar Rapids</a>. No information is collected or stored.</p>
                    </div>
                </div>
                <div id="loader" class="spinner">
                    <div class="rect1"></div>
                    <div class="rect2"></div>
                    <div class="rect3"></div>
                    <div class="rect4"></div>
                    <div class="rect5"></div>
                </div>
            </div>
        </div>
    </div>
    <script src="/js/app.js"></script>
</body>

</html>