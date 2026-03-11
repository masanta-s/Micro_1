package com.gateway.authservice.controller;

import com.gateway.authservice.dto.LoginRequest;
import com.gateway.authservice.dto.LoginResponse;
import com.gateway.authservice.service.AuthService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return authService.login(request.getUsername(), request.getPassword());
    }

    @PostMapping("/refresh")
    public LoginResponse refreshToken(@RequestBody Map<String, String> body) {
        return authService.refreshToken(body.get("refreshToken"));
    }
}
