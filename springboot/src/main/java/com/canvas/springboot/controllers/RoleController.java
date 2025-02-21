package com.canvas.springboot.controllers;

import com.canvas.springboot.models.requests.RoleRequest;
import com.canvas.springboot.models.responses.RoleResponse;
import com.canvas.springboot.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/roles")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping
    public ResponseEntity<RoleResponse> addRole(@RequestBody RoleRequest roleRequest) {
        RoleResponse roleResponse = roleService.addRole(roleRequest);
        return new ResponseEntity<>(roleResponse, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<RoleResponse> editRole(@PathVariable(name = "id") Long id, @RequestBody RoleRequest roleRequest){
        RoleResponse roleResponse = roleService.editRole(id, roleRequest);
        return new ResponseEntity<>(roleResponse, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<RoleResponse> getRole(@PathVariable Long id){
        RoleResponse roleResponse = roleService.getRoleById(id);
        return new ResponseEntity<>(roleResponse, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping
    public ResponseEntity<List<RoleResponse>> getRole() {
        List<RoleResponse> roleResponses = roleService.getRoles();
        return new ResponseEntity<>(roleResponses, HttpStatus.OK);
    }
}
