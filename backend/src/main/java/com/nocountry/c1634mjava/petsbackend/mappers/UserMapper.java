package com.nocountry.c1634mjava.petsbackend.mappers;


import com.nocountry.c1634mjava.petsbackend.dtos.RequestRegisterUserDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseRegisterUserDTO;
import com.nocountry.c1634mjava.petsbackend.models.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User toUser(RequestRegisterUserDTO requestRegisterUserDTO);

    ResponseRegisterUserDTO toResponseRegisterUserDTO(User user);

}
