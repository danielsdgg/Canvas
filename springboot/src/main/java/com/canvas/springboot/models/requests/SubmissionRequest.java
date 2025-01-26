package com.canvas.springboot.models.requests;

import lombok.Data;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Map;

@Data
public class SubmissionRequest {
    private Long userId;    // ID of the user
    private Long quizId;    // ID of the quiz
    private Map<Long, String> answers; // Question ID -> Selected Answer
}
