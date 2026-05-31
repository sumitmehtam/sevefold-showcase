<?php
declare(strict_types=1);

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../lib/response.php';
require_once __DIR__ . '/../lib/validators.php';

apply_cors();

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $data = request_data();
    $errors = validate_lead($data);

    if ($errors !== []) {
        json_response(['message' => 'Please check the form fields.', 'errors' => $errors], 422);
    }

    $statement = db()->prepare(
        'INSERT INTO leads (name, clinic_name, email, phone, service, message, created_at)
         VALUES (:name, :clinic_name, :email, :phone, :service, :message, NOW())'
    );

    $statement->execute([
        'name' => clean_string($data['name'], 120),
        'clinic_name' => clean_string($data['clinic_name'], 160),
        'email' => clean_string($data['email'], 190),
        'phone' => clean_string($data['phone'], 40),
        'service' => clean_string($data['service'], 120),
        'message' => clean_string($data['message'], 2000),
    ]);

    json_response(['message' => 'Thanks. Your consultation request has been received.'], 201);
}

require_admin_token();

if ($method === 'GET') {
    $leads = db()
        ->query('SELECT id, name, clinic_name, email, phone, service, message, created_at FROM leads ORDER BY created_at DESC')
        ->fetchAll();

    json_response(['data' => $leads]);
}

if ($method === 'DELETE') {
    $id = (int)($_GET['id'] ?? 0);

    if ($id <= 0) {
        json_response(['message' => 'A valid lead id is required.'], 422);
    }

    $statement = db()->prepare('DELETE FROM leads WHERE id = :id');
    $statement->execute(['id' => $id]);

    json_response(['message' => 'Lead deleted.']);
}

json_response(['message' => 'Method not allowed.'], 405);
