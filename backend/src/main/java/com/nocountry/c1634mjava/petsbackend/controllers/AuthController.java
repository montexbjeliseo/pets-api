package com.nocountry.c1634mjava.petsbackend.controllers;

import com.nocountry.c1634mjava.petsbackend.dtos.*;
import com.nocountry.c1634mjava.petsbackend.services.IUserService;
import com.nocountry.c1634mjava.petsbackend.utils.Constants;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
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


    @Operation(summary = "Get User Profile", security = @SecurityRequirement(name = "bearerAuth"))
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User retrieved successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request")
    })
    @GetMapping(Constants.Endpoints.PROFILE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseUserProfileDTO getUserProfile() {
        return userService.getUserProfile();
    }


    @Operation(summary = "Update User Profile", security = @SecurityRequirement(name = "bearerAuth"))
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User updated successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request")
    })
    @PatchMapping(Constants.Endpoints.PROFILE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseUserProfileDTO updateProfile(@Valid @RequestBody RequestUpdateUserDTO requestUpdateUserDTO) {
        return userService.updateProfileDTO(requestUpdateUserDTO);
    }


    @Operation(summary = "Get all users", security = @SecurityRequirement(name = "bearerAuth"))
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Users retrieved successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request")
    })
    @GetMapping(Constants.Endpoints.USERS)
    @ResponseStatus(HttpStatus.OK)
    public ResponseGetAllUsersDTO getAllUsers(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size
    ) {
        return userService.getAllUsers(page, size);
    }

}
