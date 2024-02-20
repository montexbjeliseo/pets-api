package com.nocountry.c1634mjava.petsbackend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;


@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String firstname;

    @NotBlank
    private String lastname;

    @NotBlank
    private String city;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String phone;

    @Getter(value = AccessLevel.NONE)
    @Setter(value = AccessLevel.NONE)
    @NotNull
    private Boolean pets;

    @Getter(value = AccessLevel.NONE)
    @Setter(value = AccessLevel.NONE)
    @NotNull
    private Boolean kids;

    @NotNull
    @ElementCollection
    private List<String> images;

    public boolean hasPets(){
        return this.pets;
    }

    public boolean hasKids(){
        return this.kids;
    }

    public void setPets(boolean pets){
        this.pets = pets;
    }

    public void setKids(boolean kids){
        this.kids = kids;
    }
}
