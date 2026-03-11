ALTER TABLE user_roles
    DROP CONSTRAINT IF EXISTS user_roles_user_id_fkey;

ALTER TABLE user_roles
    DROP CONSTRAINT IF EXISTS user_roles_role_id_fkey;

ALTER TABLE roles
    ALTER COLUMN id TYPE BIGINT;

ALTER TABLE users
    ALTER COLUMN id TYPE BIGINT;

ALTER TABLE user_roles
    ALTER COLUMN user_id TYPE BIGINT;

ALTER TABLE user_roles
    ALTER COLUMN role_id TYPE BIGINT;

ALTER TABLE user_roles
    ADD CONSTRAINT user_roles_user_id_fkey
        FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE user_roles
    ADD CONSTRAINT user_roles_role_id_fkey
        FOREIGN KEY (role_id) REFERENCES roles (id);
