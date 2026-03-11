package com.gateway.apigateway.security;

import io.jsonwebtoken.Claims;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.List;

@Component
public class JwtAuthenticationFilter implements GlobalFilter {

    private final JwtUtil jwtUtil;

    public JwtAuthenticationFilter(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    private static final Logger log =
            LoggerFactory.getLogger(JwtAuthenticationFilter.class);

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {

        String path = exchange.getRequest().getURI().getPath();

        // 🔓 Public endpoints
        if (path.startsWith("/auth")) {
            return chain.filter(exchange);
        }

        String authHeader = exchange.getRequest()
                .getHeaders()
                .getFirst(HttpHeaders.AUTHORIZATION);

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }

        String token = authHeader.substring(7);

        try {
            Claims claims = jwtUtil.parseToken(token);

            if (jwtUtil.isExpired(claims)) {
                exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                return exchange.getResponse().setComplete();
            }

            List<String> roles = jwtUtil.getRoles(claims);
            List<String> finalRoles = (roles == null) ? List.of() : roles;

            // 🔐 ROUTE-BASED AUTHORIZATION
            if (path.startsWith("/admin") && !finalRoles.contains("ROLE_ADMIN")) {
                exchange.getResponse().setStatusCode(HttpStatus.FORBIDDEN);
                byte[] bytes = "Admin role required".getBytes();
                DataBuffer buffer = exchange.getResponse()
                        .bufferFactory()
                        .wrap(bytes);

                return exchange.getResponse().writeWith(Mono.just(buffer));
            }

            if (path.startsWith("/contacts") && !finalRoles.contains("ROLE_ADMIN")) {
                exchange.getResponse().setStatusCode(HttpStatus.FORBIDDEN);
                byte[] bytes = "Admin role required".getBytes();
                DataBuffer buffer = exchange.getResponse()
                        .bufferFactory()
                        .wrap(bytes);

                return exchange.getResponse().writeWith(Mono.just(buffer));
            }

            if (path.startsWith("/users") && !(finalRoles.contains("ROLE_USER") || finalRoles.contains("ROLE_ADMIN"))) {
                exchange.getResponse().setStatusCode(HttpStatus.FORBIDDEN);
                byte[] bytes = "Admin role or User role required".getBytes();
                DataBuffer buffer = exchange.getResponse()
                        .bufferFactory()
                        .wrap(bytes);

                return exchange.getResponse().writeWith(Mono.just(buffer));
            }

            // ✅ Forward headers
            exchange = exchange.mutate()
                    .request(r -> r
                            .header("X-User-Id", claims.getSubject())
                            .header("X-Roles", String.join(",", finalRoles))
                    )
                    .build();

            return chain.filter(exchange);

        } catch (Exception e) {

            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);

            byte[] bytes = "Invalid or expired token".getBytes();

            DataBuffer buffer = exchange.getResponse()
                    .bufferFactory()
                    .wrap(bytes);

            return exchange.getResponse().writeWith(Mono.just(buffer));
        }
    }


    private Mono<Void> unauthorized(ServerWebExchange exchange) {
        exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
        return exchange.getResponse().setComplete();
    }
}
