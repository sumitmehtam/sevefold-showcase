<?php
declare(strict_types=1);

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../lib/response.php';
require_once __DIR__ . '/../lib/validators.php';

apply_cors();

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $items = db()->query('SELECT * FROM testimonials ORDER BY created_at DESC')->fetchAll();
    json_response(['data' => $items]);
}

require_admin_token();
$data = request_data();

if ($method === 'POST') {
    $errors = validate_required($data, ['name', 'designation', 'company', 'review']);

    if ($errors !== []) {
        json_response(['message' => 'Please check the fields.', 'errors' => $errors], 422);
    }

    $statement = db()->prepare(
        'INSERT INTO testimonials (name, designation, company, image, review, created_at)
         VALUES (:name, :designation, :company, :image, :review, NOW())'
    );
    $statement->execute([
        'name' => clean_string($data['name'], 160),
        'designation' => clean_string($data['designation'], 160),
        'company' => clean_string($data['company'], 160),
        'image' => clean_string($data['image'] ?? '', 255),
        'review' => clean_string($data['review'], 2000),
    ]);

    json_response(['message' => 'Testimonial created.'], 201);
}

if ($method === 'DELETE') {
    $id = (int)($_GET['id'] ?? 0);
    $statement = db()->prepare('DELETE FROM testimonials WHERE id = :id');
    $statement->execute(['id' => $id]);
    json_response(['message' => 'Testimonial deleted.']);
}

json_response(['message' => 'Method not allowed.'], 405);
