
package com.nocountry.c1634mjava.petsbackend.services.impl;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestFormDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseFormDTO;
import com.nocountry.c1634mjava.petsbackend.exceptions.ResourceNotFoundException;
import com.nocountry.c1634mjava.petsbackend.mappers.FormMapper;
import com.nocountry.c1634mjava.petsbackend.models.Form;
import com.nocountry.c1634mjava.petsbackend.models.Pet;
import com.nocountry.c1634mjava.petsbackend.repositories.FormRepository;
import com.nocountry.c1634mjava.petsbackend.repositories.PetRepository;
import com.nocountry.c1634mjava.petsbackend.services.IFormService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class FormServiceImpl implements IFormService{
    
    private final FormRepository formRepository;
    private final PetRepository petRepository;

    @Autowired
    private FormMapper formMapper;
    
    @Override
    public ResponseFormDTO createForm(Long id, RequestFormDTO requestFormDTO) {
        
        if(!petRepository.existsById(id)){
            throw new ResourceNotFoundException("Pet not found");
        }
        
        Pet pet = petRepository.findById(id).get();
        
        Form form = formMapper.toForm(requestFormDTO);
        
        form.setPet(pet);
        
        Form savedForm = formRepository.save(form);
        
        return formMapper.toResponseFormDTO(savedForm);
        
    }
    
    
}
