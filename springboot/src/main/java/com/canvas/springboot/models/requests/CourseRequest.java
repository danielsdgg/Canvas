package com.canvas.springboot.models.requests;

import lombok.Data;

import java.util.List;

@Data
public class CourseRequest {
    private String courseName;
    private String description;
    private List<UserRequest> users;
    private List<AssignmentRequest> assignments;
}
