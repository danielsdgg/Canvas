package com.canvas.springboot.models.responses;

import lombok.Data;

@Data
public class AssignmentSubmissionResponse {
    private Long submissionId;
    private String assignmentTitle;
    private Long studentId;
    private String studentFirstName;
    private String studentLastName;
    private String fileUrl;
    private Double grade;
    private String feedback;
    private boolean isGraded;
}
