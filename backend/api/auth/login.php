<?php
declare(strict_types=1);

require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../lib/response.php';
require_once __DIR__ . '/../../lib/validators.php';

apply_cors();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['message' => 'Method not allowed.'], 405);
}

$data = request_data();
$email = clean_string($data['email'] ?? '', 190);
$password = is_string($data['password'] ?? null) ? $data['password'] : '';

$statement = db()->prepare('SELECT id, name, email, password FROM admins WHERE email = :email LIMIT 1');
$statement->execute(['email' => $email]);
$admin = $statement->fetch();

if (!$admin || !password_verify($password, $admin['password'])) {
    json_response(['message' => 'Invalid credentials.'], 401);
}

json_response([
    'message' => 'Authenticated.',
    'admin' => [
        'id' => (int)$admin['id'],
        'name' => $admin['name'],
        'email' => $admin['email'],
    ],
]);
