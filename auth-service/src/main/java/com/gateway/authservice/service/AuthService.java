package com.gateway.authservice.service;

import com.gateway.authservice.dto.LoginResponse;
import com.gateway.authservice.dto.UserLookupResponse;
import com.gateway.authservice.entity.Role;
import com.gateway.authservice.entity.User;
import com.gateway.authservice.repository.RoleRepository;
import com.gateway.authservice.repository.UserRepository;
import com.gateway.authservice.security.JwtService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final BCryptPasswordEncoder encoder;
    private final JwtService jwtService;

    public AuthService(
            UserRepository userRepository,
            RoleRepository roleRepository,
            BCryptPasswordEncoder encoder,
            JwtService jwtService) {

        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.encoder = encoder;
        this.jwtService = jwtService;
    }

    public LoginResponse login(String username, String password) {

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!encoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        List<String> roles = user.getRoles()
                .stream()
                .map(Role::getName)
                .toList();

        String accessToken = jwtService.generateAccessToken(
                user.getId().toString(),
                roles
        );

        String refreshToken = jwtService.generateRefreshToken(user.getId().toString());
        user.setRefreshToken(refreshToken);
        userRepository.save(user);

        return new LoginResponse(accessToken, refreshToken);
    }

    public LoginResponse refreshToken(String refreshToken) {

        String userId = jwtService.extractUserId(refreshToken);

        User user = userRepository.findById(Long.parseLong(userId))
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!refreshToken.equals(user.getRefreshToken())) {
            throw new RuntimeException("Invalid refresh token");
        }

        List<String> roles = user.getRoles()
                .stream()
                .map(Role::getName)
                .toList();

        String newAccessToken = jwtService.generateAccessToken(
                user.getId().toString(),
                roles
        );

        return new LoginResponse(newAccessToken, refreshToken);
    }

    public void register(String username, String password) {

        if (userRepository.findByUsername(username).isPresent()) {
            throw new RuntimeException("Username already exists");
        }

        User user = new User();
        user.setUsername(username);
        user.setPassword(encoder.encode(password));
        user.setEnabled(true);

        Role role = roleRepository
                .findByName("ROLE_USER")
                .orElseThrow();

        user.setRoles(Set.of(role));

        userRepository.save(user);
    }

    public Optional<UserLookupResponse> findUserLookupById(Long userId) {
        return userRepository.findById(userId)
                .map(user -> new UserLookupResponse(user.getId(), user.getUsername()));
    }
}
