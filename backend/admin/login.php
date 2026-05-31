<?php
require_once __DIR__ . '/includes/bootstrap.php';

if (current_admin()) {
    redirect_to('/admin/index.php');
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    verify_csrf();

    $email = clean_string($_POST['email'] ?? '', 190);
    $password = is_string($_POST['password'] ?? null) ? $_POST['password'] : '';

    $statement = db()->prepare('SELECT id, name, email, password FROM admins WHERE email = :email LIMIT 1');
    $statement->execute(['email' => $email]);
    $admin = $statement->fetch();

    if ($admin && password_verify($password, $admin['password'])) {
        session_regenerate_id(true);
        $_SESSION['admin'] = [
            'id' => (int)$admin['id'],
            'name' => $admin['name'],
            'email' => $admin['email'],
        ];
        redirect_to('/admin/index.php');
    }

    $error = 'Invalid email or password.';
}

$pageTitle = 'Login';
require __DIR__ . '/includes/header.php';
?>
<div class="login">
  <div class="card login-card">
    <div class="brand"><span class="mark">S</span> SEVENFOLD</div>
    <h1>Admin Login</h1>
    <p class="muted">Manage leads, case studies, testimonials, FAQs and uploads.</p>
    <?php if ($error): ?><p class="flash" style="border-color:#fecaca;background:#fef2f2;color:#b91c1c;"><?= e($error) ?></p><?php endif; ?>
    <form class="form" method="post">
      <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
      <label>Email <input type="email" name="email" required value="admin@sevenfold.health"></label>
      <label>Password <input type="password" name="password" required placeholder="ChangeMe123!"></label>
      <button type="submit">Login</button>
    </form>
  </div>
</div>
<?php require __DIR__ . '/includes/footer.php'; ?>
