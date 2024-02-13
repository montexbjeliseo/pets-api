package com.nocountry.c1634mjava.petsbackend.services;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestCreatePetDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponsePetDTO;

public interface IPetService {
    public ResponsePetDTO createPet(RequestCreatePetDTO requestCreatePetDTO);
}
