package com.canvas.springboot.models.requests;

import lombok.Data;

@Data
public class RegisterRequest {
    private String emailAddress;
    private String username;
    private String password;
    private Long roleId;
}
