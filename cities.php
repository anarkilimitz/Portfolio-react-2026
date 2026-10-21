
<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

// Используем существующий API-ключ
$config = require __DIR__ . '/config.php';
$apiKey = $config['WEATHER_API_KEY'] ?? '';

if ($apiKey === '') {
    http_response_code(500);

    echo json_encode([
        'error' => 'Missing WEATHER_API_KEY'
    ]);

    exit;
}

// Получаем поисковый запрос
$query = isset($_GET['query'])
    ? trim((string) $_GET['query'])
    : '';

// Не отправляем пустые и слишком короткие запросы
if (mb_strlen($query) < 2) {
    echo json_encode([
        'cities' => []
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

// Параметры OpenWeather Geocoding API
$params = [
    'q' => $query,
    'limit' => 5,
    'appid' => $apiKey,
];

$url = 'https://api.openweathermap.org/geo/1.0/direct?'
    . http_build_query($params);

// Запрос к OpenWeather
$ch = curl_init();

curl_setopt_array($ch, [
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'User-Agent: PortfolioWeatherApp/1.0',
    ],
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT => 10,
]);

$response = curl_exec($ch);
$httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);

curl_close($ch);

// Ошибка соединения
if ($response === false) {
    http_response_code(502);

    echo json_encode([
        'error' => $error ?: 'Failed to search cities'
    ]);

    exit;
}

// Ошибка OpenWeather
if ($httpCode !== 200) {
    http_response_code($httpCode >= 400 ? $httpCode : 502);

    echo json_encode([
        'error' => 'Failed to search cities'
    ]);

    exit;
}

// Преобразуем ответ API
$results = json_decode($response, true);

if (!is_array($results)) {
    http_response_code(502);

    echo json_encode([
        'error' => 'Invalid response from OpenWeather'
    ]);

    exit;
}

// Оставляем только нужные поля
$cities = array_map(function ($city) {
    return [
        'name' => $city['name'] ?? '',
        'lat' => $city['lat'] ?? null,
        'lon' => $city['lon'] ?? null,
        'country' => $city['country'] ?? '',
        'state' => $city['state'] ?? '',
    ];
}, $results);

echo json_encode([
    'cities' => $cities
], JSON_UNESCAPED_UNICODE);

exit;
