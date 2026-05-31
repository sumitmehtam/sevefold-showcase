CREATE DATABASE IF NOT EXISTS sevenfold CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE sevenfold;

CREATE TABLE IF NOT EXISTS admins (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(190) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS leads (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  clinic_name VARCHAR(160) NOT NULL,
  email VARCHAR(190) NOT NULL,
  phone VARCHAR(40) NOT NULL,
  service VARCHAR(120) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX leads_email_index (email),
  INDEX leads_service_index (service),
  INDEX leads_created_at_index (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS case_studies (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(190) NOT NULL,
  slug VARCHAR(190) NOT NULL UNIQUE,
  client_name VARCHAR(190) NOT NULL,
  industry VARCHAR(190) NOT NULL,
  featured_image VARCHAR(255) NULL,
  challenge TEXT NOT NULL,
  solution TEXT NOT NULL,
  results TEXT NOT NULL,
  traffic_growth INT NOT NULL DEFAULT 0,
  lead_growth INT NOT NULL DEFAULT 0,
  ranking_growth INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX case_studies_slug_index (slug),
  INDEX case_studies_created_at_index (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS testimonials (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(160) NOT NULL,
  designation VARCHAR(160) NOT NULL,
  company VARCHAR(160) NOT NULL,
  image VARCHAR(255) NULL,
  review TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX testimonials_created_at_index (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS faqs (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  question VARCHAR(255) NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX faqs_created_at_index (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO admins (name, email, password)
VALUES ('SevenFold Admin', 'admin@sevenfold.health', '$2y$12$6oyO4EXTrrkjyvV79rdo0OKEElsl11XFFT60zRPey2b9ldQcaNqrW')
ON DUPLICATE KEY UPDATE email = email;

INSERT INTO faqs (question, answer)
VALUES
('How is healthcare SEO different from normal SEO?', 'Healthcare SEO has stricter trust, accuracy and local-intent requirements. SevenFold builds technical, local and content systems around patient search behavior.'),
('Can you maintain an existing clinic website?', 'Yes. SevenFold can manage updates, backups, monitoring, speed improvements and content changes for an existing clinic website.'),
('What AI automations are safest for clinics?', 'SevenFold focuses on operational workflows such as reminders, lead follow-up, routing and review requests.')
ON DUPLICATE KEY UPDATE question = question;
