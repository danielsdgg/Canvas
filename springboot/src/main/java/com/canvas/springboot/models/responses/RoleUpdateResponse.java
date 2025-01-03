package com.canvas.springboot.models.responses;

import lombok.Data;

@Data
public class RoleUpdateResponse {
    private Long userId;
    private Long roleId;
    private String roleName;
}
