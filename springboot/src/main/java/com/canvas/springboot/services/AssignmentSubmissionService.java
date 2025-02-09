package com.canvas.springboot.services;

import com.canvas.springboot.entities.AssignmentSubmission;
import com.canvas.springboot.entities.Assignments;
import com.canvas.springboot.entities.User;
import com.canvas.springboot.models.requests.AssignmentSubmissionRequest;
import com.canvas.springboot.models.requests.GradeSubmissionRequest;
import com.canvas.springboot.models.responses.AssignmentResponse;
import com.canvas.springboot.models.responses.AssignmentSubmissionResponse;
import com.canvas.springboot.repositories.AssignmentSubmissionRepository;
import com.canvas.springboot.repositories.AssignmentRepository;
import com.canvas.springboot.repositories.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

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

    public AssignmentSubmissionResponse getSubmission(Long id){
        AssignmentSubmission submission = submissionRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Submission not found"));

        return convertSubmissionResponse(submission);

    }

    private AssignmentSubmissionResponse convertSubmissionResponse(AssignmentSubmission submission) {
        AssignmentSubmissionResponse assignmentSubmissionResponse = new AssignmentSubmissionResponse();

        assignmentSubmissionResponse.setSubmissionId(submission.getId());
        assignmentSubmissionResponse.setFileUrl(submission.getFileUrl());
        assignmentSubmissionResponse.setAssignmentTitle(submission.getAssignment().getTitle());

        return assignmentSubmissionResponse;
    }

    @Transactional
    public void gradeSubmission(GradeSubmissionRequest request) {
        AssignmentSubmission submission = submissionRepository.findById(request.getSubmissionId())
                .orElseThrow(() -> new IllegalArgumentException("Submission not found"));

        if (submission.isGraded()) {
            throw new RuntimeException("Assignment already graded");
        }

        submission.setGrade(request.getGrade());
        submission.setFeedback(request.getFeedback());
        submission.setGraded(true);

        submissionRepository.save(submission);
    }

    public List<AssignmentSubmissionResponse> getStudentResults(Long studentId) {
        List<AssignmentSubmission> submissions = submissionRepository.findByUserIdAndIsGradedTrue(studentId);

        return submissions.stream().map(submission -> {
            AssignmentSubmissionResponse response = new AssignmentSubmissionResponse();
            response.setSubmissionId(submission.getId());
            response.setAssignmentTitle(submission.getAssignment().getTitle());
            response.setStudentId(submission.getUser().getId());
            response.setStudentFirstName(submission.getUser().getFirstName());
            response.setStudentLastName(submission.getUser().getLastName());
            response.setFileUrl(submission.getFileUrl());
            response.setGrade(submission.getGrade());
            response.setFeedback(submission.getFeedback());
            response.setGraded(submission.isGraded());
            return response;
        }).collect(Collectors.toList());
    }



}
