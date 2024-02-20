package com.nocountry.c1634mjava.petsbackend.repositories;

import com.nocountry.c1634mjava.petsbackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsByEmail(String email);

    User findByEmail(String email);
}
