package com.canvas.springboot.models.responses;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class UserDetailsResponse {
    private Long id;
    private String emailAddress;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String role;
    private LocalDateTime createdAt;
    private String managedBy;
    private List<CourseDetailsResponse> courses;
    private List<AssignmentResponse> assignments;
}
