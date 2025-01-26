package com.canvas.springboot.models.responses;

import lombok.Data;

@Data
public class LessonResponse {
    private Long id;        // ID of the lesson
    private String title;   // Title of the lesson
    private String content; // Content of the lesson
}
