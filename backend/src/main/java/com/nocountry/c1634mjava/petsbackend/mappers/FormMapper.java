
package com.nocountry.c1634mjava.petsbackend.mappers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestFormDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseFormDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponsePetFormsDTO;
import com.nocountry.c1634mjava.petsbackend.models.Form;
import com.nocountry.c1634mjava.petsbackend.models.Pet;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface FormMapper {
    
    Form toForm(RequestFormDTO requestFormDTO);
    
    ResponseFormDTO toResponseFormDTO(Form form);

    List<ResponseFormDTO> toResponseFormDTOList(List<Form> content);

    ResponsePetFormsDTO toResponsePetFormsDTO(Pet pet);
}
