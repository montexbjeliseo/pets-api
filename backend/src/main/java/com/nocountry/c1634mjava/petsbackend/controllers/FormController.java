
package com.nocountry.c1634mjava.petsbackend.controllers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestFormDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseFormDTO;
import com.nocountry.c1634mjava.petsbackend.services.IFormService;
import com.nocountry.c1634mjava.petsbackend.utils.Constants;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Forms Controller", description = "Form Management endpoints")
@RestController
@RequestMapping(Constants.Endpoints.FORMS)
@RequiredArgsConstructor

public class FormController {
    
     private final IFormService formService;
     
     @PostMapping(Constants.Endpoints.ID)
     @ResponseStatus(HttpStatus.CREATED)
     public ResponseFormDTO createForm(@PathVariable Long id, @Valid @RequestBody RequestFormDTO requestFormDTO){
         
         return formService.createForm(id, requestFormDTO);
     }
}
