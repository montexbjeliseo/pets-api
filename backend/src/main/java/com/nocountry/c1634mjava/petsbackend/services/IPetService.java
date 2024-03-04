package com.nocountry.c1634mjava.petsbackend.services;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestCreatePetDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.RequestUpdatePetDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponsePetDTO;
import com.nocountry.c1634mjava.petsbackend.models.Pet;

import java.util.List;

public interface IPetService {
    public ResponsePetDTO createPet(RequestCreatePetDTO requestCreatePetDTO);

    public List<ResponsePetDTO> getAllPets(int offset, int limit);
    public List<ResponsePetDTO> getAllPets(int offset, int limit, String species, String city, String max_age, String min_age, String size, String gender);
    public boolean deletePet(Long id);

    public ResponsePetDTO updatePet(Long id, RequestUpdatePetDTO requestUpdatePetDTO);

    public void savePets(List<Pet> pets);

    List<String> getCities();

    List<String> getSpecies();
}
