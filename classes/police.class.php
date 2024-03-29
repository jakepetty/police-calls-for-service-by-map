<?php
class PoliceSearch
{
    private $headers = [
        'Origin: https://apps2.cedar-rapids.org',
        'Host: apps2.cedar-rapids.org',
        'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
        'referer: https://apps2.cedar-rapids.org/policelogs',
        'X-Requested-With: XMLHttpRequest'
    ];

    public function get($url, $data)
    {
        $ch = curl_init('https://apps2.cedar-rapids.org' . $url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
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
