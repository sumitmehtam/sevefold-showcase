<?php
require_once __DIR__ . '/includes/bootstrap.php';
require_admin();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    verify_csrf();

    if (($_POST['action'] ?? '') === 'delete') {
        $statement = db()->prepare('DELETE FROM faqs WHERE id = :id');
        $statement->execute(['id' => (int)($_POST['id'] ?? 0)]);
        flash('FAQ deleted.');
        redirect_to('/admin/faqs.php');
    }

    $statement = db()->prepare('INSERT INTO faqs (question, answer, created_at) VALUES (:question, :answer, NOW())');
    $statement->execute([
        'question' => clean_string($_POST['question'] ?? '', 255),
        'answer' => clean_string($_POST['answer'] ?? '', 2000),
    ]);
    flash('FAQ created.');
    redirect_to('/admin/faqs.php');
}

$pageTitle = 'FAQs';
$items = db()->query('SELECT * FROM faqs ORDER BY created_at DESC')->fetchAll();

require __DIR__ . '/includes/header.php';
?>
<div class="topbar">
  <div>
    <h1>FAQs</h1>
    <p class="muted">Manage healthcare SEO, website maintenance and automation questions.</p>
  </div>
</div>
<?php if ($message = flash()): ?><div class="flash"><?= e($message) ?></div><?php endif; ?>

<div class="card">
  <h2>Add FAQ</h2>
  <form class="form" method="post">
    <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
    <label>Question <input name="question" required></label>
    <label>Answer <textarea name="answer" required></textarea></label>
    <button type="submit">Create FAQ</button>
  </form>
</div>

<div class="card" style="margin-top:18px;">
  <table class="table">
    <thead><tr><th>Question</th><th>Answer</th><th></th></tr></thead>
    <tbody>
      <?php foreach ($items as $item): ?>
        <tr>
          <td><?= e($item['question']) ?></td>
          <td><?= e($item['answer']) ?></td>
          <td>
            <form method="post" onsubmit="return confirm('Delete this FAQ?')">
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
