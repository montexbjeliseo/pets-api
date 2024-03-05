
package com.nocountry.c1634mjava.petsbackend.controllers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestFormDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseFormDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponsePetFormsDTO;
import com.nocountry.c1634mjava.petsbackend.services.IFormService;
import com.nocountry.c1634mjava.petsbackend.utils.Constants;
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
     
     @PostMapping(Constants.Endpoints.ID)
     @ResponseStatus(HttpStatus.CREATED)
     public ResponseFormDTO createForm(@PathVariable Long id, @Valid @RequestBody RequestFormDTO requestFormDTO){

         return formService.createForm(id, requestFormDTO);
     }

     @GetMapping
     @ResponseStatus(HttpStatus.OK)
     public List<ResponseFormDTO> getForms(@RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "10") int limit){
         return formService.getAllForms(offset, limit);
     }

     @GetMapping(Constants.Endpoints.ID)
     @ResponseStatus(HttpStatus.OK)
     public ResponsePetFormsDTO getForms(@PathVariable Long id){
         return formService.getForms(id);
     }
}
