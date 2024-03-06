package com.nocountry.c1634mjava.petsbackend.mappers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestContactDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseContactDTO;
import com.nocountry.c1634mjava.petsbackend.models.Contact;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ContactMapper {

    List<ResponseContactDTO> toResponseContactDTOList(List<Contact> contacts);

    Contact toContact(RequestContactDTO requestContactDTO);

    ResponseContactDTO toResponseContactDTO(Contact savedContact);
}
