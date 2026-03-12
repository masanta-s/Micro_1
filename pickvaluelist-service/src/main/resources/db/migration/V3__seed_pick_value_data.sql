INSERT INTO pick_value_list (value_list_id, external_code, parent_external_code, label, status, created_at)
VALUES
    ('ecEmailType', 'P', NULL, 'Personal Email Address', 'A', NOW()),
    ('ecEmailType', 'B', NULL, 'Work Email Address', 'A', NOW()),
    ('ecPhoneType', 'PHWK', NULL, 'Work Phone Primary', 'A', NOW()),
    ('ecPhoneType', 'H', NULL, 'Home', 'A', NOW()),
    ('ecPhoneType', 'C', NULL, 'Cell', 'A', NOW()),
    ('ecPhoneType', 'B', NULL, 'Business', 'A', NOW()),
    ('ecPhoneType', 'PHWKP', NULL, 'Work Mobile', 'A', NOW()),
    ('ecPhoneType', 'HM', NULL, 'Home', 'A', NOW()),
    ('ecPhoneType', 'O', NULL, 'Work', 'A', NOW())
ON CONFLICT (value_list_id, external_code, status) DO NOTHING;
