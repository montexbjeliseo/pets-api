package com.nocountry.c1634mjava.petsbackend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "pets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String city;
    private String species;
    private Long age;
    private String size;
    private String gender;
    private Boolean neutered;
    private String info;
    private String breed;
    private Boolean adopted;

    @ElementCollection
    private List<String> images;
}
