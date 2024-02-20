package com.nocountry.c1634mjava.petsbackend.controllers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestRegisterUserDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseRegisterUserDTO;
import com.nocountry.c1634mjava.petsbackend.services.IUserService;
import com.nocountry.c1634mjava.petsbackend.utils.Constants;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Auth Controller", description = "Auth Management")
@RestController
@RequestMapping(Constants.Endpoints.AUTH)
@RequiredArgsConstructor
public class AuthController {

    private final IUserService userService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseRegisterUserDTO registerUser(@Valid @RequestBody RequestRegisterUserDTO requestRegisterUserDTO) {
        return userService.registerUser(requestRegisterUserDTO);
    }
}
