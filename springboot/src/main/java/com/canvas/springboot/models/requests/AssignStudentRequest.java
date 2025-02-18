package com.canvas.springboot.models.requests;

import lombok.Data;

@Data
public class AssignStudentRequest {
    private Long adminId;
    private Long studentId;
}
