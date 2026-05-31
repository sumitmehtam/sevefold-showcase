<?php
declare(strict_types=1);

function clean_string(mixed $value, int $maxLength = 500): string
{
    $value = is_string($value) ? trim($value) : '';
    $value = preg_replace('/\s+/', ' ', $value) ?? '';

    return mb_substr($value, 0, $maxLength);
}

function validate_required(array $data, array $fields): array
{
    $errors = [];

    foreach ($fields as $field) {
        if (!isset($data[$field]) || clean_string($data[$field]) === '') {
            $errors[$field] = ucfirst(str_replace('_', ' ', $field)) . ' is required.';
        }
    }

    return $errors;
}

function validate_lead(array $data): array
{
    $errors = validate_required($data, ['name', 'clinic_name', 'email', 'phone', 'service', 'message']);

    if (isset($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Enter a valid email address.';
    }

    return $errors;
}
