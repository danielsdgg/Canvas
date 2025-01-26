package com.canvas.springboot.models.requests;

import lombok.Data;

import java.util.List;

@Data
public class QuizRequest {
    private String title;
    private List<QuestionRequest> questions;
}
