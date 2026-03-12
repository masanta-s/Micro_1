package com.contact.entity;

import java.io.Serializable;
import java.util.Objects;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class PEmailId implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "email_type", length = 50, nullable = false)
    private String emailType;

    @Column(name = "is_primary", nullable = false)
    private Boolean isPrimary = false;

    public PEmailId() {}

    public PEmailId(Long userId, String emailType) {
        this.userId = userId;
        this.emailType = emailType;
    }

    public PEmailId(Long userId, String emailType, Boolean isPrimary) {
        this.userId = userId;
        this.emailType = emailType;
        this.isPrimary = isPrimary;
    }

    // getters / setters
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getEmailType() { return emailType; }
    public void setEmailType(String emailType) { this.emailType = emailType; }

    public Boolean getIsPrimary() { return isPrimary; }
    public void setIsPrimary(Boolean isPrimary) { this.isPrimary = isPrimary; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PEmailId)) return false;
        PEmailId that = (PEmailId) o;
        return Objects.equals(userId, that.userId) &&
                Objects.equals(emailType, that.emailType) &&
                Objects.equals(isPrimary, that.isPrimary);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, emailType, isPrimary);
    }

    @Override
    public String toString() {
        return "PEmailId{userId=" + userId + ", emailType='" + emailType + "'}";
    }
}