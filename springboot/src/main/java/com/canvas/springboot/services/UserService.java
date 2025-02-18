package com.canvas.springboot.services;

import com.canvas.springboot.entities.Courses;
import com.canvas.springboot.entities.Role;
import com.canvas.springboot.entities.User;
import com.canvas.springboot.models.requests.LoginRequest;
import com.canvas.springboot.models.requests.PasswordRequest;
import com.canvas.springboot.models.requests.RegisterRequest;
import com.canvas.springboot.models.requests.UserRequest;
import com.canvas.springboot.models.responses.*;
import com.canvas.springboot.repositories.CourseRepository;
import com.canvas.springboot.repositories.RoleRepository;
import com.canvas.springboot.repositories.UserRepository;
import com.canvas.springboot.security.JwtTokenUtil;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private CourseService courseService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenUtil jwtUtil;

    @Autowired
    @Lazy
    private AuthenticationManager authenticationManager;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmailAddress(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
//        System.out.println("Loaded User: " + user.getEmailAddress() + ", Role: " + user.getRole().getRoleName());
//        System.out.println("Authorities: " + user.getAuthorities());

        return new org.springframework.security.core.userdetails.User(user.getEmailAddress(), user.getPassword(),
                new ArrayList<>());
    }

    public LoginResponse loginUser(LoginRequest loginRequest) throws Exception {
        User user = userRepository.findByEmailAddress(loginRequest.getEmailAddress());
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getEmailAddress(), loginRequest.getPassword())
            );
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Incorrect username or password", e);
        }

        final String token = jwtUtil.generateToken(user);

        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setUserDetails(convertUserResponse(user));
        loginResponse.setToken(token);
        loginResponse.setRole(user.getRole() != null ? user.getRole().getRoleName() : "No role assigned");

        return loginResponse;
    }


    private UserResponse convertUserResponse(User user) {
        UserResponse userResponse = new UserResponse();

        userResponse.setId(user.getId());
        userResponse.setEmailAddress(user.getEmailAddress());
        userResponse.setFirstName(user.getFirstName());
        userResponse.setLastName(user.getLastName());
        userResponse.setPhoneNumber(user.getPhoneNumber());
        userResponse.setRole(user.getRole().getRoleName());
        userResponse.setCreatedAt(user.getCreatedAt());

        return userResponse;

    }

    private UserDetailsResponse convertUserDetails(User user) {
        UserDetailsResponse userResponse = new UserDetailsResponse();

        userResponse.setId(user.getId());
        userResponse.setEmailAddress(user.getEmailAddress());
        userResponse.setLastName(user.getLastName());
        userResponse.setFirstName(user.getFirstName());
        userResponse.setPhoneNumber(user.getPhoneNumber());
        userResponse.setRole(user.getRole().getRoleName());
        userResponse.setCreatedAt(user.getCreatedAt());

        userResponse.setManagedBy(user.getManagedBy() != null ? user.getManagedBy().getFirstName() : null);

        // Map courses and their assignments
        List<CourseDetailsResponse> courseResponses = user.getCourses().stream()
                .map(course -> {
                    CourseDetailsResponse courseResponse = new CourseDetailsResponse();
                    courseResponse.setId(course.getId());
                    courseResponse.setCourseName(course.getCourseName());
                    courseResponse.setDescription(course.getDescription());
                    
                    List<LessonResponse> lessonResponses = course.getLessons().stream()
                            .map(lesson -> {
                                LessonResponse lessonResponse = new LessonResponse();
                                lessonResponse.setId(lesson.getId());
//                                lessonResponse.setContent(lesson.getTitle());
                                lessonResponse.setTitle(lesson.getTitle());
                                return lessonResponse;
                            }).toList();

                    // Map assignments for this course
                    List<AssignmentResponse> assignmentResponses = course.getAssignments().stream()
                            .map(assignment -> {
                                AssignmentResponse assignmentResponse = new AssignmentResponse();
                                assignmentResponse.setId(assignment.getId());
                                assignmentResponse.setTitle(assignment.getTitle());
                                assignmentResponse.setDescription(assignment.getDescription());
                                return assignmentResponse;
                            }).toList();

                    courseResponse.setLessons(lessonResponses);
                    courseResponse.setAssignments(assignmentResponses);
                    return courseResponse;
                })
                .toList();

        userResponse.setCourses(courseResponses);

        // Map assignments directly assigned to the user
        List<AssignmentResponse> userAssignments = user.getAssignments().stream()
                .map(assignment -> {
                    AssignmentResponse assignmentResponse = new AssignmentResponse();
                    assignmentResponse.setId(assignment.getId());
                    assignmentResponse.setTitle(assignment.getTitle());
                    assignmentResponse.setDescription(assignment.getDescription());
                    return assignmentResponse;
                }).toList();

        userResponse.setAssignments(userAssignments);

        return userResponse;
    }


    @Transactional
    public UserResponse registerUser(RegisterRequest userrequest) {

        User findUserByEmail =  userRepository.findByEmailAddress(userrequest.getEmailAddress());

        if (findUserByEmail == null) {
            User user = new User();

            user.setEmailAddress(userrequest.getEmailAddress());
            user.setPhoneNumber(userrequest.getPhoneNumber());
            user.setFirstName(userrequest.getFirstName());
            user.setLastName(userrequest.getLastName());
            user.setPassword(passwordEncoder.encode(userrequest.getPassword()));
            user.setCreatedAt(LocalDateTime.now());
            user.setUpdatedAt(LocalDateTime.now());

            // Fetch role from the database
            Role role = roleRepository.findById(userrequest.getRoleId())
                    .orElseThrow(() -> new RuntimeException("Role not found"));

            user.setRole(role); // Set the role for the user

            userRepository.save(user);
            return convertUserResponse(user);
        }
        else {
            throw new RuntimeException("User Already Exists");
        }
    }


    @Transactional
    public UserResponse editUser(Long id, UserRequest userRequest){
        Optional<User> getUserById = userRepository.findById(id);
        if (getUserById.isPresent()) {
            User user = getUserById.get();
            if (userRequest != null) {

                if (userRequest.getEmailAddress() != null){
                    user.setEmailAddress(userRequest.getEmailAddress());
                }

                if (userRequest.getFirstName()!= null){
                    user.setFirstName(user.getFirstName());
                }

                if (userRequest.getLastName() != null){
                    user.setLastName(user.getLastName());
                }

                if (userRequest.getPhoneNumber() != null){
                    user.setPhoneNumber(userRequest.getPhoneNumber());
                }

                user.setUpdatedAt(LocalDateTime.now());

            }
            userRepository.save(user);
            return convertUserResponse(user);
        }
        else {
            throw new RuntimeException("Could not find the user");
        }


    }

    public RoleUpdateResponse updateUserRole(Long userId, Long roleId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new RuntimeException("Role not found"));

        user.setRole(role);
        userRepository.save(user);

        // Create and return the response
        RoleUpdateResponse response = new RoleUpdateResponse();
        response.setUserId(user.getId());
        response.setRoleId(role.getId());
        response.setRoleName(role.getRoleName());

        return response;
    }

    public void changeUserPassword(PasswordRequest passwordRequest) {
        User user = userRepository.findByEmailAddress(passwordRequest.getEmailAddress());

        try{
            user.setPassword(passwordEncoder.encode(passwordRequest.getNewPassword()));
            userRepository.save(user);

        }
        catch (Exception e){
           throw new RuntimeException(e.getMessage());
        }

    }

    public List<UserDetailsResponse> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(this::convertUserDetails).toList();
    }

    public List<UserResponse> getStudentsByCourseAndAdmin(Long adminId, Long courseId) {
        // Ensure the admin exists
        User admin = userRepository.findById(adminId)
                .orElseThrow(() -> new IllegalArgumentException("Admin not found"));

        // Ensure the admin manages the course
        boolean managesCourse = admin.getCourses().stream()
                .anyMatch(course -> course.getId().equals(courseId));

        if (!managesCourse) {
            throw new RuntimeException("Access denied. Admin can only view students from their own courses.");
        }

        // Fetch the course
        Courses course = courseRepository.findById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("Course not found"));

        // Ensure this admin manages specific students in this course
        List<UserResponse> students = course.getUsers()
                .stream()
                .filter(user -> "CLIENT".equalsIgnoreCase(user.getRole().getRoleName()) && Objects.equals(user.getManagedBy(), admin)) // Only students assigned to this admin
                .map(user -> {
                    UserResponse response = new UserResponse();
                    response.setId(user.getId());
                    response.setEmailAddress(user.getEmailAddress());
                    response.setFirstName(user.getFirstName());
                    response.setLastName(user.getLastName());
                    response.setPhoneNumber(user.getPhoneNumber());
                    response.setRole(user.getRole().getRoleName());
                    response.setCreatedAt(user.getCreatedAt());
                    return response;
                })
                .toList();

        return students;
    }


    @Transactional
    public void assignStudentToAdmin(Long adminId, Long studentId) {
        User admin = userRepository.findById(adminId)
                .orElseThrow(() -> new IllegalArgumentException("Admin not found"));

        User student = userRepository.findById(studentId)
                .orElseThrow(() -> new IllegalArgumentException("Student not found"));

        // Assign student to the admin
        student.setManagedBy(admin);
        userRepository.save(student);
    }




    public UserDetailsResponse getUserById(Long userId, Long adminId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("Student not found"));


        // If adminId is null, return the user details without access check
        if (adminId == null) {
            return convertUserDetails(user);
        }

        // Get admin's courses and convert them to CourseResponse
        List<CourseResponse> adminCourses = userRepository.findById(adminId)
                .orElseThrow(() -> new IllegalArgumentException("Admin not found"))
                .getCourses()
                .stream()
                .map(courseService::mapToCourseResponse)  // Convert each Course to CourseResponse
                .toList();

        // Convert user's courses to CourseResponse for comparison
        List<CourseResponse> userCourses = user.getCourses()
                .stream()
                .map(courseService::mapToCourseResponse)
                .toList();

        // Check if the student belongs to any of the admin's courses
        boolean hasAccess = userCourses.stream().anyMatch(adminCourses::contains);

        if (!hasAccess) {
            throw new RuntimeException("Access denied. Admin is not authorized to view this student.");
        }

        return convertUserDetails(user);
    }

    public List<UserResponse> getUnenrolledStudents() {
        List<User> unenrolledStudents = userRepository.findUnenrolledStudents();
        return unenrolledStudents.stream().map(this::convertUserResponse).toList();
    }

    public void deleteUserById(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new RuntimeException("User not found");
        }
        userRepository.deleteById(userId);
    }

    public UserDetailsResponse getEachUserById(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("Student not found"));



        // Convert user's courses to CourseResponse for comparison
        List<CourseResponse> userCourses = user.getCourses()
                .stream()
                .map(courseService::mapToCourseResponse)
                .toList();

        return convertUserDetails(user);
    }
}
