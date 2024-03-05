
package com.nocountry.c1634mjava.petsbackend.services;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestFormDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseFormDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponsePetFormsDTO;

import java.util.List;


public interface IFormService {
    
    public ResponseFormDTO createForm (Long id, RequestFormDTO requestFormDTO);

    public List<ResponseFormDTO> getAllForms (int offset, int limit);

    public ResponsePetFormsDTO getForms (Long id);
}
