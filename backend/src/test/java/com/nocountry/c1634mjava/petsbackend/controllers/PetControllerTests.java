package com.nocountry.c1634mjava.petsbackend.controllers;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestCreatePetDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponsePetDTO;
import com.nocountry.c1634mjava.petsbackend.services.IPetService;
import com.nocountry.c1634mjava.petsbackend.utils.Constants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class PetControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IPetService petService;

    @Test
    @DisplayName("Test get all pets: Success")
    void testGetAllPets() throws Exception {
        when(petService.getAllPets(Constants.Pagination.PAGE_NUMBER, Constants.Pagination.PAGE_SIZE)).thenReturn(List.of(getResponsePetDTO()));

        mockMvc.perform(get(Constants.Endpoints.PETS))
                .andExpect(status().isOk())
                .andDo(print());

        verify(petService, times(1)).getAllPets(Constants.Pagination.PAGE_NUMBER, Constants.Pagination.PAGE_SIZE);

    }

    public static RequestCreatePetDTO getRequestCreatePetDTO() {
        return RequestCreatePetDTO.builder()
                .age(12L)
                .name("Fido")
                .breed("Siberian")
                .info("Fido is a cute dog")
                .gender("Male")
                .neutered(true)
                .size("C")
                .species("Dog")
                .city("New York")
                .adopted(false)
                .images(new String[]{"https://example.com/image1.jpg", "https://example.com/image2.jpg"})
                .build();
    }

    public static ResponsePetDTO getResponsePetDTO() {

        return ResponsePetDTO.builder()
                .id(1L)
                .name("Fido")
                .city("New York")
                .species("Dog")
                .age(12L)
                .size("C")
                .gender("Male")
                .neutered(true)
                .info("Fido is a cute dog")
                .breed("Siberian")
                .adopted(false)
                .images(new String[]{"https://example.com/image1.jpg", "https://example.com/image2.jpg"})
                .build();
    }

}
