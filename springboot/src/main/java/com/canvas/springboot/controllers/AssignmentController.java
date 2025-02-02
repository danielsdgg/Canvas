package com.canvas.springboot.controllers;

import com.canvas.springboot.entities.Assignments;
import com.canvas.springboot.models.requests.AssignmentRequest;
import com.canvas.springboot.models.responses.AssignmentResponse;
import com.canvas.springboot.services.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/assignments")
public class AssignmentController {

   @Autowired
   private AssignmentService assignmentService;

    @PostMapping("/{courseId}")
    public ResponseEntity<AssignmentResponse> createAssignment(
            @PathVariable Long courseId,
            @RequestBody AssignmentRequest assignment) {
        AssignmentResponse createdAssignment = assignmentService.createAssignment(courseId, assignment);
        return new ResponseEntity<>(createdAssignment, HttpStatus.CREATED);
    }

    @GetMapping("/course/{courseId}")
    public ResponseEntity<List<AssignmentResponse>> getAssignmentsByCourse(@PathVariable Long courseId) {
        List<AssignmentResponse> assignments = assignmentService.getAssignmentsByCourse(courseId);
        return new ResponseEntity<>(assignments, HttpStatus.OK);
    }

    @PutMapping("/{assignmentId}/user/{userId}")
    public ResponseEntity<String> assignUserToAssignment(@PathVariable Long assignmentId, @PathVariable Long userId) {
        assignmentService.assignUserToAssignment(assignmentId, userId);
        return ResponseEntity.ok("User assigned to assignment successfully");
    }
}
