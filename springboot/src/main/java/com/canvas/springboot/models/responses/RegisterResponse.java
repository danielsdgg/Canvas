package com.canvas.springboot.models.responses;

import lombok.Data;

@Data
public class RegisterResponse {
    private String emailAddress;
    private String phoneNumber;
    private String firstName;
    private String lastName;
}
