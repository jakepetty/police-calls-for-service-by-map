<?php
class PoliceSearch
{

    private $headers = [
        'Origin: http://apps.cedar-rapids.org',
        'Host: apps.cedar-rapids.org',
        'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:28.0) Gecko/20100101 Firefox/28.0'
    ];

    public function get($url)
    {
        $ch = curl_init('http://apps.cedar-rapids.org' . $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS, !isset($_POST['url']) ? $_POST : [
            'X-Requested-With' => 'XMLHttpRequest'
        ]);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $this->headers);
        $server_output = curl_exec($ch);
        curl_close($ch);

        return $server_output;
    }
}
$search = new PoliceSearch();
echo $search->get(isset($_POST['url']) ? $_POST['url'] : "/PoliceLog/Home/Search");
