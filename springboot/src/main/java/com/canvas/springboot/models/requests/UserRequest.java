package com.canvas.springboot.models.requests;

import lombok.Data;

@Data
public class UserRequest {
    private String emailAddress;
    private String username;
    private String password;
    private String phoneNumber;
    private String role;
}
