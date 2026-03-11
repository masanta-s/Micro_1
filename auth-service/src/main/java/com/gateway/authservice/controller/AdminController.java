package com.gateway.authservice.controller;

import com.gateway.authservice.dto.RegisterRequest;
import com.gateway.authservice.service.AuthService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AuthService authService;

    public AdminController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public String createUser(@RequestBody RegisterRequest request) {
        authService.register(request.getUsername(), request.getPassword());
        return "User registered successfully";
    }
}
