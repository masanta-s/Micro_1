package com.contact.services;

import com.contact.entity.PEmail;
import com.contact.entity.PEmailId;
import com.contact.entity.PPhone;
import com.contact.entity.PPhoneId;
import com.contact.repository.PEmailRepository;
import com.contact.repository.PPhoneRepository;
import com.contact.security.CurrentUserContext;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ContactServiceImpl implements ContactService {

    private final PEmailRepository emailRepo;
    private final PPhoneRepository phoneRepo;
    private final AuthService authService;

    public ContactServiceImpl(PEmailRepository emailRepo,
                              PPhoneRepository phoneRepo,
                              AuthService authService) {
        this.emailRepo = emailRepo;
        this.phoneRepo = phoneRepo;
        this.authService = authService;
    }

    @Override
    public List<PEmail> getEmailsByUserId(Long userId) {
        return emailRepo.findByIdUserId(userId);
    }

    @Override
    public List<PEmail> getEmailsByUserIdAndType(Long userId, String emailType) {
        if (emailType == null || emailType.isBlank()) {
            return getEmailsByUserId(userId);
        }
        return emailRepo.findByIdUserIdAndIdEmailTypeIgnoreCase(userId, emailType);
    }

    @Override
    public List<PEmail> getPrimaryEmailsByUserId(Long userId) {
        return emailRepo.findByIdUserIdAndIsPrimaryTrue(userId);
    }

    @Override
    public PEmail createEmail(Long userId, PEmail email) {
        AuthService.AuthUserResponse owner = authService.requireUser(userId);
        AuthService.AuthUserResponse actor = resolveActor(userId);

        if (email.getEmailType() == null || email.getEmailType().isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "emailType is required");
        }

        email.setId(new PEmailId(owner.id(), email.getEmailType()));
        email.setCreatedAt(OffsetDateTime.now());
        email.setCreatedById(actor.id());
        email.setCreatedByUsername(actor.username());
        email.setChangedById(actor.id());
        email.setChangedByUsername(actor.username());

        if (email.getIsPrimary() == null) {
            email.setIsPrimary(false);
        }

        return emailRepo.save(email);
    }

    @Override
    public Optional<PEmail> updateEmail(Long userId, String emailType, PEmail payload) {
        authService.requireUser(userId);
        AuthService.AuthUserResponse actor = resolveActor(userId);

        PEmailId id = new PEmailId(userId, emailType);
        return emailRepo.findById(id).map(existing -> {
            if (payload.getEmailAddress() != null) {
                existing.setEmailAddress(payload.getEmailAddress());
            }
            if (payload.getIsPrimary() != null) {
                existing.setIsPrimary(payload.getIsPrimary());
            }
            existing.setChangedById(actor.id());
            existing.setChangedByUsername(actor.username());
            return emailRepo.save(existing);
        });
    }

    @Override
    public void deleteEmail(Long userId, String emailType) {
        authService.requireUser(userId);
        emailRepo.deleteById(new PEmailId(userId, emailType));
    }

    @Override
    public List<PPhone> getPhonesByUserId(Long userId) {
        return phoneRepo.findByIdUserId(userId);
    }

    @Override
    public List<PPhone> getPhonesByUserIdAndType(Long userId, String phoneType) {
        if (phoneType == null || phoneType.isBlank()) {
            return getPhonesByUserId(userId);
        }
        return phoneRepo.findByIdUserIdAndIdPhoneTypeIgnoreCase(userId, phoneType);
    }

    @Override
    public PPhone createPhone(Long userId, PPhone phone) {
        AuthService.AuthUserResponse owner = authService.requireUser(userId);
        AuthService.AuthUserResponse actor = resolveActor(userId);

        if (phone.getPhoneType() == null || phone.getPhoneType().isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "phoneType is required");
        }

        phone.setId(new PPhoneId(owner.id(), phone.getPhoneType()));
        phone.setCreatedAt(OffsetDateTime.now());
        phone.setCreatedById(actor.id());
        phone.setCreatedByUsername(actor.username());
        phone.setChangedById(actor.id());
        phone.setChangedByUsername(actor.username());

        return phoneRepo.save(phone);
    }

    @Override
    public Optional<PPhone> updatePhone(Long userId, String phoneType, PPhone payload) {
        authService.requireUser(userId);
        AuthService.AuthUserResponse actor = resolveActor(userId);

        PPhoneId id = new PPhoneId(userId, phoneType);
        return phoneRepo.findById(id).map(existing -> {
            if (payload.getCountryCode() != null) {
                existing.setCountryCode(payload.getCountryCode());
            }
            if (payload.getAreaCode() != null) {
                existing.setAreaCode(payload.getAreaCode());
            }
            if (payload.getPhoneNumber() != null) {
                existing.setPhoneNumber(payload.getPhoneNumber());
            }
            existing.setChangedById(actor.id());
            existing.setChangedByUsername(actor.username());
            return phoneRepo.save(existing);
        });
    }

    @Override
    public void deletePhone(Long userId, String phoneType) {
        authService.requireUser(userId);
        phoneRepo.deleteById(new PPhoneId(userId, phoneType));
    }

    private AuthService.AuthUserResponse resolveActor(Long fallbackUserId) {
        Long actorUserId = CurrentUserContext.getUserId();
        if (actorUserId == null) {
            actorUserId = fallbackUserId;
        }
        return authService.requireUser(actorUserId);
    }
}
