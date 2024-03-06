package com.nocountry.c1634mjava.petsbackend.repositories;

import com.nocountry.c1634mjava.petsbackend.models.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
