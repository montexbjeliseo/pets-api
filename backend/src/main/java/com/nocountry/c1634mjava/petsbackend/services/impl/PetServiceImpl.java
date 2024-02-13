package com.nocountry.c1634mjava.petsbackend.services.impl;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestCreatePetDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponsePetDTO;
import com.nocountry.c1634mjava.petsbackend.mappers.PetMapper;
import com.nocountry.c1634mjava.petsbackend.models.Pet;
import com.nocountry.c1634mjava.petsbackend.repositories.PetRepository;
import com.nocountry.c1634mjava.petsbackend.services.IPetService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PetServiceImpl implements IPetService {

    private final PetRepository petRepository;

    @Autowired
    private PetMapper petMapper;
    @Override
    public ResponsePetDTO createPet(RequestCreatePetDTO requestCreatePetDTO) {
        Pet pet = petMapper.toPet(requestCreatePetDTO);

        Pet savedPet = petRepository.save(pet);

        return petMapper.toResponsePetDTO(savedPet);
    }
}
