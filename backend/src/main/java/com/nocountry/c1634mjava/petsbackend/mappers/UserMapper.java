package com.nocountry.c1634mjava.petsbackend.mappers;


import com.nocountry.c1634mjava.petsbackend.dtos.RequestRegisterUserDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.RequestUpdateUserDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseRegisterUserDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseUserProfileDTO;
import com.nocountry.c1634mjava.petsbackend.models.User;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User toUser(RequestRegisterUserDTO requestRegisterUserDTO);

    ResponseRegisterUserDTO toResponseRegisterUserDTO(User user);

    ResponseUserProfileDTO toResponseUserProfileDTO(User user);


    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    User updateUser(@MappingTarget User user, RequestUpdateUserDTO requestUpdateUserDTO);
}
