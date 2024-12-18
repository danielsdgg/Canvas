package com.canvas.springboot.models.responses;

import lombok.Data;

@Data
public class UserResponse {
    private Long id;
    private String emailAddress;
    private String username;
}