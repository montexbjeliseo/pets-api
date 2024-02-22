
package com.nocountry.c1634mjava.petsbackend.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "forms")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    
    @NotBlank
    private String firstname;

    @NotBlank
    private String lastname;

    private String city;

    @NotBlank
    @Email
    private String email;

    private String phone;

    @Getter(value = AccessLevel.NONE)
    @Setter(value = AccessLevel.NONE)
    private Boolean pets;

    @Getter(value = AccessLevel.NONE)
    @Setter(value = AccessLevel.NONE)
    private Boolean kids;


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
