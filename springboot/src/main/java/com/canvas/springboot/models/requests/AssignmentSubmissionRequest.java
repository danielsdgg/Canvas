package com.canvas.springboot.models.requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AssignmentSubmissionRequest {
    private Long assignmentId;
    private String fileUrl;
}
