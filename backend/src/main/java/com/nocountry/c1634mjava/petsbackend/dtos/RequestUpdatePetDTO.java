package com.nocountry.c1634mjava.petsbackend.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RequestUpdatePetDTO {
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
    private String[] images;
}
