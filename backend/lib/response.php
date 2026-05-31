<?php
declare(strict_types=1);

require_once __DIR__ . '/../config/config.php';

function apply_cors(): void
{
    header('Access-Control-Allow-Origin: ' . CORS_ORIGIN);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

function json_response(array $payload, int $status = 200): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function request_data(): array
{
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';

    if (str_contains($contentType, 'application/json')) {
        $raw = file_get_contents('php://input') ?: '';
        $decoded = json_decode($raw, true);

        return is_array($decoded) ? $decoded : [];
    }

    if ($_SERVER['REQUEST_METHOD'] === 'PUT' || $_SERVER['REQUEST_METHOD'] === 'DELETE') {
        parse_str(file_get_contents('php://input') ?: '', $data);

        return is_array($data) ? $data : [];
    }

    return $_POST;
}

function require_admin_token(): void
{
    $header = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    $token = str_starts_with($header, 'Bearer ') ? substr($header, 7) : '';

    if ($token === '' || !hash_equals(API_ADMIN_TOKEN, $token)) {
        json_response(['message' => 'Unauthorized'], 401);
    }
}
