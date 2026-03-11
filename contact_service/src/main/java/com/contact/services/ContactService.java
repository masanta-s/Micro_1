package com.contact.services;

import com.contact.entity.PEmail;
import com.contact.entity.PPhone;

import java.util.List;
import java.util.Optional;

public interface ContactService {

    // Email
    List<PEmail> getEmailsByUserId(Long userId);
    List<PEmail> getEmailsByUserIdAndType(Long userId, String emailType);
    List<PEmail> getPrimaryEmailsByUserId(Long userId);
    PEmail createEmail(Long userId, PEmail email);
    Optional<PEmail> updateEmail(Long userId, String emailType, PEmail payload);
    void deleteEmail(Long userId, String emailType);

    // Phone
    List<PPhone> getPhonesByUserId(Long userId);
    List<PPhone> getPhonesByUserIdAndType(Long userId, String phoneType);
    PPhone createPhone(Long userId, PPhone phone);
    Optional<PPhone> updatePhone(Long userId, String phoneType, PPhone payload);
    void deletePhone(Long userId, String phoneType);
}