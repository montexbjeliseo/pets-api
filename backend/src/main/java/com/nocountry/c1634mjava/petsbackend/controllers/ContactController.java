package com.nocountry.c1634mjava.petsbackend.controllers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestContactDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseContactDTO;
import com.nocountry.c1634mjava.petsbackend.services.IContactService;
import com.nocountry.c1634mjava.petsbackend.utils.Constants;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(Constants.Endpoints.CONTACTS)
@RequiredArgsConstructor
public class ContactController {


    private final IContactService contactService;

    @Operation(summary = "Get Contacts", description = "Get all contacts", security = @SecurityRequirement(name = "bearerAuth"))
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Contacts retrieved successfully"),
            @ApiResponse(responseCode = "404", description = "Contacts not found")
    })
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ResponseContactDTO> getAllContacts(@RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "50") int limit) {
        return contactService.getAllContacts(offset, limit);
    }

    @Operation(summary = "Create Contact", description = "Create a new contact", security = @SecurityRequirement(name = "bearerAuth"))
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Contact created successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid request body")
    })
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseContactDTO createContact(@Valid @RequestBody RequestContactDTO requestContactDTO) {
        return contactService.createContact(requestContactDTO);
    }

}
