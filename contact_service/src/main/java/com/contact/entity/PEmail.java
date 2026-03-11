package com.contact.entity;

import jakarta.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "p_email")
public class PEmail {

    @EmbeddedId
    private PEmailId id;

    @Column(name = "email_address", length = 255, nullable = false)
    private String emailAddress;

    @Column(name = "is_primary", nullable = false)
    private Boolean isPrimary = false;

    @Column(name = "created_at", columnDefinition = "timestamp with time zone")
    private OffsetDateTime createdAt;

    // audit: numeric id of actor (from authdb.users.id)
    @Column(name = "created_by_id")
    private Long createdById;

    @Column(name = "created_by_username", length = 255)
    private String createdByUsername;

    // audit for updates
    @Column(name = "changed_by_id")
    private Long changedById;

    @Column(name = "changed_by_username", length = 255)
    private String changedByUsername;

    public PEmail() {}

    // getters / setters

    public PEmailId getId() { return id; }
    public void setId(PEmailId id) { this.id = id; }

    public Long getUserId() { return id == null ? null : id.getUserId(); }
    public void setUserId(Long userId) {
        if (this.id == null) this.id = new PEmailId();
        this.id.setUserId(userId);
    }

    public String getEmailType() { return id == null ? null : id.getEmailType(); }
    public void setEmailType(String emailType) {
        if (this.id == null) this.id = new PEmailId();
        this.id.setEmailType(emailType);
    }

    public String getEmailAddress() { return emailAddress; }
    public void setEmailAddress(String emailAddress) { this.emailAddress = emailAddress; }

    public Boolean getIsPrimary() { return isPrimary; }
    public void setIsPrimary(Boolean isPrimary) { this.isPrimary = isPrimary; }

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