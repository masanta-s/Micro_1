package com.pickvaluelist.service;

import com.pickvaluelist.entity.*;

import java.util.List;

public interface PickValueService {

    PickValue create(PickValue value);

    List<PickValue> getByValueList(String valueListId, String status);

    PickValue getById(String valueListId, String externalCode, String status);

    PickValue update(PickValue value);

    void delete(String valueListId,String externalCode,String status);
}
