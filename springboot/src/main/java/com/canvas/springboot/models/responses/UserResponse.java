package com.canvas.springboot.models.responses;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserResponse {
    private Long id;
    private String emailAddress;
    private String firstName;
    private String lastName;
    private String role;
    private String phoneNumber;
    private LocalDateTime createdAt;
}