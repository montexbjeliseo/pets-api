package com.nocountry.c1634mjava.petsbackend.mappers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestCreatePetDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.RequestUpdatePetDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponsePetDTO;
import com.nocountry.c1634mjava.petsbackend.models.Pet;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PetMapper {

    Pet toPet(RequestCreatePetDTO requestCreatePetDTO);

    ResponsePetDTO toResponsePetDTO(Pet savedPet);

    List<ResponsePetDTO> toResponsePetDTOList(List<Pet> pets);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Pet updatePet(RequestUpdatePetDTO requestUpdatePetDTO, @MappingTarget Pet pet);
}
