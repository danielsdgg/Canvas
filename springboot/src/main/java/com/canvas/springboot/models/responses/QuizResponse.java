package com.canvas.springboot.models.responses;

import lombok.Data;

import java.util.List;

@Data
public class QuizResponse {
    private String title;
    private List<QuestionResponse> questions;
}
