<?php
require_once __DIR__ . '/includes/bootstrap.php';
require_admin();

$uploadDir = __DIR__ . '/../uploads';

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    verify_csrf();

    if (!isset($_FILES['image']) || !is_uploaded_file($_FILES['image']['tmp_name'])) {
        flash('Choose an image to upload.');
        redirect_to('/admin/uploads.php');
    }

    $allowed = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];
    $mime = mime_content_type($_FILES['image']['tmp_name']) ?: '';

    if (!isset($allowed[$mime])) {
        flash('Only JPG, PNG and WEBP images are allowed.');
        redirect_to('/admin/uploads.php');
    }

    if ((int)$_FILES['image']['size'] > 4 * 1024 * 1024) {
        flash('Image must be under 4 MB.');
        redirect_to('/admin/uploads.php');
    }

    $name = bin2hex(random_bytes(16)) . '.' . $allowed[$mime];
    move_uploaded_file($_FILES['image']['tmp_name'], $uploadDir . '/' . $name);
    flash('Image uploaded: /uploads/' . $name);
    redirect_to('/admin/uploads.php');
}

$pageTitle = 'Uploads';
$files = array_values(array_filter(scandir($uploadDir) ?: [], fn ($file) => !in_array($file, ['.', '..'], true)));

require __DIR__ . '/includes/header.php';
?>
<div class="topbar">
  <div>
    <h1>Uploads</h1>
    <p class="muted">Upload images for case studies and testimonials.</p>
  </div>
</div>
<?php if ($message = flash()): ?><div class="flash"><?= e($message) ?></div><?php endif; ?>

<div class="card">
  <form class="form" method="post" enctype="multipart/form-data">
    <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
    <label>Image <input type="file" name="image" accept="image/jpeg,image/png,image/webp" required></label>
    <button type="submit">Upload Image</button>
  </form>
</div>

<div class="card" style="margin-top:18px;">
  <h2>Uploaded Files</h2>
  <table class="table">
    <thead><tr><th>File</th><th>URL</th></tr></thead>
    <tbody>
      <?php foreach ($files as $file): ?>
        <tr>
          <td><?= e($file) ?></td>
          <td><code>/uploads/<?= e($file) ?></code></td>
        </tr>
      <?php endforeach; ?>
    </tbody>
  </table>
</div>
<?php require __DIR__ . '/includes/footer.php'; ?>
