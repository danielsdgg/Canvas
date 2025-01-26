package com.canvas.springboot.models.responses;

import com.canvas.springboot.models.requests.QuizRequest;
import lombok.Data;

import java.util.List;

@Data
public class QuestionResponse {
    private Long id;
    private String text;
    private List<String> options;
}
