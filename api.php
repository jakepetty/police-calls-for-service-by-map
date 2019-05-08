<?php
class PoliceSearch
{
    private $headers = [
        'Origin: http://apps.cedar-rapids.org',
        'Host: apps.cedar-rapids.org',
        'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:28.0) Gecko/20100101 Firefox/28.0'
    ];

    public function get($url, $data)
    {
        $ch = curl_init('http://apps.cedar-rapids.org' . $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS, !isset($data['url']) ? $data : [
            'X-Requested-With' => 'XMLHttpRequest'
        ]);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $this->headers);
        $callback = curl_exec($ch);
        curl_close($ch);

        return $callback;
    }
}
if (!empty($_POST)) {
    $search = new PoliceSearch();
    $json = base64_decode($_POST["data"]);
    $data = json_decode($json, true);
    echo $search->get(isset($data['url']) ? $data['url'] : "/PoliceLog/Home/Search", $data);
} else {
    echo "Invalid Request";
}
