package com.nocountry.c1634mjava.petsbackend.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseUserProfileDTO {
    private String firstname;
    private String lastname;
    private String email;
    private String city;
    private String profileImage;
    private String phone;
    private boolean pets;
    private boolean kids;
}
