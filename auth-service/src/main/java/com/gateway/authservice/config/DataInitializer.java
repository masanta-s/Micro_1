package com.gateway.authservice.config;

import com.gateway.authservice.entity.Role;
import com.gateway.authservice.entity.User;
import com.gateway.authservice.repository.RoleRepository;
import com.gateway.authservice.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Set;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initUsers(
            UserRepository userRepository,
            RoleRepository roleRepository,
            BCryptPasswordEncoder encoder
    ) {

        return args -> {

            Role userRole = roleRepository.findByName("ROLE_USER")
                    .orElseGet(() -> roleRepository.save(new Role(null,"ROLE_USER")));

            Role adminRole = roleRepository.findByName("ROLE_ADMIN")
                    .orElseGet(() -> roleRepository.save(new Role(null,"ROLE_ADMIN")));

            if(userRepository.findByUsername("admin").isEmpty()){

                User admin = new User();

                admin.setUsername("admin");
                admin.setPassword(encoder.encode("123"));
                admin.setEnabled(true);
                admin.setRoles(Set.of(adminRole));

                userRepository.save(admin);

                System.out.println("Admin user created");
            }
        };
    }
}