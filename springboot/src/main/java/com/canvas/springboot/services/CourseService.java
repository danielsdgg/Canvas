package com.canvas.springboot.services;

import com.canvas.springboot.entities.Courses;
import com.canvas.springboot.entities.User;
import com.canvas.springboot.models.requests.CourseRequest;
import com.canvas.springboot.models.responses.CourseResponse;
import com.canvas.springboot.models.responses.UserResponse;
import com.canvas.springboot.models.requests.UserRequest;
import com.canvas.springboot.repositories.CourseRepository;
import com.canvas.springboot.repositories.UserRepository;
import com.canvas.springboot.utils.AssignmentMapper;
import com.canvas.springboot.utils.LessonMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private AssignmentService assignmentService;

    public List<CourseResponse> getAllCourses() {
        List<Courses> courses = courseRepository.findAll();
        return courses.stream().map(this::mapToCourseResponse).toList();
    }


    public CourseResponse getCourseById(Long id) {
        Courses course = courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));
        return mapToCourseResponse(course);
    }


    @Transactional
    public CourseResponse createCourse(CourseRequest courseRequest) {
        Courses course = mapToCourseEntity(courseRequest);
        course.setCreatedAt(LocalDateTime.now());
        course.setUpdatedAt(LocalDateTime.now());
        Courses savedCourse = courseRepository.save(course);
        return mapToCourseResponse(savedCourse);
    }

    @Transactional
    public CourseResponse updateCourse(Long id, CourseRequest updatedRequest) {
        Courses existingCourse = getCourseByIdEntity(id);  // Helper method to get entity
        existingCourse.setCourseName(updatedRequest.getCourseName());
        existingCourse.setDescription(updatedRequest.getDescription());
        existingCourse.setUpdatedAt(LocalDateTime.now());

        // Update users if provided
        if (updatedRequest.getUsers() != null) {
            List<User> users = userRepository.findAllById(
                    updatedRequest.getUsers().stream().map(UserRequest::getId).toList()
            );
            existingCourse.setUsers(new HashSet<>(users));
        }

        Courses savedCourse = courseRepository.save(existingCourse);
        return mapToCourseResponse(savedCourse);
    }


    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }


    public void enrollUserInCourse(Long courseId, Long userId) {
        Courses course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        course.getUsers().add(user);

        courseRepository.save(course);
    }

    private Courses mapToCourseEntity(CourseRequest request) {
        Courses course = new Courses();
        course.setCourseName(request.getCourseName());
        course.setDescription(request.getDescription());

        if (request.getUsers() != null) {
            List<User> users = userRepository.findAllById(
                    request.getUsers().stream().map(UserRequest::getId).toList()
            );
            course.setUsers(new HashSet<>(users));
        }

        return course;
    }

    public CourseResponse mapToCourseResponse(Courses course) {
        CourseResponse response = new CourseResponse();
        response.setId(course.getId());
        response.setCourseName(course.getCourseName());
        response.setDescription(course.getDescription());


        if (course.getUsers() != null) {
            response.setUsers(
                    course.getUsers().stream().map(this::mapToUserResponse).toList()
            );
        }

        if (course.getLessons() != null){
            response.setLessons(
                    course.getLessons().stream()
                            .map(LessonMapper::mapToLessonResponse)
                            .collect(Collectors.toList())
            );
        }

        if (course.getAssignments() != null) {
            response.setAssignments(
                    course.getAssignments().stream()
                            .map(AssignmentMapper::mapToAssignmentResponse)
                            .collect(Collectors.toList())
            );
        }
        return response;
    }

    private UserResponse mapToUserResponse(User user) {
        UserResponse userResponse = new UserResponse();
        userResponse.setEmailAddress(user.getEmailAddress());
        userResponse.setLastName(user.getLastName());
        userResponse.setFirstName(user.getFirstName());
        userResponse.setPhoneNumber(user.getPhoneNumber());
        userResponse.setRole(user.getRole().getRoleName());
        userResponse.setCreatedAt(user.getCreatedAt());
        return userResponse;
    }

    private Courses getCourseByIdEntity(Long id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));
    }

}
