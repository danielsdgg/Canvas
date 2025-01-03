package com.canvas.springboot.models.requests;

import lombok.Data;

@Data
public class PasswordRequest {
    private String emailAddress;
    private String oldPassword;
    private String newPassword;
}
