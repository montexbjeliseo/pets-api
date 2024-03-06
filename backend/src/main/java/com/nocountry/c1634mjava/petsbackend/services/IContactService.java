package com.nocountry.c1634mjava.petsbackend.services;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestContactDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseContactDTO;

import java.util.List;

public interface IContactService {

    public List<ResponseContactDTO> getAllContacts (int offset, int limit);

    public ResponseContactDTO createContact (RequestContactDTO requestContactDTO);
}
