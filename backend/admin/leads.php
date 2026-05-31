<?php
require_once __DIR__ . '/includes/bootstrap.php';
require_admin();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['action'] ?? '') === 'delete') {
    verify_csrf();
    $statement = db()->prepare('DELETE FROM leads WHERE id = :id');
    $statement->execute(['id' => (int)($_POST['id'] ?? 0)]);
    flash('Lead deleted.');
    redirect_to('/admin/leads.php');
}

$pageTitle = 'Leads';
$leads = db()->query('SELECT * FROM leads ORDER BY created_at DESC')->fetchAll();

require __DIR__ . '/includes/header.php';
?>
<div class="topbar">
  <div>
    <h1>Leads</h1>
    <p class="muted">Contact form submissions stored in MySQL.</p>
  </div>
</div>
<?php if ($message = flash()): ?><div class="flash"><?= e($message) ?></div><?php endif; ?>
<table class="table">
  <thead><tr><th>Name</th><th>Clinic</th><th>Contact</th><th>Service</th><th>Message</th><th></th></tr></thead>
  <tbody>
    <?php foreach ($leads as $lead): ?>
      <tr>
        <td><?= e($lead['name']) ?><br><span class="muted"><?= e($lead['created_at']) ?></span></td>
        <td><?= e($lead['clinic_name']) ?></td>
        <td><?= e($lead['email']) ?><br><?= e($lead['phone']) ?></td>
        <td><?= e($lead['service']) ?></td>
        <td><?= e($lead['message']) ?></td>
        <td>
          <form method="post" onsubmit="return confirm('Delete this lead?')">
            <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
            <input type="hidden" name="action" value="delete">
            <input type="hidden" name="id" value="<?= e($lead['id']) ?>">
            <button class="button danger" type="submit">Delete</button>
          </form>
        </td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
<?php require __DIR__ . '/includes/footer.php'; ?>
