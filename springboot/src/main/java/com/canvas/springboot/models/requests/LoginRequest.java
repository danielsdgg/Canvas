package com.canvas.springboot.models.requests;

import lombok.Data;

@Data
public class LoginRequest {
    private String emailAddress;
    private String password;
}
