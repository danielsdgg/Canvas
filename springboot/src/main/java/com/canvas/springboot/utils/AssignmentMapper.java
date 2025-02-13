package com.canvas.springboot.utils;

import com.canvas.springboot.entities.Assignments;
import com.canvas.springboot.models.responses.AssignmentResponse;

public class AssignmentMapper {

    public static AssignmentResponse mapToAssignmentResponse(Assignments assignment) {
        AssignmentResponse response = new AssignmentResponse();
        response.setId(assignment.getId());
        response.setTitle(assignment.getTitle());
        response.setDescription(assignment.getDescription());
        return response;
    }
}
