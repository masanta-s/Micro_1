package com.pickvaluelist.entity;

import jakarta.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name="pick_value_list")
public class PickValue {

    @EmbeddedId
    @AttributeOverrides({
            @AttributeOverride(name = "valueListId", column = @Column(name = "value_list_id")),
            @AttributeOverride(name = "externalCode", column = @Column(name = "external_code")),
            @AttributeOverride(name = "status", column = @Column(name = "status"))
    })
    private PickValueId id;

    @Column(name = "parent_external_code")
    private String parentExternalCode;

    @Column(name = "label")
    private String label;

    @Column(name = "created_at", columnDefinition = "timestamp with time zone")
    private OffsetDateTime createdAt;

    @Column(name = "created_by_id")
    private Long createdById;

    @Column(name = "created_by_username")
    private String createdByUsername;

    @Column(name = "changed_at", columnDefinition = "timestamp with time zone")
    private OffsetDateTime changedAt;

    @Column(name = "changed_by_id")
    private Long changedById;

    @Column(name = "changed_by_username")
    private String changedByUsername;

    public PickValueId getId() {
        return id;
    }

    public void setId(PickValueId id) {
        this.id = id;
    }

    public String getValueListId() {
        return id == null ? null : id.getValueListId();
    }

    public void setValueListId(String valueListId) {
        if (this.id == null) {
            this.id = new PickValueId();
        }
        this.id.setValueListId(valueListId);
    }

    public String getExternalCode() {
        return id == null ? null : id.getExternalCode();
    }

    public void setExternalCode(String externalCode) {
        if (this.id == null) {
            this.id = new PickValueId();
        }
        this.id.setExternalCode(externalCode);
    }

    public String getStatus() {
        return id == null ? null : id.getStatus();
    }

    public void setStatus(String status) {
        if (this.id == null) {
            this.id = new PickValueId();
        }
        this.id.setStatus(status);
    }

    public String getParentExternalCode() {
        return parentExternalCode;
    }

    public void setParentExternalCode(String parentExternalCode) {
        this.parentExternalCode = parentExternalCode;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Long getCreatedById() {
        return createdById;
    }

    public void setCreatedById(Long createdById) {
        this.createdById = createdById;
    }

    public String getCreatedByUsername() {
        return createdByUsername;
    }

    public void setCreatedByUsername(String createdByUsername) {
        this.createdByUsername = createdByUsername;
    }

    public OffsetDateTime getChangedAt() {
        return changedAt;
    }

    public void setChangedAt(OffsetDateTime changedAt) {
        this.changedAt = changedAt;
    }

    public Long getChangedById() {
        return changedById;
    }

    public void setChangedById(Long changedById) {
        this.changedById = changedById;
    }

    public String getChangedByUsername() {
        return changedByUsername;
    }

    public void setChangedByUsername(String changedByUsername) {
        this.changedByUsername = changedByUsername;
    }
}
