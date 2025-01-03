package com.canvas.springboot.models.responses;

import lombok.Data;

@Data
public class UserDetailsResponse {
    private Long id;
    private String emailAddress;
    private String username;
    private String role;
    private String phoneNumber;
}
