package com.pickvaluelist.repository;

import com.pickvaluelist.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PickValueRepository extends JpaRepository<PickValue, PickValueId> {

    List<PickValue> findByIdValueListId(String valueListId);

    List<PickValue> findByIdValueListIdAndIdStatus(String valueListId, String status);

    Optional<PickValue> findByIdValueListIdAndIdExternalCodeAndIdStatus(
            String valueListId,
            String externalCode,
            String status
    );
}
