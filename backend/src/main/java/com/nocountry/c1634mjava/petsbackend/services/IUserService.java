package com.nocountry.c1634mjava.petsbackend.services;

import com.nocountry.c1634mjava.petsbackend.dtos.*;

public interface IUserService {

    ResponseRegisterUserDTO registerUser(RequestRegisterUserDTO requestRegisterUserDTO);

    ResponseLoginDTO loginUser(RequestLoginDTO requestLoginDTO);

    ResponseUserProfileDTO getUserProfile();

    ResponseUserProfileDTO updateProfileDTO(RequestUpdateUserDTO requestUpdateUserDTO);
}
