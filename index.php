<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Police Calls For By Map</title>
    <link rel="stylesheet" href="/src/css/app.css">
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/src/img/icon.png" type="image/x-icon">
</head>

<body>
    <div class="row">
        <div class="col" id="map"></div>
        <div class="col">
            <div class="pad">
                <form id="search-form">
                    <input type="text" name="address" id="search-address" class="form-control" placeholder="Type a street address...">
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
                <div class="copyright">
                    <div>Copyright &copy; <?php echo date("Y");?></div>
                    <small>Designed by <a href="https://jakepetty.com" target="_blank"><svg data-name="Logo" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514.06 465"><path d="M189.2 202v61h-78l115 115V0h62l218.28 219.51c16.19 16.19 4.73 43.87-18.17 43.87L320.2 263v-61h83l-115-113v376h-62L7.19 243.19c-15.4-15.4-4.41-41.72 17.37-41.59Z"></path></svg> Jake Petty</a></small>
                </div>
            </div>
        </div>
    </div>
    <script src="/src/js/app.js"></script>
</body>

</html>