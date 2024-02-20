package com.nocountry.c1634mjava.petsbackend.controllers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestLoginDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.RequestRegisterUserDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseLoginDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseRegisterUserDTO;
import com.nocountry.c1634mjava.petsbackend.services.IUserService;
import com.nocountry.c1634mjava.petsbackend.utils.Constants;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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


    @Operation(summary = "Register User")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "User created successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request")
    })
    @PostMapping(Constants.Endpoints.REGISTER)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseRegisterUserDTO registerUser(@Valid @RequestBody RequestRegisterUserDTO requestRegisterUserDTO) {
        return userService.registerUser(requestRegisterUserDTO);
    }


    @Operation(summary = "Login User")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User logged successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request")
    })
    @PostMapping(Constants.Endpoints.LOGIN)
    @ResponseStatus(HttpStatus.OK)
    public ResponseLoginDTO loginUser(@Valid @RequestBody RequestLoginDTO requestLoginDTO) {
        return userService.loginUser(requestLoginDTO);
    }
}
