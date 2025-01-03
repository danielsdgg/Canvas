package com.canvas.springboot.models.requests;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AssignmentRequest {
    private Long id;
    private String title;
    private String description;
    private LocalDateTime dueDate;
}
