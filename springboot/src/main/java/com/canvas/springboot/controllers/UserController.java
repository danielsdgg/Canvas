package com.canvas.springboot.controllers;

import com.canvas.springboot.entities.User;
import com.canvas.springboot.models.requests.LoginRequest;
import com.canvas.springboot.models.requests.PasswordRequest;
import com.canvas.springboot.models.requests.RegisterRequest;
import com.canvas.springboot.models.requests.UserRequest;
import com.canvas.springboot.models.responses.LoginResponse;
import com.canvas.springboot.models.responses.UserResponse;
import com.canvas.springboot.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PutMapping("/{userId}/change-password")
    public ResponseEntity<String> changePassword(
            @PathVariable Long userId,
            @RequestBody PasswordRequest passwordRequest) {
        userService.changeUserPassword(userId, passwordRequest);
        return ResponseEntity.ok("Password changed successfully");
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        return ResponseEntity.ok(user);
    }

}