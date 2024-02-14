package com.nocountry.c1634mjava.petsbackend.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RequestCreatePetDTO {

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Name is required")
    private String city;

    @NotBlank(message = "Species is required")
    private String species;

    @NotNull(message = "Age is required")
    private Long age;

    @NotBlank(message = "Size is required")
    private String size;

    @NotBlank(message = "Gender is required")
    private String gender;

    @NotNull(message = "Neutered is required")
    private Boolean neutered;

    @NotBlank(message = "Info is required")
    private String info;


    private String breed;

    @NotNull(message = "Adopted is required")
    private Boolean adopted = false;

    @NotNull(message = "Images are required")
    private String[] images;
}
