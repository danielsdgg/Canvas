package com.canvas.springboot.models.responses;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class UserDetailsResponse {
    private Long id;
    private String emailAddress;
    private String username;
    private String phoneNumber;
    private LocalDateTime createdAt;
    private List<CourseDetailsResponse> courses;
    private List<AssignmentResponse> assignments;
}
