<?php

// Отладка GET — чтобы видеть, живой ли файл
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['status' => 'alive', 'php' => phpversion()]);
    exit;
}

// Основная часть — POST
header('Content-Type: application/json; charset=utf-8');
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!is_array($data) || empty($data['name']) || empty($data['email']) || empty($data['text'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid data']);
    exit;
}

// ─────────────────────────────────────────────
// логика скопирована с учебного рабочего скрипта
// ─────────────────────────────────────────────

require_once __DIR__ . '/phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->SMTPDebug = 0;               // отладка 0 - выключена

$env = parse_ini_file(dirname(__DIR__) . '/.env.backend');

$mail->isSMTP();
$mail->Host       = $env['SMTP_HOST'];
$mail->SMTPAuth   = true;
$mail->Username   = $env['SMTP_USER'];
$mail->Password   = $env['SMTP_PASS'];
$mail->SMTPSecure = $env['SMTP_SECURE'];
$mail->Port       = (int)$env['SMTP_PORT'];

$mail->setFrom($env['SMTP_USER'], $env['SMTP_FROM_NAME'] ?? 'Portfolio site');
$mail->addAddress($env['SMTP_TO']);
$mail->addReplyTo($data['email'], $data['name']);

$mail->isHTML(true);
$mail->Subject = 'Сообщение с моего Портфолио';
$mail->Body    = "
    <b>Имя:</b> " . htmlspecialchars($data['name']) . "<br>
    <b>Email:</b> " . htmlspecialchars($data['email']) . "<br><br>
    <b>Сообщение:</b><br>" . nl2br(htmlspecialchars($data['text'])) . "
";

if (!$mail->send()) {
    http_response_code(500);
    echo json_encode([
        'error' => $mail->ErrorInfo,
        'debug' => 'SMTP debug'
    ]);
} else {
    echo json_encode(['success' => true]);
}