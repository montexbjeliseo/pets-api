
package com.nocountry.c1634mjava.petsbackend.dtos;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RequestFormDTO {
    
    @NotBlank
    private String firstname;

    @NotBlank
    private String lastname;

    private String city;

    @NotBlank
    @Email
    private String email;

    private String phone;

    private Boolean pets;

    private Boolean kids;

}
