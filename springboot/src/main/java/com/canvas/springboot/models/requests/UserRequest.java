package com.canvas.springboot.models.requests;

import lombok.Data;

@Data
public class UserRequest {
    private Long id;
    private String emailAddress;
    private String phoneNumber;
    private String firstName;
    private String lastName;
    private String role;

}
