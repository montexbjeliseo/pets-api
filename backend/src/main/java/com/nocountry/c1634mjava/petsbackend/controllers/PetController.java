package com.nocountry.c1634mjava.petsbackend.controllers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestCreatePetDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.RequestUpdatePetDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponsePetDTO;
import com.nocountry.c1634mjava.petsbackend.services.IPetService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;
import org.springframework.http.ResponseEntity;

@Tag(name = "Pet Controller", description = "Pet Management endpoints")
@RestController
@RequestMapping("/api/pets")
@RequiredArgsConstructor
public class PetController {

    private final IPetService petService;

    @Operation(summary = "Create a pet profile")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Pet created successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid request body")
    })
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponsePetDTO createPet(@Valid @RequestBody RequestCreatePetDTO requestCreatePetDTO) {
        return petService.createPet(requestCreatePetDTO);
    }

    @Operation(summary = "Get all pets")
    @ApiResponse(responseCode = "200", description = "Pets retrieved successfully")
    @ApiResponse(responseCode = "204", description = "No pets found")
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public List<ResponsePetDTO> getAllPets(
            @Parameter(name = "offset", description = "The offset of the first pet to retrieve")
            @RequestParam(defaultValue = "0") int offset,

            @Parameter(name = "limit", description = "The maximum number of pets to retrieve")
            @RequestParam(defaultValue = "10") int limit,

            @Parameter(name = "species", description = "The species of the pet")
            @RequestParam(required = false) String species,

            @Parameter(name = "city", description = "The city where the pet lives")
            @RequestParam(required = false) String city,

            @Parameter(name = "age", description = "The age of the pet")
            @RequestParam(required = false) String age,

            @Parameter(name = "size", description = "The size of the pet")
            @RequestParam(required = false) String size,

            @Parameter(name = "gender", description = "The gender of the pet")
            @RequestParam(required = false) String gender
            ) {

        if(Stream.of(species, city, age, size, gender).allMatch(Objects::isNull)) {
            return petService.getAllPets(offset, limit);
        }

        return petService.getAllPets(offset, limit, species, city, age, size, gender);
    }

    @Operation(summary = "Update a pet profile")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Pet updated successfully"),
            @ApiResponse(responseCode = "404", description = "Pet not found"),
            @ApiResponse(responseCode = "400", description = "Invalid request body"),
            @ApiResponse(responseCode = "403", description = "No permissions to update pet")
    })
    @PatchMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponsePetDTO updatePet(
            @Parameter(name = "id", description = "The id of the pet to update", required = true)
            @PathVariable Long id, @Valid @RequestBody RequestUpdatePetDTO requestUpdatePetDTO) {
        return petService.updatePet(id, requestUpdatePetDTO);
    }

    @Operation(summary = "Delete a pet profile")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Pet deleted successfully"),
            @ApiResponse(responseCode = "404", description = "Pet not found")
    })
    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping ("/{id}")
    public ResponseEntity <String> deletePet(@PathVariable Long id) {
       
        boolean removed = petService.deletePet(id);
        if(removed) {
            return new ResponseEntity<>("La mascota fue borrada exitosamente", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("La mascota con ese id no existe", HttpStatus.NOT_FOUND);
        }
        
    }
}
