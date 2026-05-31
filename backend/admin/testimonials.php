<?php
require_once __DIR__ . '/includes/bootstrap.php';
require_admin();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    verify_csrf();

    if (($_POST['action'] ?? '') === 'delete') {
        $statement = db()->prepare('DELETE FROM testimonials WHERE id = :id');
        $statement->execute(['id' => (int)($_POST['id'] ?? 0)]);
        flash('Testimonial deleted.');
        redirect_to('/admin/testimonials.php');
    }

    $statement = db()->prepare(
        'INSERT INTO testimonials (name, designation, company, image, review, created_at)
        VALUES (:name, :designation, :company, :image, :review, NOW())'
    );
    $statement->execute([
        'name' => clean_string($_POST['name'] ?? '', 160),
        'designation' => clean_string($_POST['designation'] ?? '', 160),
        'company' => clean_string($_POST['company'] ?? '', 160),
        'image' => clean_string($_POST['image'] ?? '', 255),
        'review' => clean_string($_POST['review'] ?? '', 2000),
    ]);
    flash('Testimonial created.');
    redirect_to('/admin/testimonials.php');
}

$pageTitle = 'Testimonials';
$items = db()->query('SELECT * FROM testimonials ORDER BY created_at DESC')->fetchAll();

require __DIR__ . '/includes/header.php';
?>
<div class="topbar">
  <div>
    <h1>Testimonials</h1>
    <p class="muted">Manage doctor, clinic and hospital reviews.</p>
  </div>
</div>
<?php if ($message = flash()): ?><div class="flash"><?= e($message) ?></div><?php endif; ?>

<div class="card">
  <h2>Add Testimonial</h2>
  <form class="form two" method="post">
    <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
    <label>Name <input name="name" required></label>
    <label>Designation <input name="designation" required></label>
    <label>Company <input name="company" required></label>
    <label>Image URL <input name="image"></label>
    <label style="grid-column:1/-1;">Review <textarea name="review" required></textarea></label>
    <button type="submit">Create Testimonial</button>
  </form>
</div>

<div class="card" style="margin-top:18px;">
  <table class="table">
    <thead><tr><th>Name</th><th>Company</th><th>Review</th><th></th></tr></thead>
    <tbody>
      <?php foreach ($items as $item): ?>
        <tr>
          <td><?= e($item['name']) ?><br><span class="muted"><?= e($item['designation']) ?></span></td>
          <td><?= e($item['company']) ?></td>
          <td><?= e($item['review']) ?></td>
          <td>
            <form method="post" onsubmit="return confirm('Delete this testimonial?')">
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
