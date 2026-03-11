package com.contact.controller;

import com.contact.entity.PEmail;
import com.contact.entity.PPhone;
import com.contact.services.ContactService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/contacts")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    // GET all contacts (emails + phones)
    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getContacts(@PathVariable("userId") long userId) {
        List<PEmail> emails = contactService.getEmailsByUserId(userId);
        List<PPhone> phones = contactService.getPhonesByUserId(userId);

        HashMap<String, Object> response = new HashMap<>();
        response.put("emails", emails);
        response.put("phones", phones);
        return ResponseEntity.ok(response);
    }

    // EMAIL endpoints
    @GetMapping("/user/{userId}/email")
    public ResponseEntity<?> getContactEmail(@PathVariable("userId") long userId) {
        List<PEmail> emails = contactService.getEmailsByUserId(userId);
        return ResponseEntity.ok(new HashMap<String,Object>() {{ put("emails", emails); }});
    }

    @GetMapping("/user/{userId}/email/{emailType}")
    public ResponseEntity<?> getContactEmailByType(@PathVariable("userId") long userId,
                                                   @PathVariable("emailType") String emailType) {
        List<PEmail> emails = contactService.getEmailsByUserIdAndType(userId, emailType);
        return ResponseEntity.ok(new HashMap<String,Object>() {{ put("emails", emails); }});
    }

    @PostMapping("/user/{userId}/email")
    public ResponseEntity<PEmail> createEmail(@PathVariable("userId") long userId,
                                              @RequestBody PEmail email) {
        // service will set composite id and persist
        return ResponseEntity.ok(contactService.createEmail(userId, email));
    }

    @PutMapping("/user/{userId}/email/{emailType}")
    public ResponseEntity<?> replaceEmail(@PathVariable Long userId,
                                          @PathVariable String emailType,
                                          @RequestBody PEmail email) {
        Optional<PEmail> updated = contactService.updateEmail(userId, emailType, email);
        return updated.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PatchMapping("/user/{userId}/email/{emailType}")
    public ResponseEntity<?> patchEmail(@PathVariable Long userId,
                                        @PathVariable String emailType,
                                        @RequestBody PEmail email) {
        Optional<PEmail> updated = contactService.updateEmail(userId, emailType, email);
        return updated.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/user/{userId}/email/{emailType}")
    public ResponseEntity<Void> deleteEmail(@PathVariable Long userId,
                                            @PathVariable String emailType) {
        contactService.deleteEmail(userId, emailType);
        return ResponseEntity.noContent().build();
    }

    // PHONE endpoints
    @GetMapping("/user/{userId}/phone")
    public ResponseEntity<?> getContactPhone(@PathVariable("userId") long userId) {
        List<PPhone> phones = contactService.getPhonesByUserId(userId);
        return ResponseEntity.ok(new HashMap<String,Object>() {{ put("phones", phones); }});
    }

    @GetMapping("/user/{userId}/phone/{phoneType}")
    public ResponseEntity<?> getContactPhoneByType(@PathVariable("userId") long userId,
                                                   @PathVariable("phoneType") String phoneType) {
        List<PPhone> phones = contactService.getPhonesByUserIdAndType(userId, phoneType);
        return ResponseEntity.ok(new HashMap<String,Object>() {{ put("phones", phones); }});
    }

    @PostMapping("/user/{userId}/phone")
    public ResponseEntity<PPhone> createPhone(@PathVariable("userId") long userId,
                                              @RequestBody PPhone phone) {
        return ResponseEntity.ok(contactService.createPhone(userId, phone));
    }

    @PutMapping("/user/{userId}/phone/{phoneType}")
    public ResponseEntity<?> replacePhone(@PathVariable Long userId,
                                          @PathVariable String phoneType,
                                          @RequestBody PPhone phone) {
        Optional<PPhone> updated = contactService.updatePhone(userId, phoneType, phone);
        return updated.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PatchMapping("/user/{userId}/phone/{phoneType}")
    public ResponseEntity<?> patchPhone(@PathVariable Long userId,
                                        @PathVariable String phoneType,
                                        @RequestBody PPhone phone) {
        Optional<PPhone> updated = contactService.updatePhone(userId, phoneType, phone);
        return updated.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/user/{userId}/phone/{phoneType}")
    public ResponseEntity<Void> deletePhone(@PathVariable Long userId,
                                            @PathVariable String phoneType) {
        contactService.deletePhone(userId, phoneType);
        return ResponseEntity.noContent().build();
    }
}