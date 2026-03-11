package com.contact.config;

import com.contact.security.CurrentUserContext;
import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class AuditorProvider implements AuditorAware<Long> {

    @Override
    public Optional<Long> getCurrentAuditor() {

        /*
        In production this should come from:
        - JWT token
        - Spring SecurityContext
        - Auth service
        */

        Long userId = CurrentUserContext.getUserId();

        return Optional.ofNullable(userId);
    }
}