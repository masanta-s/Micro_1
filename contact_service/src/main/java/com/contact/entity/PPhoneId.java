package com.contact.entity;

import java.io.Serializable;
import java.util.Objects;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class PPhoneId implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "phone_type", length = 50, nullable = false)
    private String phoneType;

    @Column(name = "is_primary", nullable = false)
    private Boolean isPrimary = false;

    public PPhoneId() {}

    public PPhoneId(Long userId, String phoneType, Boolean isPrimary) {
        this.userId = userId;
        this.phoneType = phoneType;
        this.isPrimary = isPrimary;
    }

    // getters / setters
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getPhoneType() { return phoneType; }
    public void setPhoneType(String phoneType) { this.phoneType = phoneType; }

    public Boolean getIsPrimary() { return isPrimary; }
    public void setIsPrimary(Boolean isPrimary) { this.isPrimary = isPrimary; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PPhoneId)) return false;
        PPhoneId that = (PPhoneId) o;
        return Objects.equals(userId, that.userId) &&
                Objects.equals(phoneType, that.phoneType) &&
                Objects.equals(isPrimary, that.isPrimary);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, phoneType, isPrimary);
    }

    @Override
    public String toString() {
        return "PPhoneId{userId=" + userId + ", phoneType='" + phoneType + "', isPrimary=" + isPrimary + "}";
    }
}