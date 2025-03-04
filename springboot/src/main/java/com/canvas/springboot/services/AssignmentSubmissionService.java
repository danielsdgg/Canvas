package com.canvas.springboot.services;

import com.canvas.springboot.entities.AssignmentSubmission;
import com.canvas.springboot.entities.Assignments;
import com.canvas.springboot.entities.User;
import com.canvas.springboot.models.requests.AssignmentSubmissionRequest;
import com.canvas.springboot.models.requests.GradeSubmissionRequest;
import com.canvas.springboot.models.responses.AssignmentResponse;
import com.canvas.springboot.models.responses.AssignmentSubmissionResponse;
import com.canvas.springboot.models.responses.GradeSubmissionResponse;
import com.canvas.springboot.repositories.AssignmentSubmissionRepository;
import com.canvas.springboot.repositories.AssignmentRepository;
import com.canvas.springboot.repositories.UserRepository;
import com.canvas.springboot.security.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AssignmentSubmissionService {

    @Autowired
    private AssignmentSubmissionRepository submissionRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Transactional
    public AssignmentSubmissionResponse submitAssignment(String authorizationHeader, AssignmentSubmissionRequest request) {
        // Fetch the assignment and user
        String token = authorizationHeader.substring(7);
        Long adminId = jwtTokenUtil.extractUserId(token);

        Assignments assignment = assignmentRepository.findById(request.getAssignmentId())
                .orElseThrow(() -> new IllegalArgumentException("Assignment not found"));

        User user = userRepository.findById(adminId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        // Check if the user has already submitted the assignment
        Optional<AssignmentSubmission> existingSubmission = submissionRepository
                .findByAssignmentAndUser(assignment, user);

        if (existingSubmission.isPresent()) {
            throw new RuntimeException("Assignment already submitted.");
        }

        // Proceed with submission
        AssignmentSubmission submission = new AssignmentSubmission();
        submission.setAssignment(assignment);
        submission.setUser(user);
        submission.setFileUrl(request.getFileUrl());
        submission.setGraded(false); // Ensure default value for grading

        submission = submissionRepository.save(submission); // Save the new submission

        return convertSubmissionResponse(submission);
    }



    public List<AssignmentSubmissionResponse> getSubmissionsByUserEmailAddress(String emailAddress) {

        List<AssignmentSubmission> submissions = submissionRepository.findByUserEmailAddress(emailAddress);

        if (submissions.isEmpty()) {
            throw new IllegalArgumentException("No submissions found for this user");
        }

        return submissions.stream()
                .map(this::convertSubmissionResponse)
                .collect(Collectors.toList());
    }


    public List<AssignmentSubmissionResponse> getAllSubmissions(){
        List<AssignmentSubmission> assignmentSubmissionResponses = submissionRepository.findAll();
        return assignmentSubmissionResponses.stream().map(this::convertSubmissionResponse).toList();
    }

    private AssignmentSubmissionResponse convertSubmissionResponse(AssignmentSubmission submission) {
        AssignmentSubmissionResponse assignmentSubmissionResponse = new AssignmentSubmissionResponse();

        assignmentSubmissionResponse.setSubmissionId(submission.getId());
        assignmentSubmissionResponse.setFileUrl(submission.getFileUrl());
        assignmentSubmissionResponse.setAssignmentTitle(submission.getAssignment().getTitle());
        assignmentSubmissionResponse.setFeedback(submission.getFeedback());
        assignmentSubmissionResponse.setGrade(submission.getGrade());
        assignmentSubmissionResponse.setStudentFirstName(submission.getUser().getFirstName());
        assignmentSubmissionResponse.setStudentLastName(submission.getUser().getLastName());
        assignmentSubmissionResponse.setStudentId(submission.getUser().getId());
        assignmentSubmissionResponse.setSubmittedAt(submission.getSubmittedAt());
        assignmentSubmissionResponse.setGraded(submission.isGraded());
        return assignmentSubmissionResponse;
    }

    private GradeSubmissionResponse convertGradeResponse(AssignmentSubmission assignmentSubmission){
        GradeSubmissionResponse gradeSubmissionResponse = new GradeSubmissionResponse();

        gradeSubmissionResponse.setGrade(assignmentSubmission.getGrade());
        gradeSubmissionResponse.setSubmissionId(assignmentSubmission.getId());
        gradeSubmissionResponse.setFeedback(assignmentSubmission.getFeedback());
        gradeSubmissionResponse.setSubmittedAt(assignmentSubmission.getSubmittedAt());
        gradeSubmissionResponse.setStudentFirstName(assignmentSubmission.getUser().getFirstName());
        gradeSubmissionResponse.setStudentLastName(assignmentSubmission.getUser().getLastName());
        gradeSubmissionResponse.setStudentId(assignmentSubmission.getUser().getId());

        return gradeSubmissionResponse;
    }

    public List<GradeSubmissionResponse> getAllStudentGrades() {
        List<AssignmentSubmission> gradedSubmissions = submissionRepository.findByIsGradedTrue();

        return gradedSubmissions.stream().map(this::convertGradeResponse).toList();
    }


    @Transactional
    public void gradeSubmission(GradeSubmissionRequest request) {
        AssignmentSubmission submission = submissionRepository.findById(request.getSubmissionId())
                .orElseThrow(() -> new IllegalArgumentException("Submission not found"));

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
            response.setSubmittedAt(submission.getSubmittedAt());
            response.setGraded(submission.isGraded());
            return response;
        }).collect(Collectors.toList());
    }



}
