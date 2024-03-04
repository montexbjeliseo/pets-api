package com.nocountry.c1634mjava.petsbackend.services.impl;

import com.nocountry.c1634mjava.petsbackend.dtos.*;
import com.nocountry.c1634mjava.petsbackend.exceptions.PasswordMismatchException;
import com.nocountry.c1634mjava.petsbackend.exceptions.ResourceNotFoundException;
import com.nocountry.c1634mjava.petsbackend.exceptions.ValueAlreadyInUseException;
import com.nocountry.c1634mjava.petsbackend.mappers.UserMapper;
import com.nocountry.c1634mjava.petsbackend.models.Role;
import com.nocountry.c1634mjava.petsbackend.models.User;
import com.nocountry.c1634mjava.petsbackend.repositories.RoleRepository;
import com.nocountry.c1634mjava.petsbackend.repositories.UserRepository;
import com.nocountry.c1634mjava.petsbackend.services.IUserService;
import com.nocountry.c1634mjava.petsbackend.utils.Constants;
import com.nocountry.c1634mjava.petsbackend.utils.JwtUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;


@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
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

        Set<Role> roles = new HashSet<>();

        roles.add(roleRepository.findByName(Constants.Roles.ROLE_USER));

        user.setRoles(roles);
        user.setPassword(passwordEncoder.encode(requestRegisterUserDTO.getPassword()));
        userRepository.save(user);
        return userMapper.toResponseRegisterUserDTO(user);

    }

    @Override
    public ResponseLoginDTO loginUser(RequestLoginDTO requestLoginDTO) {

        if(!userRepository.existsByEmail(requestLoginDTO.getEmail())) {
            throw new ResourceNotFoundException("User not found with email: " + requestLoginDTO.getEmail());
        }

        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(requestLoginDTO.getEmail(), requestLoginDTO.getPassword())
        );

        UserDetails userDetails = (UserDetails) auth.getPrincipal();

        return ResponseLoginDTO.builder()
                .token(jwtUtils.generateToken(userDetails))
                .build();
    }

    @Override
    public ResponseUserProfileDTO getUserProfile() {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        User user = userRepository.findByEmail(auth.getName());

        return userMapper.toResponseUserProfileDTO(user);
    }

    @Override
    public ResponseUserProfileDTO updateProfileDTO(RequestUpdateUserDTO requestUpdateUserDTO) {

        log.info("updateProfileDTO: {}", requestUpdateUserDTO);

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        User user = userRepository.findByEmail(auth.getPrincipal().toString());

        user = userMapper.updateUser(user, requestUpdateUserDTO);

        User savedUser = userRepository.save(user);

        return userMapper.toResponseUserProfileDTO(savedUser);
    }

    public void checkAdmin(String email, String password) {

        if(!userRepository.existsByEmail(email)) {
            User user = new User();
            user.setFirstname("Admin");
            user.setLastname("Admin");
            user.setEmail(email);
            user.setPassword(passwordEncoder.encode(password));
            Set<Role> roles = new HashSet<>();
            roles.add(roleRepository.findByName(Constants.Roles.ROLE_ADMIN));
            user.setRoles(roles);
            userRepository.save(user);
        }

    }
}
