package com.nocountry.c1634mjava.petsbackend.utils;

import com.nocountry.c1634mjava.petsbackend.models.Role;
import com.nocountry.c1634mjava.petsbackend.repositories.RoleRepository;
import com.nocountry.c1634mjava.petsbackend.services.IUserService;
import com.nocountry.c1634mjava.petsbackend.services.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class UserDataLoader implements CommandLineRunner {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private String adminEmail;

    @Autowired
    private String adminPassword;

    @Autowired
    private UserServiceImpl userService;

    @Override
    public void run(String... args) throws Exception {
        loadRoleData();

        if (adminEmail != null && adminPassword != null) {
            userService.checkAdmin(adminEmail, adminPassword);
        } else {
            log.warn("Admin email or password not set");
        }
    }

    public void loadRoleData() {
        if (!roleRepository.existsByName(Constants.Roles.ROLE_ADMIN)) {
            Role adminRole = new Role();
            adminRole.setName(Constants.Roles.ROLE_ADMIN);
            roleRepository.save(adminRole);

        }

        if (!roleRepository.existsByName(Constants.Roles.ROLE_USER)) {
            Role userRole = new Role();
            userRole.setName(Constants.Roles.ROLE_USER);
            roleRepository.save(userRole);
        }
    }
}
