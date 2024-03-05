
package com.nocountry.c1634mjava.petsbackend.services.impl;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestFormDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseFormDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponsePetFormsDTO;
import com.nocountry.c1634mjava.petsbackend.exceptions.NoContentException;
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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class FormServiceImpl implements IFormService {
    
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

    @Override
    public List<ResponseFormDTO> getAllForms(int offset, int limit) {

        Pageable pageable = PageRequest.of(offset / limit, limit);

        Page<Form> forms = formRepository.findAll(pageable);

        if(forms.isEmpty()){
            throw new NoContentException("No forms found");
        }

        return formMapper.toResponseFormDTOList(forms.getContent());
    }

    @Override
    public ResponsePetFormsDTO getForms(Long id) {

        Optional<Pet> pet = petRepository.findById(id);


        if(pet.isEmpty()){
            throw new ResourceNotFoundException("Pet not found");
        }

        /*if (pet.get().getForms().isEmpty()) {
            throw new NoContentException("No forms found");
        }*/

        return formMapper.toResponsePetFormsDTO(pet.get());
    }

}
