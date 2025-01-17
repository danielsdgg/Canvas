package com.canvas.springboot.controllers;

import com.canvas.springboot.models.requests.AssignmentSubmissionRequest;
import com.canvas.springboot.services.AssignmentService;
import com.canvas.springboot.services.AssignmentSubmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/assignments")
public class AssignmentSubmissionController {

   @Autowired
   private AssignmentSubmissionService assignmentService;

    @PostMapping("/submit")
    public ResponseEntity<String> submitAssignment(@RequestBody AssignmentSubmissionRequest request) {
        assignmentService.submitAssignment(request);
        return ResponseEntity.status(HttpStatus.CREATED).body("Assignment submitted successfully");
    }
}
