package com.user.entity;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

public class User {
    private long userId;
    private String name;
    private String phone;

    List<Contact> contacts = new ArrayList<>();

    public User(String phone, long userId, String name, List<Contact> contacts) {
        this.phone = phone;
        this.userId = userId;
        this.name = name;
        this.contacts = contacts;
    }

    public User(long userId, String name, String phone) {
        this.userId = userId;
        this.name = name;
        this.phone = phone;
    }

    public User() {
    }

    public long getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(List<Contact> contacts) {
        this.contacts = contacts;
    }
}
