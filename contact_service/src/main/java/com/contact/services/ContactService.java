package com.contact.services;

import com.contact.entity.Contact;

import java.util.List;

public interface ContactService {
    public List<Contact> getContactByID(long id);
}
