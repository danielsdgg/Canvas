package com.canvas.springboot.models.responses;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class UserResponse {
    private String emailAddress;
    private String firstName;
    private String lastName;
    private String role;
    private String phoneNumber;
    private LocalDateTime createdAt;

}