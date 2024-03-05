
package com.nocountry.c1634mjava.petsbackend.controllers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestFormDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseFormDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponsePetFormsDTO;
import com.nocountry.c1634mjava.petsbackend.services.IFormService;
import com.nocountry.c1634mjava.petsbackend.utils.Constants;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Forms Controller", description = "Form Management endpoints")
@RestController
@RequestMapping(Constants.Endpoints.FORMS)
@RequiredArgsConstructor
public class FormController {
    
     private final IFormService formService;


     @Operation(summary = "Create Form", description = "Creates a new form with the given information", security = @SecurityRequirement(name = "bearerAuth"))
     @ApiResponses(value = {
             @ApiResponse(responseCode = "201", description = "Form created successfully"),
             @ApiResponse(responseCode = "400", description = "Invalid request body")
     })
     @PostMapping(Constants.Endpoints.ID)
     @ResponseStatus(HttpStatus.CREATED)
     public ResponseFormDTO createForm(@PathVariable Long id, @Valid @RequestBody RequestFormDTO requestFormDTO){

         return formService.createForm(id, requestFormDTO);
     }


     @Operation(summary = "Get Forms", description = "Get all forms", security = @SecurityRequirement(name = "bearerAuth"))
     @ApiResponses(value = {
             @ApiResponse(responseCode = "200", description = "Forms retrieved successfully"),
             @ApiResponse(responseCode = "404", description = "Forms not found")
     })
     @GetMapping
     @ResponseStatus(HttpStatus.OK)
     public List<ResponseFormDTO> getForms(@RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "10") int limit){
         return formService.getAllForms(offset, limit);
     }


     @Operation(summary = "Get Forms", description = "Get all forms of a pet", security = @SecurityRequirement(name = "bearerAuth"))
     @ApiResponses(value = {
             @ApiResponse(responseCode = "200", description = "Forms retrieved successfully"),
             @ApiResponse(responseCode = "404", description = "Forms not found")
     })
     @GetMapping(Constants.Endpoints.ID)
     @ResponseStatus(HttpStatus.OK)
     public ResponsePetFormsDTO getForms(@PathVariable Long id){
         return formService.getForms(id);
     }
}
