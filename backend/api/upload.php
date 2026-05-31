<?php
declare(strict_types=1);

require_once __DIR__ . '/../lib/response.php';

apply_cors();
require_admin_token();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['message' => 'Method not allowed.'], 405);
}

if (!isset($_FILES['image']) || !is_uploaded_file($_FILES['image']['tmp_name'])) {
    json_response(['message' => 'Image file is required.'], 422);
}

$file = $_FILES['image'];
$allowed = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];
$mime = mime_content_type($file['tmp_name']) ?: '';

if (!isset($allowed[$mime])) {
    json_response(['message' => 'Only JPG, PNG and WEBP images are allowed.'], 422);
}

if ((int)$file['size'] > 4 * 1024 * 1024) {
    json_response(['message' => 'Image must be under 4 MB.'], 422);
}

$uploadDir = __DIR__ . '/../uploads';

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

$name = bin2hex(random_bytes(16)) . '.' . $allowed[$mime];
$path = $uploadDir . '/' . $name;

if (!move_uploaded_file($file['tmp_name'], $path)) {
    json_response(['message' => 'Upload failed.'], 500);
}

json_response([
    'message' => 'Image uploaded.',
    'url' => '/uploads/' . $name,
], 201);
