package com.contact.services;

import com.contact.entity.Contact;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContactServiceImpl implements ContactService{

    List<Contact> list = List.of(
            new Contact(1L, "alice@gmail.com", "Alice", 1001L),
            new Contact(2L, "bob@gmail.com", "Bob", 1001L),

            // User 1002
            new Contact(3L, "charlie@gmail.com", "Charlie", 1002L),

            // User 1003
            new Contact(4L, "david@gmail.com", "David", 1003L),
            new Contact(5L, "emma@gmail.com", "Emma", 1003L),

            // User 1004
            new Contact(6L, "frank@gmail.com", "Frank", 1004L),

            // User 1005
            new Contact(7L, "grace@gmail.com", "Grace", 1005L),
            new Contact(8L, "henry@gmail.com", "Henry", 1005L),

            // User 1006
            new Contact(9L, "ivy@gmail.com", "Ivy", 1006L),

            // User 1007
            new Contact(10L, "jack@gmail.com", "Jack", 1007L),
            new Contact(11L, "kate@gmail.com", "Kate", 1007L),

            // User 1008
            new Contact(12L, "leo@gmail.com", "Leo", 1008L)
    );

    @Override
    public List<Contact> getContactByID(long id) {
        return list.stream().filter(contact -> contact.getUserId() == id).collect(Collectors.toList());
    }
}
