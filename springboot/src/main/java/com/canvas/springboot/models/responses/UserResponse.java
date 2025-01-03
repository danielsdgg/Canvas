package com.canvas.springboot.models.responses;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserResponse {
    private Long id;
    private String emailAddress;
    private String username;
//    private String role;
    private String phoneNumber;
    private LocalDateTime createdAt;
}