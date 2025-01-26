package com.canvas.springboot.models.responses;

import lombok.Data;

import java.util.Map;

@Data
public class SubmissionResponse {
    private Long id;         // ID of the submission
    private Long userId;     // ID of the user
    private Long quizId;     // ID of the quiz
    private Map<Long, String> answers; // Question ID -> Selected Answer
    private int marks;       // Total marks scored
}
