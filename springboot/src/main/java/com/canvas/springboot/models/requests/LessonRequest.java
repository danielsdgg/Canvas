package com.canvas.springboot.models.requests;

import lombok.Data;

@Data
public class LessonRequest {
    private String title;
    private Long courseId;
    }
