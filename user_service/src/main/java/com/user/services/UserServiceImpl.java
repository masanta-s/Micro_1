package com.user.services;

import com.user.entity.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class UserServiceImpl implements UserService{

    List<User> users = List.of(
            new User(1001L, "cool_coder01", "555-0101"),
            new User(1002L, "star_player22", "555-0102"),
            new User(1003L, "tech_guru7", "555-0103"),
            new User(1004L, "skywalker_x", "555-0104"),
            new User(1005L, "pixel_master", "555-0105"),
            new User(1006L, "neon_flash", "555-0106"),
            new User(1007L, "code_ninja99", "555-0107"),
            new User(1008L, "lunar_wave", "555-0108")
    );

    @Override
    public User getUserById(long id) {
        return users.stream().filter(user -> user.getUserId() == id).findAny().orElse(null);
    }
}
