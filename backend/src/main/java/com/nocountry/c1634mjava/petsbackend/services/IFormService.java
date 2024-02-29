
package com.nocountry.c1634mjava.petsbackend.services;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestFormDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseFormDTO;


public interface IFormService {
    
    public ResponseFormDTO createForm (Long id, RequestFormDTO requestFormDTO);
}
