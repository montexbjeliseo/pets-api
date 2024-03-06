package com.nocountry.c1634mjava.petsbackend.services.impl;

import com.nocountry.c1634mjava.petsbackend.dtos.RequestContactDTO;
import com.nocountry.c1634mjava.petsbackend.dtos.ResponseContactDTO;
import com.nocountry.c1634mjava.petsbackend.mappers.ContactMapper;
import com.nocountry.c1634mjava.petsbackend.models.Contact;
import com.nocountry.c1634mjava.petsbackend.repositories.ContactRepository;
import com.nocountry.c1634mjava.petsbackend.services.IContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements IContactService {

    private final ContactRepository contactRepository;

    @Autowired
    private ContactMapper contactMapper;

    @Override
    public List<ResponseContactDTO> getAllContacts(int offset, int limit) {

        Pageable pageable = Pageable.ofSize(limit).withPage(offset);

        Page<Contact> contactPage = contactRepository.findAll(pageable);

        List<Contact> contacts = contactRepository.findAll();

        return contactMapper.toResponseContactDTOList(contacts);
    }

    @Override
    public ResponseContactDTO createContact(RequestContactDTO requestContactDTO) {

        Contact contact = contactMapper.toContact(requestContactDTO);

        Contact savedContact = contactRepository.save(contact);

        return contactMapper.toResponseContactDTO(savedContact);
    }
}
