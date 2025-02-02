package com.canvas.springboot.models.requests;

import lombok.Data;

@Data
public class RegisterRequest {
    private String emailAddress;
    private String phoneNumber;
    private String firstName;
    private String lastName;
    private String password;
    private Long roleId;
}
