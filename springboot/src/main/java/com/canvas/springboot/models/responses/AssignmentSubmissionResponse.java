package com.canvas.springboot.models.responses;

import lombok.Data;

@Data
public class AssignmentSubmissionResponse {
    private Long submissionId;
    private Long assignmentId;
    private String assignmentTitle;
    private Long studentId;
    private String studentName;
    private String fileUrl;
    private Double grade;
    private String feedback;
    private boolean isGraded;
}
