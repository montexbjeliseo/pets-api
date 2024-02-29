package com.nocountry.c1634mjava.petsbackend.dtos;

import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RequestUpdateUserDTO {

    private String firstname;

    private String lastname;

    private String city;

    private String profileImage;
}
