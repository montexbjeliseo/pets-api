package com.nocountry.c1634mjava.petsbackend.controllers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestCreatePetDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponsePetDTO;
import com.nocountry.c1634mjava.petsbackend.services.IPetService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ResponsePetDTO> getAllPets(
            @RequestParam(defaultValue = "0") int offset,
            @RequestParam(defaultValue = "10") int limit,

            @RequestParam(required = false) String species,
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String age,
            @RequestParam(required = false) String size,
            @RequestParam(required = false) String gender
            ) {

        if(species != null || city != null || age != null || size != null || gender != null) {
            return petService.getAllPets(offset, limit, species, city, age, size, gender);
        }

        return petService.getAllPets(offset, limit);
    }
}
