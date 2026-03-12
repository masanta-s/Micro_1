package com.pickvaluelist.service;

import com.pickvaluelist.entity.PickValue;
import com.pickvaluelist.entity.PickValueId;
import com.pickvaluelist.repository.PickValueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class PickValueServiceImpl implements PickValueService {

    @Autowired
    private PickValueRepository repo;

    @Override
    public PickValue create(PickValue value){
        return repo.save(value);
    }

    @Override
    public List<PickValue> getByValueList(String valueListId, String status){
        if (status != null && !status.isBlank()) {
            return repo.findByIdValueListIdAndIdStatus(valueListId, status);
        }
        return repo.findByIdValueListId(valueListId);
    }

    @Override
    public PickValue getById(String valueListId, String externalCode, String status) {
        return repo.findByIdValueListIdAndIdExternalCodeAndIdStatus(valueListId, externalCode, status)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Pick value not found for the supplied key"
                ));
    }

    @Override
    public PickValue update(PickValue value){
        if (value.getId() == null || !repo.existsById(value.getId())) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Pick value not found for update");
        }
        return repo.save(value);
    }

    @Override
    public void delete(String valueListId,String externalCode,String status){
        PickValueId id = new PickValueId(valueListId, externalCode, status);
        if (!repo.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Pick value not found for delete");
        }
        repo.deleteById(id);
    }
}
