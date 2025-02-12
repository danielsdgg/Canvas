package com.canvas.springboot.controllers;

import com.canvas.springboot.models.requests.AssignmentSubmissionRequest;
import com.canvas.springboot.models.requests.GradeSubmissionRequest;
import com.canvas.springboot.models.responses.AssignmentSubmissionResponse;
import com.canvas.springboot.models.responses.GradeSubmissionResponse;
import com.canvas.springboot.services.AssignmentService;
import com.canvas.springboot.services.AssignmentSubmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/assignments")
public class AssignmentSubmissionController {

   @Autowired
   private AssignmentSubmissionService assignmentService;

    @PostMapping("/submit")
    public ResponseEntity<String> submitAssignment(@RequestBody AssignmentSubmissionRequest request) {
        assignmentService.submitAssignment(request);
        return ResponseEntity.status(HttpStatus.CREATED).body("Assignment submitted successfully");
    }

    @PutMapping("/grade")
    public ResponseEntity<String> gradeSubmission(@RequestBody GradeSubmissionRequest request) {
        assignmentService.gradeSubmission(request);
        return ResponseEntity.ok("Assignment graded successfully");
    }

    @GetMapping("/grades")
    public ResponseEntity<List<GradeSubmissionResponse>> getAllGrades() {
        List<GradeSubmissionResponse> assignmentSubmissionResponseList = assignmentService.getAllStudentGrades();
        return new ResponseEntity<>(assignmentSubmissionResponseList, HttpStatus.OK);
    }


    @GetMapping("/results/{studentId}")
    public ResponseEntity<List<AssignmentSubmissionResponse>> getStudentResults(@PathVariable Long studentId) {
        List<AssignmentSubmissionResponse> results = assignmentService.getStudentResults(studentId);
        return ResponseEntity.ok(results);
    }

    @GetMapping("/submissions/{id}")
    public ResponseEntity<AssignmentSubmissionResponse> getSubmission(@PathVariable Long id){
        AssignmentSubmissionResponse assignmentSubmissionResponse = assignmentService.getSubmission(id);
        return new ResponseEntity<>(assignmentSubmissionResponse, HttpStatus.OK);
    }

    @GetMapping("/submissions")
    public ResponseEntity<List<AssignmentSubmissionResponse>> fetchSubmissions(){
        List<AssignmentSubmissionResponse> assignmentSubmissionResponses = assignmentService.getAllSubmissions();
        return new ResponseEntity<>(assignmentSubmissionResponses, HttpStatus.OK);
    }



}
