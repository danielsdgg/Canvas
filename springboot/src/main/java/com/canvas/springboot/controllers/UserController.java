package com.canvas.springboot.controllers;

import com.canvas.springboot.entities.User;
import com.canvas.springboot.models.requests.LoginRequest;
import com.canvas.springboot.models.requests.PasswordRequest;
import com.canvas.springboot.models.requests.RegisterRequest;
import com.canvas.springboot.models.requests.RoleUpdateRequest;
import com.canvas.springboot.models.requests.UserRequest;
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

    @PutMapping("/{id}")
    public ResponseEntity<UserResponse> editUser(@PathVariable Long id, @RequestBody UserRequest userRequest){
        UserResponse userResponse = userService.editUser(id, userRequest);
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

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/students")
    public ResponseEntity<List<UserResponse>> getStudentsByCourseAndAdmin(
            @RequestParam Long adminId,
            @RequestParam Long courseId) {
        List<UserResponse> students = userService.getStudentsByCourseAndAdmin(adminId, courseId);
        return ResponseEntity.ok(students);
    }


    @PreAuthorize("hasRole('ADMIN')") // Only ADMIN can delete users
    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable Long userId) {
        userService.deleteUserById(userId);
        return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
    }



}