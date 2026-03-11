package com.contact.repository;

import com.contact.entity.PEmail;
import com.contact.entity.PEmailId;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PEmailRepository extends JpaRepository<PEmail, PEmailId> {

    // find by userId (embedded id property)
    List<PEmail> findByIdUserId(Long userId);

    List<PEmail> findByIdUserIdAndIdEmailTypeIgnoreCase(Long userId, String emailType);

    List<PEmail> findByIdUserIdAndIsPrimaryTrue(Long userId);
}