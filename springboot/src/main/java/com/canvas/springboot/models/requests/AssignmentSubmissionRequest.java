package com.canvas.springboot.models.requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AssignmentSubmissionRequest {
    private Long assignmentId;
    private Long userId;
    private String fileUrl; // This will be the URL of the uploaded file
}
