<?php
/** @var string $pageTitle */
$admin = current_admin();
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= e($pageTitle ?? 'Admin') ?> | SevenFold</title>
  <style>
    :root { --blue:#2563eb; --navy:#0f172a; --muted:#475569; --line:#dbe5f0; --soft:#eff6ff; --success:#10b981; }
    * { box-sizing: border-box; }
    body { margin:0; background:#f8fafc; color:var(--navy); font-family: Inter, Geist, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    a { color:inherit; text-decoration:none; }
    .shell { display:grid; min-height:100vh; grid-template-columns:260px 1fr; }
    .sidebar { border-right:1px solid var(--line); background:white; padding:24px; position:sticky; top:0; height:100vh; }
    .brand { display:flex; gap:10px; align-items:center; font-weight:800; margin-bottom:28px; }
    .mark { display:grid; place-items:center; width:34px; height:34px; border-radius:8px; background:var(--blue); color:white; }
    .nav { display:flex; flex-direction:column; gap:6px; }
    .nav a { padding:11px 12px; border-radius:8px; color:var(--muted); font-weight:650; font-size:14px; }
    .nav a:hover, .nav a.active { background:var(--soft); color:var(--blue); }
    .main { padding:32px; }
    .topbar { display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:24px; }
    .topbar h1 { margin:0; font-size:30px; letter-spacing:0; }
    .muted { color:var(--muted); }
    .grid { display:grid; gap:16px; }
    .grid-3 { grid-template-columns:repeat(3, minmax(0,1fr)); }
    .card { background:white; border:1px solid var(--line); border-radius:10px; padding:20px; box-shadow:0 16px 40px rgba(15,23,42,.05); }
    .stat { font-size:34px; font-weight:800; margin-top:8px; }
    .table { width:100%; border-collapse:collapse; background:white; border:1px solid var(--line); border-radius:10px; overflow:hidden; }
    .table th, .table td { padding:13px 14px; border-bottom:1px solid var(--line); text-align:left; vertical-align:top; font-size:14px; }
    .table th { background:#f8fafc; color:var(--muted); font-size:12px; text-transform:uppercase; }
    .table tr:last-child td { border-bottom:0; }
    .form { display:grid; gap:14px; }
    .form.two { grid-template-columns:repeat(2, minmax(0, 1fr)); }
    label { display:grid; gap:7px; font-size:13px; font-weight:700; }
    input, textarea { width:100%; border:1px solid var(--line); border-radius:8px; padding:11px 12px; font:inherit; background:white; }
    textarea { min-height:120px; resize:vertical; }
    button, .button { display:inline-flex; align-items:center; justify-content:center; gap:8px; border:0; border-radius:8px; padding:11px 14px; background:var(--blue); color:white; font-weight:800; cursor:pointer; }
    .button.secondary { background:var(--soft); color:var(--blue); }
    .button.danger { background:#dc2626; color:white; }
    .actions { display:flex; gap:8px; flex-wrap:wrap; }
    .flash { margin-bottom:18px; border:1px solid #bbf7d0; background:#ecfdf5; color:#047857; padding:12px 14px; border-radius:8px; font-weight:700; }
    .login { min-height:100vh; display:grid; place-items:center; padding:24px; background:linear-gradient(135deg,#eff6ff,#fff); }
    .login-card { width:min(100%, 420px); }
    @media (max-width: 900px) { .shell { grid-template-columns:1fr; } .sidebar { position:static; height:auto; } .grid-3,.form.two { grid-template-columns:1fr; } }
  </style>
</head>
<body>
<?php if ($admin): ?>
<div class="shell">
  <aside class="sidebar">
    <a class="brand" href="/admin/index.php"><span class="mark">S</span> SEVENFOLD</a>
    <nav class="nav">
      <a href="/admin/index.php">Dashboard</a>
      <a href="/admin/leads.php">Leads</a>
      <a href="/admin/case-studies.php">Case Studies</a>
      <a href="/admin/testimonials.php">Testimonials</a>
      <a href="/admin/faqs.php">FAQs</a>
      <a href="/admin/uploads.php">Uploads</a>
      <a href="/admin/logout.php">Logout</a>
    </nav>
  </aside>
  <main class="main">
<?php endif; ?>
