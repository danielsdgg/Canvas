package com.canvas.springboot.models.requests;

import lombok.Data;

@Data
public class GradeSubmissionRequest {
    private Long submissionId;
    private Double grade;
    private String feedback;
}
