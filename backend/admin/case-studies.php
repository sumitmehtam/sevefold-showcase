<?php
require_once __DIR__ . '/includes/bootstrap.php';
require_admin();

$editing = null;

if (isset($_GET['edit'])) {
    $statement = db()->prepare('SELECT * FROM case_studies WHERE id = :id');
    $statement->execute(['id' => (int)$_GET['edit']]);
    $editing = $statement->fetch() ?: null;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    verify_csrf();
    $action = $_POST['action'] ?? '';

    if ($action === 'delete') {
        $statement = db()->prepare('DELETE FROM case_studies WHERE id = :id');
        $statement->execute(['id' => (int)($_POST['id'] ?? 0)]);
        flash('Case study deleted.');
        redirect_to('/admin/case-studies.php');
    }

    $payload = [
        'title' => clean_string($_POST['title'] ?? '', 190),
        'slug' => clean_string($_POST['slug'] ?? '', 190),
        'client_name' => clean_string($_POST['client_name'] ?? '', 190),
        'industry' => clean_string($_POST['industry'] ?? '', 190),
        'featured_image' => clean_string($_POST['featured_image'] ?? '', 255),
        'challenge' => clean_string($_POST['challenge'] ?? '', 2000),
        'solution' => clean_string($_POST['solution'] ?? '', 2000),
        'results' => clean_string($_POST['results'] ?? '', 2000),
        'traffic_growth' => (int)($_POST['traffic_growth'] ?? 0),
        'lead_growth' => (int)($_POST['lead_growth'] ?? 0),
        'ranking_growth' => (int)($_POST['ranking_growth'] ?? 0),
    ];

    if ($action === 'update') {
        $payload['id'] = (int)($_POST['id'] ?? 0);
        $statement = db()->prepare(
            'UPDATE case_studies SET title=:title, slug=:slug, client_name=:client_name, industry=:industry,
            featured_image=:featured_image, challenge=:challenge, solution=:solution, results=:results,
            traffic_growth=:traffic_growth, lead_growth=:lead_growth, ranking_growth=:ranking_growth WHERE id=:id'
        );
        $statement->execute($payload);
        flash('Case study updated.');
        redirect_to('/admin/case-studies.php');
    }

    $statement = db()->prepare(
        'INSERT INTO case_studies (title, slug, client_name, industry, featured_image, challenge, solution, results, traffic_growth, lead_growth, ranking_growth, created_at)
        VALUES (:title, :slug, :client_name, :industry, :featured_image, :challenge, :solution, :results, :traffic_growth, :lead_growth, :ranking_growth, NOW())'
    );
    $statement->execute($payload);
    flash('Case study created.');
    redirect_to('/admin/case-studies.php');
}

$pageTitle = 'Case Studies';
$items = db()->query('SELECT * FROM case_studies ORDER BY created_at DESC')->fetchAll();

require __DIR__ . '/includes/header.php';
?>
<div class="topbar">
  <div>
    <h1>Case Studies</h1>
    <p class="muted">Create database-driven challenge, solution and result stories.</p>
  </div>
</div>
<?php if ($message = flash()): ?><div class="flash"><?= e($message) ?></div><?php endif; ?>

<div class="card">
  <h2><?= $editing ? 'Edit Case Study' : 'Add Case Study' ?></h2>
  <form class="form two" method="post">
    <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
    <input type="hidden" name="action" value="<?= $editing ? 'update' : 'create' ?>">
    <?php if ($editing): ?><input type="hidden" name="id" value="<?= e($editing['id']) ?>"><?php endif; ?>
    <label>Title <input name="title" required value="<?= e($editing['title'] ?? '') ?>"></label>
    <label>Slug <input name="slug" required value="<?= e($editing['slug'] ?? '') ?>"></label>
    <label>Client Name <input name="client_name" required value="<?= e($editing['client_name'] ?? '') ?>"></label>
    <label>Industry <input name="industry" required value="<?= e($editing['industry'] ?? '') ?>"></label>
    <label>Featured Image URL <input name="featured_image" value="<?= e($editing['featured_image'] ?? '') ?>"></label>
    <label>Traffic Growth <input type="number" name="traffic_growth" value="<?= e($editing['traffic_growth'] ?? 0) ?>"></label>
    <label>Lead Growth <input type="number" name="lead_growth" value="<?= e($editing['lead_growth'] ?? 0) ?>"></label>
    <label>Ranking Growth <input type="number" name="ranking_growth" value="<?= e($editing['ranking_growth'] ?? 0) ?>"></label>
    <label style="grid-column:1/-1;">Challenge <textarea name="challenge" required><?= e($editing['challenge'] ?? '') ?></textarea></label>
    <label style="grid-column:1/-1;">Solution <textarea name="solution" required><?= e($editing['solution'] ?? '') ?></textarea></label>
    <label style="grid-column:1/-1;">Results <textarea name="results" required><?= e($editing['results'] ?? '') ?></textarea></label>
    <div class="actions" style="grid-column:1/-1;">
      <button type="submit"><?= $editing ? 'Update Case Study' : 'Create Case Study' ?></button>
      <?php if ($editing): ?><a class="button secondary" href="/admin/case-studies.php">Cancel</a><?php endif; ?>
    </div>
  </form>
</div>

<div class="card" style="margin-top:18px;">
  <table class="table">
    <thead><tr><th>Title</th><th>Client</th><th>Growth</th><th>Actions</th></tr></thead>
    <tbody>
      <?php foreach ($items as $item): ?>
        <tr>
          <td><?= e($item['title']) ?><br><span class="muted"><?= e($item['slug']) ?></span></td>
          <td><?= e($item['client_name']) ?><br><span class="muted"><?= e($item['industry']) ?></span></td>
          <td>Traffic <?= e($item['traffic_growth']) ?>%<br>Leads <?= e($item['lead_growth']) ?>%</td>
          <td class="actions">
            <a class="button secondary" href="/admin/case-studies.php?edit=<?= e($item['id']) ?>">Edit</a>
            <form method="post" onsubmit="return confirm('Delete this case study?')">
              <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
              <input type="hidden" name="action" value="delete">
              <input type="hidden" name="id" value="<?= e($item['id']) ?>">
              <button class="button danger" type="submit">Delete</button>
            </form>
          </td>
        </tr>
      <?php endforeach; ?>
    </tbody>
  </table>
</div>
<?php require __DIR__ . '/includes/footer.php'; ?>
