package com.contact.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientException;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class AuthService {

    private final RestClient restClient;

    public AuthService(@Value("${auth.service.base-url}") String authServiceBaseUrl) {
        this.restClient = RestClient.builder()
                .baseUrl(authServiceBaseUrl)
                .build();
    }

    public Optional<AuthUserResponse> getUserById(Long userId) {
        try {
            AuthUserResponse response = restClient.get()
                    .uri("/internal/users/{userId}", userId)
                    .retrieve()
                    .onStatus(status -> status.value() == 404, (request, httpResponse) -> {
                        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "userId " + userId + " not found in auth-service");
                    })
                    .body(AuthUserResponse.class);
            return Optional.ofNullable(response);
        } catch (ResponseStatusException ex) {
            if (ex.getStatusCode() == HttpStatus.NOT_FOUND) {
                return Optional.empty();
            }
            throw ex;
        } catch (RestClientException ex) {
            throw new ResponseStatusException(HttpStatus.SERVICE_UNAVAILABLE,
                    "auth-service is unavailable", ex);
        }
    }

    public AuthUserResponse requireUser(Long userId) {
        return getUserById(userId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "userId " + userId + " not found in auth-service"
                ));
    }

    public record AuthUserResponse(Long id, String username) {
    }
}
