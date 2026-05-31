<?php
declare(strict_types=1);

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../lib/response.php';
require_once __DIR__ . '/../lib/validators.php';

apply_cors();

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $items = db()
        ->query('SELECT * FROM case_studies ORDER BY created_at DESC')
        ->fetchAll();

    json_response(['data' => $items]);
}

require_admin_token();
$data = request_data();

if ($method === 'POST') {
    $errors = validate_required($data, ['title', 'slug', 'client_name', 'industry', 'challenge', 'solution', 'results']);

    if ($errors !== []) {
        json_response(['message' => 'Please check the fields.', 'errors' => $errors], 422);
    }

    $statement = db()->prepare(
        'INSERT INTO case_studies
        (title, slug, client_name, industry, featured_image, challenge, solution, results, traffic_growth, lead_growth, ranking_growth, created_at)
        VALUES (:title, :slug, :client_name, :industry, :featured_image, :challenge, :solution, :results, :traffic_growth, :lead_growth, :ranking_growth, NOW())'
    );
    $statement->execute([
        'title' => clean_string($data['title'], 190),
        'slug' => clean_string($data['slug'], 190),
        'client_name' => clean_string($data['client_name'], 190),
        'industry' => clean_string($data['industry'], 190),
        'featured_image' => clean_string($data['featured_image'] ?? '', 255),
        'challenge' => clean_string($data['challenge'], 2000),
        'solution' => clean_string($data['solution'], 2000),
        'results' => clean_string($data['results'], 2000),
        'traffic_growth' => (int)($data['traffic_growth'] ?? 0),
        'lead_growth' => (int)($data['lead_growth'] ?? 0),
        'ranking_growth' => (int)($data['ranking_growth'] ?? 0),
    ]);

    json_response(['message' => 'Case study created.'], 201);
}

if ($method === 'PUT') {
    $id = (int)($data['id'] ?? 0);

    if ($id <= 0) {
        json_response(['message' => 'A valid case study id is required.'], 422);
    }

    $statement = db()->prepare(
        'UPDATE case_studies SET title = :title, slug = :slug, client_name = :client_name, industry = :industry,
        featured_image = :featured_image, challenge = :challenge, solution = :solution, results = :results,
        traffic_growth = :traffic_growth, lead_growth = :lead_growth, ranking_growth = :ranking_growth WHERE id = :id'
    );
    $statement->execute([
        'id' => $id,
        'title' => clean_string($data['title'], 190),
        'slug' => clean_string($data['slug'], 190),
        'client_name' => clean_string($data['client_name'], 190),
        'industry' => clean_string($data['industry'], 190),
        'featured_image' => clean_string($data['featured_image'] ?? '', 255),
        'challenge' => clean_string($data['challenge'], 2000),
        'solution' => clean_string($data['solution'], 2000),
        'results' => clean_string($data['results'], 2000),
        'traffic_growth' => (int)($data['traffic_growth'] ?? 0),
        'lead_growth' => (int)($data['lead_growth'] ?? 0),
        'ranking_growth' => (int)($data['ranking_growth'] ?? 0),
    ]);

    json_response(['message' => 'Case study updated.']);
}

if ($method === 'DELETE') {
    $id = (int)($_GET['id'] ?? 0);
    $statement = db()->prepare('DELETE FROM case_studies WHERE id = :id');
    $statement->execute(['id' => $id]);

    json_response(['message' => 'Case study deleted.']);
}

json_response(['message' => 'Method not allowed.'], 405);
