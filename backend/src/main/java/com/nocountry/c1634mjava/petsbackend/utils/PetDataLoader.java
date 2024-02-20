package com.nocountry.c1634mjava.petsbackend.utils;

import com.nocountry.c1634mjava.petsbackend.models.Pet;
import com.nocountry.c1634mjava.petsbackend.services.IPetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PetDataLoader implements CommandLineRunner {

    @Autowired
    private IPetService petService;


    @Override
    public void run(String... args) throws Exception {
        loadPetData();
    }

    private void loadPetData() {

        Pet pet1 = new Pet();
        pet1.setName("Max");
        pet1.setCity("Resistencia");
        pet1.setSpecies("gato");
        pet1.setAge(24L); // 2 years
        pet1.setSize("G");
        pet1.setGender("M");
        pet1.setNeutered(true);
        pet1.setInfo("Max es un gato que le encanta dormir");
        pet1.setBreed("bengalí");
        pet1.setAdopted(false);
        pet1.setImages(List.of("https://cdn2.thecatapi.com/images/4td.jpg"));

        Pet pet2 = new Pet();
        pet2.setName("Pelusa");
        pet2.setCity("Resistencia");
        pet2.setSpecies("gato");
        pet2.setAge(3L); // 3 months
        pet2.setSize("P");
        pet2.setGender("M");
        pet2.setNeutered(false);
        pet2.setInfo("Tiene unos meses");
        pet2.setBreed("No lo se");
        pet2.setAdopted(false);
        pet2.setImages(List.of("https://cdn2.thecatapi.com/images/89p.jpg"));

        Pet pet3 = new Pet();
        pet3.setName("Victor");
        pet3.setCity("Resistencia");
        pet3.setSpecies("gato");
        pet3.setAge(12L); // 1 year
        pet3.setSize("G");
        pet3.setGender("M");
        pet3.setNeutered(true);
        pet3.setInfo("Es muy amable y sociable");
        pet3.setBreed("Siamés");
        pet3.setAdopted(false);
        pet3.setImages(List.of("https://cdn2.thecatapi.com/images/stVqmJmi7.jpg"));

        Pet pet4 = new Pet();
        pet4.setName("Bucky");
        pet4.setCity("Resistencia");
        pet4.setSpecies("perro");
        pet4.setAge(36L); // 3 años
        pet4.setSize("G");
        pet4.setGender("M");
        pet4.setNeutered(true);
        pet4.setInfo("Lorem ipsum");
        pet4.setBreed("bengalí");
        pet4.setAdopted(false);
        pet4.setImages(List.of("https://cdn2.thedogapi.com/images/Syszjx9Em_1280.jpg"));

        Pet pet5 = new Pet();
        pet5.setName("Alma");
        pet5.setCity("Resistencia");
        pet5.setSpecies("perro");
        pet5.setAge(2L); // 2 years
        pet5.setSize("G");
        pet5.setGender("F");
        pet5.setNeutered(true);
        pet5.setInfo("Lorem ipsum");
        pet5.setBreed("bengalí");
        pet5.setAdopted(false);
        pet5.setImages(List.of("https://cdn2.thedogapi.com/images/BjFmVohkU.jpg"));

        petService.savePets(List.of(pet1, pet2, pet3, pet4, pet5));

    }
}
