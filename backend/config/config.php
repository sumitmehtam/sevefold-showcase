<?php
declare(strict_types=1);

function env_value(string $key, string $default = ''): string
{
    $value = $_ENV[$key] ?? getenv($key);

    return is_string($value) && $value !== '' ? $value : $default;
}

define('APP_ENV', env_value('APP_ENV', 'production'));
define('APP_URL', env_value('APP_URL', 'https://sevenfold.health'));
define('CORS_ORIGIN', env_value('CORS_ORIGIN', APP_URL));
define('API_ADMIN_TOKEN', env_value('API_ADMIN_TOKEN', 'change-this-token'));

ini_set('display_errors', APP_ENV === 'local' ? '1' : '0');
ini_set('log_errors', '1');

date_default_timezone_set(env_value('APP_TIMEZONE', 'UTC'));
