<?php
declare(strict_types=1);

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../lib/response.php';
require_once __DIR__ . '/../lib/validators.php';

apply_cors();

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $items = db()->query('SELECT * FROM faqs ORDER BY created_at DESC')->fetchAll();
    json_response(['data' => $items]);
}

require_admin_token();
$data = request_data();

if ($method === 'POST') {
    $errors = validate_required($data, ['question', 'answer']);

    if ($errors !== []) {
        json_response(['message' => 'Please check the fields.', 'errors' => $errors], 422);
    }

    $statement = db()->prepare(
        'INSERT INTO faqs (question, answer, created_at) VALUES (:question, :answer, NOW())'
    );
    $statement->execute([
        'question' => clean_string($data['question'], 255),
        'answer' => clean_string($data['answer'], 2000),
    ]);

    json_response(['message' => 'FAQ created.'], 201);
}

if ($method === 'DELETE') {
    $id = (int)($_GET['id'] ?? 0);
    $statement = db()->prepare('DELETE FROM faqs WHERE id = :id');
    $statement->execute(['id' => $id]);
    json_response(['message' => 'FAQ deleted.']);
}

json_response(['message' => 'Method not allowed.'], 405);
