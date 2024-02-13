package com.nocountry.c1634mjava.petsbackend.mappers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestCreatePetDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponsePetDTO;
import com.nocountry.c1634mjava.petsbackend.models.Pet;
import org.mapstruct.Mapper;
@Mapper(componentModel = "spring")
public interface PetMapper {

    Pet toPet(RequestCreatePetDTO requestCreatePetDTO);

    ResponsePetDTO toResponsePetDTO(Pet savedPet);
}