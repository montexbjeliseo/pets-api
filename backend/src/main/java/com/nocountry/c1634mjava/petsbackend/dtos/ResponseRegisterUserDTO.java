package com.nocountry.c1634mjava.petsbackend.dtos;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ResponseRegisterUserDTO {

    private String firstname;
    private String lastname;
    private String email;
}
