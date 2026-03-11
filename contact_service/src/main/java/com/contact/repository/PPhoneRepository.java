package com.contact.repository;

import com.contact.entity.PPhone;
import com.contact.entity.PPhoneId;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PPhoneRepository extends JpaRepository<PPhone, PPhoneId> {

    List<PPhone> findByIdUserId(Long userId);

    List<PPhone> findByIdUserIdAndIdPhoneTypeIgnoreCase(Long userId, String phoneType);
}