package com.nocountry.c1634mjava.petsbackend.controllers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestCreatePetDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponsePetDTO;
import com.nocountry.c1634mjava.petsbackend.services.IPetService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pets")
@RequiredArgsConstructor
public class PetController {

    private final IPetService petService;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponsePetDTO createPet(@Valid @RequestBody RequestCreatePetDTO requestCreatePetDTO) {
        return petService.createPet(requestCreatePetDTO);
    }
}
