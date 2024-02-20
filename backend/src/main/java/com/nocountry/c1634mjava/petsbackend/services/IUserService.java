package com.nocountry.c1634mjava.petsbackend.services;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestLoginDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.RequestRegisterUserDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseLoginDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseRegisterUserDTO;

public interface IUserService {

    ResponseRegisterUserDTO registerUser(RequestRegisterUserDTO requestRegisterUserDTO);

    ResponseLoginDTO loginUser(RequestLoginDTO requestLoginDTO);

}
