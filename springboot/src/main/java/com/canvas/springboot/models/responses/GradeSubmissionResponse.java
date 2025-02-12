package com.canvas.springboot.models.responses;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class GradeSubmissionResponse {
    private Long submissionId;
    private Long studentId;
    private String studentFirstName;
    private String studentLastName;
    private Double grade;
    private String feedback;
    private LocalDateTime submittedAt;
}
