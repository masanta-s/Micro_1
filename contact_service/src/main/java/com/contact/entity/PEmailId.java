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

    public PEmailId() {}

    public PEmailId(Long userId, String emailType) {
        this.userId = userId;
        this.emailType = emailType;
    }

    // getters / setters
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getEmailType() { return emailType; }
    public void setEmailType(String emailType) { this.emailType = emailType; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PEmailId)) return false;
        PEmailId that = (PEmailId) o;
        return Objects.equals(userId, that.userId) &&
                Objects.equals(emailType, that.emailType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, emailType);
    }

    @Override
    public String toString() {
        return "PEmailId{userId=" + userId + ", emailType='" + emailType + "'}";
    }
}