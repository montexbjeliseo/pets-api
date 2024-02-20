package com.nocountry.c1634mjava.petsbackend.services.impl;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestLoginDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.RequestRegisterUserDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseLoginDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseRegisterUserDTO;
import com.nocountry.c1634mjava.petsbackend.exceptions.PasswordMismatchException;
import com.nocountry.c1634mjava.petsbackend.exceptions.ValueAlreadyInUseException;
import com.nocountry.c1634mjava.petsbackend.mappers.UserMapper;
import com.nocountry.c1634mjava.petsbackend.models.User;
import com.nocountry.c1634mjava.petsbackend.repositories.RoleRepository;
import com.nocountry.c1634mjava.petsbackend.repositories.UserRepository;
import com.nocountry.c1634mjava.petsbackend.services.IUserService;
import com.nocountry.c1634mjava.petsbackend.utils.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    @Autowired
    private UserMapper userMapper;

    @Override
    public ResponseRegisterUserDTO registerUser(RequestRegisterUserDTO requestRegisterUserDTO) {

        if(userRepository.existsByEmail(requestRegisterUserDTO.getEmail())) {
            throw new ValueAlreadyInUseException("Email already in use");
        }

        if(!requestRegisterUserDTO.getPassword().equals(requestRegisterUserDTO.getPassword2())) {
            throw new PasswordMismatchException("Passwords do not match");
        }

        User user = userMapper.toUser(requestRegisterUserDTO);
        user.setPassword(passwordEncoder.encode(requestRegisterUserDTO.getPassword()));
        userRepository.save(user);
        return userMapper.toResponseRegisterUserDTO(user);

    }

    @Override
    public ResponseLoginDTO loginUser(RequestLoginDTO requestLoginDTO) {
        return null;
    }
}
