<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$config = require __DIR__ . '/config.php';
$apiKey = $config['WEATHER_API_KEY'] ?? '';

if ($apiKey === '') {
    http_response_code(500);
    echo json_encode(['error' => 'Missing WEATHER_API_KEY']);
    exit;
}

$params = [
    'units' => 'metric',
    'appid' => $apiKey,
    'lang' => 'ru',
];

$city = isset($_GET['city']) ? trim((string) $_GET['city']) : '';
if ($city !== '') {
    $params['q'] = $city;
} else {
    $lat = isset($_GET['lat']) ? (float) $_GET['lat'] : null;
    $lon = isset($_GET['lon']) ? (float) $_GET['lon'] : null;

    if ($lat === null || $lon === null) {
        http_response_code(400);
        echo json_encode(['error' => 'lat/lon or city are required']);
        exit;
    }

    $params['lat'] = $lat;
    $params['lon'] = $lon;
}

$query = http_build_query($params);
$cacheFile = __DIR__ . '/weather_cache_' . md5($query) . '.json';
$cacheTime = 600;

if (is_file($cacheFile)) {
    $fileAge = time() - filemtime($cacheFile);

    if ($fileAge < $cacheTime) {
        echo file_get_contents($cacheFile);
        exit;
    }
}

$url = 'https://api.openweathermap.org/data/2.5/weather?' . $query;

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_HTTPHEADER => [
        'User-Agent: PortfolioWeatherApp/1.0',
    ],
]);

$response = curl_exec($ch);
$httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

if ($response === false) {
    if (is_file($cacheFile)) {
        echo file_get_contents($cacheFile);
        exit;
    }

    http_response_code(502);
    echo json_encode(['error' => $error ?: 'Failed to load weather']);
    exit;
}

if ($httpCode !== 200) {
    if (is_file($cacheFile)) {
        echo file_get_contents($cacheFile);
        exit;
    }

    http_response_code($httpCode);
    echo $response;
    exit;
}

file_put_contents($cacheFile, $response);
echo $response;
exit;
