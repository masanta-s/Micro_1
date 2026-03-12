package com.pickvaluelist.entity;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class PickValueId implements Serializable {

    @Column(name = "value_list_id")
    private String valueListId;

    @Column(name = "external_code")
    private String externalCode;

    @Column(name = "status")
    private String status;

    public PickValueId() {}

    public PickValueId(String valueListId, String externalCode, String status) {
        this.valueListId = valueListId;
        this.externalCode = externalCode;
        this.status = status;
    }

    public String getValueListId() {
        return valueListId;
    }

    public void setValueListId(String valueListId) {
        this.valueListId = valueListId;
    }

    public String getExternalCode() {
        return externalCode;
    }

    public void setExternalCode(String externalCode) {
        this.externalCode = externalCode;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PickValueId)) return false;
        PickValueId that = (PickValueId) o;
        return Objects.equals(valueListId, that.valueListId) &&
                Objects.equals(externalCode, that.externalCode) &&
                Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(valueListId, externalCode, status);
    }
}