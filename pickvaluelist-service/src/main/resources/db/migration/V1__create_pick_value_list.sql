CREATE TABLE pick_value_list (
                                 value_list_id VARCHAR(100) NOT NULL,
                                 external_code VARCHAR(50) NOT NULL,
                                 parent_external_code VARCHAR(50),
                                 label VARCHAR(255),
                                 status VARCHAR(5) NOT NULL,

                                 created_at TIMESTAMP DEFAULT now(),
                                 created_by_id BIGINT,
                                 created_by_username VARCHAR(100),

                                 changed_at TIMESTAMP,
                                 changed_by_id BIGINT,
                                 changed_by_username VARCHAR(100),

                                 PRIMARY KEY (value_list_id, external_code, status)
);