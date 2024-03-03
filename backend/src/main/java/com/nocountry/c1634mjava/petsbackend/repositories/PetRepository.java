package com.nocountry.c1634mjava.petsbackend.repositories;

import com.nocountry.c1634mjava.petsbackend.models.Pet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PetRepository extends JpaRepository<Pet, Long> {

    boolean existsByName(String name);

    @Query("SELECT p FROM Pet p WHERE " +
            "(:species is null or p.species = :species) and " +
            "(:city is null or p.city = :city) and " +
            "(:max_age is null or p.age <= :max_age) and " +
            "(:max_age is null or p.age >= :min_age) and " +
            "(:size is null or p.size = :size) and " +
            "(:gender is null or p.gender = :gender)")
    Page<Pet> filterPets(
            @Param("species") String species,
            @Param("city") String city,
            @Param("max_age") String max_age,
            @Param("min_age") String min_age,
            @Param("size") String size,
            @Param("gender") String gender,
            @Param("pageable") Pageable pageable);
}
