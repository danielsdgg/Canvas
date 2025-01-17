package com.canvas.springboot.services;

import com.canvas.springboot.entities.Assignments;
import com.canvas.springboot.entities.Courses;
import com.canvas.springboot.entities.User;
import com.canvas.springboot.models.requests.AssignmentRequest;
import com.canvas.springboot.models.responses.AssignmentResponse;
import com.canvas.springboot.repositories.AssignmentRepository;
import com.canvas.springboot.repositories.CourseRepository;
import com.canvas.springboot.repositories.UserRepository;
import com.canvas.springboot.utils.AssignmentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

import static com.canvas.springboot.utils.AssignmentMapper.mapToAssignmentResponse;

@Service
public class AssignmentService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public AssignmentResponse createAssignment(Long courseId, AssignmentRequest assignmentRequest) {
        Courses course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        Assignments assignment = mapToAssignmentEntity(assignmentRequest);
        assignment.setCourse(course);

        Assignments savedAssignment = assignmentRepository.save(assignment);
        return mapToAssignmentResponse(savedAssignment);
    }


    public List<AssignmentResponse> getAssignmentsByCourse(Long courseId) {
        Courses course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        return course.getAssignments().stream()
                .map(AssignmentMapper::mapToAssignmentResponse)
                .toList();
    }


    public void assignUserToAssignment(Long assignmentId, Long userId) {
        Assignments assignment = assignmentRepository.findById(assignmentId)
                .orElseThrow(() -> new RuntimeException("Assignment not found"));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        assignment.getAssignedUsers().add(user);
        assignmentRepository.save(assignment);
    }

    private Assignments mapToAssignmentEntity(AssignmentRequest request) {
        Assignments assignment = new Assignments();
        assignment.setTitle(request.getTitle());
        assignment.setDescription(request.getDescription());
        assignment.setDueDate(request.getDueDate());
        assignment.setCreatedAt(LocalDateTime.now());
        assignment.setUpdatedAt(LocalDateTime.now());
        return assignment;
    }





}

