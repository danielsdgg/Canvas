package com.canvas.springboot.models.requests;

import lombok.Data;
import java.util.List;

@Data
public class QuestionRequest {
    private String text;
    private List<String> options;
    private String correctAnswer;
}
