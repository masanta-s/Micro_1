-- V3__add_audit_columns.sql
ALTER TABLE p_email
    ADD COLUMN IF NOT EXISTS created_by_id BIGINT,
    ADD COLUMN IF NOT EXISTS created_by_username VARCHAR(255),
    ADD COLUMN IF NOT EXISTS changed_by_id BIGINT,
    ADD COLUMN IF NOT EXISTS changed_by_username VARCHAR(255);

ALTER TABLE p_phone
    ADD COLUMN IF NOT EXISTS created_by_id BIGINT,
    ADD COLUMN IF NOT EXISTS created_by_username VARCHAR(255),
    ADD COLUMN IF NOT EXISTS changed_by_id BIGINT,
    ADD COLUMN IF NOT EXISTS changed_by_username VARCHAR(255);