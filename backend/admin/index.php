<?php
require_once __DIR__ . '/includes/bootstrap.php';
require_admin();

$pageTitle = 'Dashboard';
$counts = [
    'Leads' => (int)db()->query('SELECT COUNT(*) FROM leads')->fetchColumn(),
    'Case Studies' => (int)db()->query('SELECT COUNT(*) FROM case_studies')->fetchColumn(),
    'Testimonials' => (int)db()->query('SELECT COUNT(*) FROM testimonials')->fetchColumn(),
    'FAQs' => (int)db()->query('SELECT COUNT(*) FROM faqs')->fetchColumn(),
];
$recentLeads = db()->query('SELECT * FROM leads ORDER BY created_at DESC LIMIT 6')->fetchAll();

require __DIR__ . '/includes/header.php';
?>
<div class="topbar">
  <div>
    <h1>Dashboard</h1>
    <p class="muted">Welcome back, <?= e(current_admin()['name']) ?>.</p>
  </div>
  <a class="button" href="/admin/leads.php">Manage Leads</a>
</div>

<?php if ($message = flash()): ?><div class="flash"><?= e($message) ?></div><?php endif; ?>

<div class="grid grid-3">
  <?php foreach ($counts as $label => $count): ?>
    <div class="card">
      <div class="muted"><?= e($label) ?></div>
      <div class="stat"><?= e($count) ?></div>
    </div>
  <?php endforeach; ?>
</div>

<div class="card" style="margin-top:18px;">
  <h2>Recent Leads</h2>
  <table class="table">
    <thead><tr><th>Name</th><th>Clinic</th><th>Service</th><th>Created</th></tr></thead>
    <tbody>
      <?php foreach ($recentLeads as $lead): ?>
        <tr>
          <td><?= e($lead['name']) ?></td>
          <td><?= e($lead['clinic_name']) ?></td>
          <td><?= e($lead['service']) ?></td>
          <td><?= e($lead['created_at']) ?></td>
        </tr>
      <?php endforeach; ?>
    </tbody>
  </table>
</div>
<?php require __DIR__ . '/includes/footer.php'; ?>
