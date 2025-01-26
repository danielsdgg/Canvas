package com.canvas.springboot.controllers;

import com.canvas.springboot.models.requests.SubmissionRequest;
import com.canvas.springboot.models.responses.SubmissionResponse;
import com.canvas.springboot.services.SubmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/submission")
public class SubmissionController {
    @Autowired
    private SubmissionService submissionService;

    @PostMapping
    public ResponseEntity<SubmissionResponse> createSubmission(@RequestBody SubmissionRequest submissionRequest){
        SubmissionResponse submissionResponse = submissionService.processSubmission(submissionRequest);
        return new ResponseEntity<>(submissionResponse, HttpStatus.CREATED);
    }
}
