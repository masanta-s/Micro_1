CREATE TABLE IF NOT EXISTS p_email (
    user_id BIGINT NOT NULL,
    email_type VARCHAR(50) NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE,
    created_by_id BIGINT,
    created_by_username VARCHAR(255),
    changed_by_id BIGINT,
    changed_by_username VARCHAR(255),
    CONSTRAINT pk_p_email PRIMARY KEY (user_id, email_type)
);

CREATE TABLE IF NOT EXISTS p_phone (
    user_id BIGINT NOT NULL,
    phone_type VARCHAR(50) NOT NULL,
    country_code VARCHAR(10),
    area_code VARCHAR(10),
    phone_number VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE,
    created_by_id BIGINT,
    created_by_username VARCHAR(255),
    changed_by_id BIGINT,
    changed_by_username VARCHAR(255),
    CONSTRAINT pk_p_phone PRIMARY KEY (user_id, phone_type)
);
