package com.gateway.apigateway.security;

import org.springframework.boot.context.properties.ConfigurationProperties;

// 🛑 REMOVE @Component or @Configuration if they are here
@ConfigurationProperties(prefix = "security.jwt")
public class JwtProperties {
    private String secret;
    private long expiration;

    // Standard getters and setters are required
    public String getSecret() { return secret; }
    public void setSecret(String secret) { this.secret = secret; }
    public long getExpiration() { return expiration; }
    public void setExpiration(long expiration) { this.expiration = expiration; }
}