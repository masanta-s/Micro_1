package com.contact.entity;

import jakarta.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "p_phone")
public class PPhone {

    @EmbeddedId
    private PPhoneId id;

    @Column(name = "country_code", length = 10)
    private String countryCode;

    @Column(name = "area_code", length = 10)
    private String areaCode;

    @Column(name = "phone_number", length = 50, nullable = false)
    private String phoneNumber;

    @Column(name = "created_at", columnDefinition = "timestamp with time zone")
    private OffsetDateTime createdAt;

    @Column(name = "created_by_id")
    private Long createdById;

    @Column(name = "created_by_username", length = 255)
    private String createdByUsername;

    @Column(name = "changed_by_id")
    private Long changedById;

    @Column(name = "changed_by_username", length = 255)
    private String changedByUsername;

    public PPhone() {}

    // getters / setters

    public PPhoneId getId() { return id; }
    public void setId(PPhoneId id) { this.id = id; }

    public Long getUserId() { return id == null ? null : id.getUserId(); }
    public void setUserId(Long userId) {
        if (this.id == null) this.id = new PPhoneId();
        this.id.setUserId(userId);
    }

    public String getPhoneType() { return id == null ? null : id.getPhoneType(); }
    public void setPhoneType(String phoneType) {
        if (this.id == null) this.id = new PPhoneId();
        this.id.setPhoneType(phoneType);
    }

    public String getCountryCode() { return countryCode; }
    public void setCountryCode(String countryCode) { this.countryCode = countryCode; }

    public String getAreaCode() { return areaCode; }
    public void setAreaCode(String areaCode) { this.areaCode = areaCode; }

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    public OffsetDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(OffsetDateTime createdAt) { this.createdAt = createdAt; }

    public Long getCreatedById() { return createdById; }
    public void setCreatedById(Long createdById) { this.createdById = createdById; }

    public String getCreatedByUsername() { return createdByUsername; }
    public void setCreatedByUsername(String createdByUsername) { this.createdByUsername = createdByUsername; }

    public Long getChangedById() { return changedById; }
    public void setChangedById(Long changedById) { this.changedById = changedById; }

    public String getChangedByUsername() { return changedByUsername; }
    public void setChangedByUsername(String changedByUsername) { this.changedByUsername = changedByUsername; }
}