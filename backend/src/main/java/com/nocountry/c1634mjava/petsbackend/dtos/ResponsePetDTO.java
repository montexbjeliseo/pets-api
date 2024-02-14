package com.nocountry.c1634mjava.petsbackend.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ResponsePetDTO {

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
    private Boolean adopted = false;
    private String[] images;
}
