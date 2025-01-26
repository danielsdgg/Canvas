package com.canvas.springboot.models.responses;

import lombok.Data;

import java.util.List;

@Data
public class CourseDetailsResponse {
    private Long id;
    private String courseName;
    private String description;
    private List<LessonResponse> lessons;
    private List<AssignmentResponse> assignments;
}
