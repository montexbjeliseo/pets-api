
package com.nocountry.c1634mjava.petsbackend.mappers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestFormDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseFormDTO;
import com.nocountry.c1634mjava.petsbackend.models.Form;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface FormMapper {
    
    Form toForm(RequestFormDTO requestFormDTO);
    
    ResponseFormDTO toResponseFormDTO(Form form);
    
}
