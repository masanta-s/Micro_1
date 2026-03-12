package com.pickvaluelist.controller;

import com.pickvaluelist.entity.PickValue;
import com.pickvaluelist.service.PickValueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pickvalues")
public class PickValueController {

    @Autowired
    private PickValueService service;

    @PostMapping
    public PickValue create(@RequestBody PickValue value){
        return service.create(value);
    }

    @GetMapping("/{valueListId}")
    public List<PickValue> get(@PathVariable String valueListId,
                               @RequestParam(required = false) String status){
        return service.getByValueList(valueListId, status);
    }

    @GetMapping("/{valueListId}/{externalCode}/{status}")
    public PickValue getOne(@PathVariable String valueListId,
                            @PathVariable String externalCode,
                            @PathVariable String status){
        return service.getById(valueListId, externalCode, status);
    }

    @PutMapping
    public PickValue update(@RequestBody PickValue value){
        return service.update(value);
    }

    @DeleteMapping("/{valueListId}/{externalCode}/{status}")
    public void delete(@PathVariable String valueListId,
                       @PathVariable String externalCode,
                       @PathVariable String status){
        service.delete(valueListId,externalCode,status);
    }
}
