package com.gateway.apigateway.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class FallbackController {

    @GetMapping("/fallback/user")
    public Map<String, String> userFallback() {
        return Map.of(
                "message", "User service is currently unavailable. Please try again later."
        );
    }

    @GetMapping("/fallback/contact")
    public Map<String, String> contactFallback() {
        return Map.of(
                "message", "Contact service is currently unavailable. Please try again later."
        );
    }

    @GetMapping("/fallback/pickvalues")
    public Map<String, String> pickValueFallback() {
        return Map.of(
                "message", "Pick value list service is currently unavailable. Please try again later."
        );
    }
}
