package com.nocountry.c1634mjava.petsbackend.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ResponseContactDTO {

    private Long id;
    private String name;
    private String email;
    private String message;
}
