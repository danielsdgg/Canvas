package com.canvas.springboot.models.responses;

import lombok.Data;

@Data
public class LoginResponse {
    private UserResponse userDetails;
    private String token;
    private String role;
}