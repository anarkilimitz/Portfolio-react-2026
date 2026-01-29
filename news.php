<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// ====== НАСТРОЙКИ ======
$config = require __DIR__ . '/config.php';
$apiKey = $config['NEWS_API_KEY'];

$url = "https://newsapi.org/v2/top-headlines?category=technology&pageSize=6&apiKey=$apiKey";

// файл кэша (создастся автоматически)
$cacheFile = __DIR__ . '/news_cache.json';

// время жизни кэша в секундах
$cacheTime = 600; // 10 минут


// ====== ПРОВЕРКА КЭША ======
if (file_exists($cacheFile)) {
    $fileAge = time() - filemtime($cacheFile);

    // если кэш ещё свежий — отдаём его
    if ($fileAge < $cacheTime) {
        echo file_get_contents($cacheFile);
        exit;
    }
}
// ============================


// ====== ЗАПРОС К NewsAPI ======
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

// обязательный User-Agent
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'User-Agent: PortfolioNewsApp/1.0'
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// если API вернул ошибку — отдаём старый кэш, если он есть
if ($httpCode !== 200 && file_exists($cacheFile)) {
    echo file_get_contents($cacheFile);
    exit;
}

// сохраняем новый кэш
file_put_contents($cacheFile, $response);

// отдаём результат
echo $response;
exit;

