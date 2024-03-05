package com.nocountry.c1634mjava.petsbackend.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ResponseMinifiedFormDTO {
    private Long id;

    private String firstname;

    private String lastname;

    private String city;

    private String email;

    private String phone;

    private Boolean pets;

    private Boolean kids;
}
