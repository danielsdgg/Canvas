package com.canvas.springboot.models.responses;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class CourseResponse {
    private Long id;
    private String courseName;
    private String description;
    private List<UserResponse> users;
    private List<AssignmentResponse> assignments;
}
