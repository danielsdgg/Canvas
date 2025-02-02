package com.canvas.springboot.services;

import com.canvas.springboot.entities.Role;
import com.canvas.springboot.models.requests.RoleRequest;
import com.canvas.springboot.models.responses.RoleResponse;
import com.canvas.springboot.repositories.RoleRepository;
import com.canvas.springboot.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class RoleService {
    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public RoleResponse addRole(RoleRequest roleRequest){
        Optional<Role> role = roleRepository.findByRoleName(roleRequest.getRoleName());

        if (role.isEmpty()){
            Role addNewRole = new Role();

            addNewRole.setRoleName(roleRequest.getRoleName().toUpperCase());
            addNewRole.setCreatedAt(LocalDateTime.now());
            addNewRole.setUpdatedAt(LocalDateTime.now());

            roleRepository.save(addNewRole);
            return convertRoleResponse(addNewRole);
        }
        else{
            throw new RuntimeException("Could not find the role");
        }

    }

    @Transactional
    public RoleResponse editRole(Long id, RoleRequest roleRequest){
        Optional<Role> existingRole = roleRepository.findById(id);

        if (existingRole.isPresent()){
            Role editRole = existingRole.get();

            editRole.setRoleName(roleRequest.getRoleName());
            editRole.setUpdatedAt(LocalDateTime.now());

            roleRepository.save(editRole);
            return convertRoleResponse(editRole);
        }
        else{
            throw new RuntimeException("Could not edit role");
        }
    }

    private RoleResponse convertRoleResponse(Role addNewRole) {
        RoleResponse role = new RoleResponse();
        role.setRoleName(addNewRole.getRoleName());
        return role;
    }

    public RoleResponse getRoleById(Long id) {
        try{
            Role getRole = roleRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Could not find the role"));

            return convertRoleResponse(getRole);
        }
        catch (Exception e){
            log.error("Could not find the role of id: {}", e.getMessage());
            throw new RuntimeException("Can't find the role");
        }
    }

    public List<RoleResponse> getRoles(){
        try{
            List<Role> getRoles = roleRepository.findAll();
            return getRoles.stream().map(this::convertRoleResponse).toList();
        }
        catch (Exception e){
            throw new RuntimeException("Could not get the roles");
        }
    }

}
