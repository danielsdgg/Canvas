package com.canvas.springboot.services;

import com.canvas.springboot.entities.AssignmentSubmission;
import com.canvas.springboot.entities.Assignments;
import com.canvas.springboot.entities.User;
import com.canvas.springboot.models.requests.AssignmentSubmissionRequest;
import com.canvas.springboot.repositories.AssignmentSubmissionRepository;
import com.canvas.springboot.repositories.AssignmentRepository;
import com.canvas.springboot.repositories.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AssignmentSubmissionService {

    private final AssignmentSubmissionRepository submissionRepository;
    private final AssignmentRepository assignmentRepository;
    private final UserRepository userRepository;

    public AssignmentSubmissionService(AssignmentSubmissionRepository submissionRepository,
                                       AssignmentRepository assignmentRepository,
                                       UserRepository userRepository) {
        this.submissionRepository = submissionRepository;
        this.assignmentRepository = assignmentRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public void submitAssignment(AssignmentSubmissionRequest request) {
        Assignments assignment = assignmentRepository.findById(request.getAssignmentId())
                .orElseThrow(() -> new IllegalArgumentException("Assignment not found"));
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        AssignmentSubmission submission = new AssignmentSubmission();
        submission.setAssignment(assignment);
        submission.setUser(user);
        submission.setFileUrl(request.getFileUrl());

        submissionRepository.save(submission);
    }
}
