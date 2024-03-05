package com.nocountry.c1634mjava.petsbackend.models;

import jakarta.persistence.*;
import java.util.HashSet;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "pets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    private Boolean adopted;
    
    private Boolean approval = false;
    
    @ManyToOne
    private User user;
    
    @OneToMany(mappedBy = "pet", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Form> forms = new HashSet<>();


    @ElementCollection
    private List<String> images;
    
    
    public void approvalReady() {
        this.approval = true;
    }

    public void approvalPending() {
        this.approval = false;
    }
}
