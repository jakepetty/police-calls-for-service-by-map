<?php
require "classes/police.class.php";
if (isset($_POST["data"])) {
    $search = new PoliceSearch();

    // Decode Base64 data
    $json = base64_decode($_POST["data"]);

    // Convert JSON to an Array
    $data = json_decode($json, true);

    // Get results
    echo $search->get(isset($data['url']) ? $data['url'] : "/PoliceLog/Home/Search", $data);
} else {
    echo "Access Denied";
}
