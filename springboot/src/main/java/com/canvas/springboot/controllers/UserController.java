package com.canvas.springboot.controllers;

import com.canvas.springboot.entities.User;
import com.canvas.springboot.models.requests.*;
import com.canvas.springboot.models.responses.LoginResponse;
import com.canvas.springboot.models.responses.RoleUpdateResponse;
import com.canvas.springboot.models.responses.UserDetailsResponse;
import com.canvas.springboot.models.responses.UserResponse;
import com.canvas.springboot.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping(path = "api/v1/users")

public class UserController {
    @Autowired
    private UserService userService;

    @PutMapping
    public ResponseEntity<UserResponse> editUser(@RequestHeader("Authorization") String authorizationHeader, @RequestBody UserRequest userRequest){
        UserResponse userResponse = userService.editUser(authorizationHeader, userRequest);
        return new ResponseEntity<>(userResponse, HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<UserResponse> signUp(@RequestBody RegisterRequest userRequest) {
        UserResponse userResponse = userService.registerUser(userRequest);
        return new ResponseEntity<>(userResponse, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticateUser(@RequestBody LoginRequest loginRequest) throws Exception {
        LoginResponse loginResponse = userService.loginUser(loginRequest);
        return new ResponseEntity<>(loginResponse, HttpStatus.OK);
    }

    @PutMapping("/{userId}/role")
    public ResponseEntity<RoleUpdateResponse> updateRole(
            @PathVariable Long userId,
            @RequestBody RoleUpdateRequest request) {
        RoleUpdateResponse response = userService.updateUserRole(userId, request.getRoleId());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping("/change-password")
    public ResponseEntity<String> changePassword(
            @RequestBody PasswordRequest passwordRequest) {
        userService.changeUserPassword(passwordRequest);
        return ResponseEntity.ok("Password changed successfully");
    }

    @GetMapping
    public ResponseEntity<List<UserDetailsResponse>> getAllUsers() {
        List<UserDetailsResponse> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/profile")
    public ResponseEntity<UserDetailsResponse> getUserById(@RequestHeader("Authorization") String authorizationHeader) {
        UserDetailsResponse userDetails = userService.getUserProfile(authorizationHeader);
        return ResponseEntity.ok(userDetails);
    }

    @GetMapping("/{emailAddress}")
    public ResponseEntity<UserDetailsResponse> getUserByEmail(@PathVariable String emailAddress) {
        UserDetailsResponse userDetails = userService.getUserbyEmailAddress(emailAddress);
        return ResponseEntity.ok(userDetails);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/students")
    public ResponseEntity<List<UserResponse>> getStudentsByCourseAndAdmin(
            @RequestHeader("Authorization") String authorizationHeader,
            @RequestParam Long courseId) {
        List<UserResponse> students = userService.getStudentsByCourseAndAdmin(authorizationHeader, courseId);
        return ResponseEntity.ok(students);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/assign-student")
    public ResponseEntity<String> assignStudentToAdmin(
            @RequestHeader("Authorization") String authorizationHeader,
            @RequestBody AssignStudentRequest request) {
        userService.assignStudentToAdmin(authorizationHeader, request.getStudentId());
        return ResponseEntity.ok("Student assigned to admin successfully.");
    }


    @PreAuthorize("hasRole('ADMIN')") // Only ADMIN can delete users
    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable Long userId) {
        userService.deleteUserById(userId);
        return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
    }


    @PutMapping("/{userId}/status")
    public ResponseEntity<String> updateUserStatus(
            @PathVariable Long userId,
            @RequestParam boolean isActive) {
        String response = userService.updateUserStatus(userId, isActive);
        return ResponseEntity.ok(response);
    }


}