<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$name  = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$text  = trim($data['text'] ?? '');

if ($name === '' || $email === '' || $text === '') {
    http_response_code(400);
    echo json_encode(['error' => 'All fields required']);
    exit;
}

$to = 'devlimitz@yandex.ru';
$subject = 'Test mail from site';
$message = "Name: $name\nEmail: $email\n\n$text";
$headers = "From: site@pavlenok.com\r\nReply-To: $email";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Mail failed']);
}
