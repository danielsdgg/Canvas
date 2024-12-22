package com.canvas.springboot.services;

import com.canvas.springboot.entities.Role;
import com.canvas.springboot.entities.User;
import com.canvas.springboot.models.requests.LoginRequest;
import com.canvas.springboot.models.requests.RegisterRequest;
import com.canvas.springboot.models.requests.UserRequest;
import com.canvas.springboot.models.responses.LoginResponse;
import com.canvas.springboot.models.responses.UserResponse;
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
import java.util.Objects;
import java.util.Optional;

@Service
@Slf4j
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenUtil jwtUtil;

    @Autowired
    @Lazy
    private AuthenticationManager authenticationManager;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                new ArrayList<>());
    }

    public LoginResponse loginUser(LoginRequest loginRequest) throws Exception {
        User user = userRepository.findByEmailAddress(loginRequest.getEmailAddress());
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), loginRequest.getPassword())
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
        userResponse.setUsername(user.getUsername());

        return userResponse;

    }

    @Transactional
    public UserResponse registerUser(RegisterRequest userrequest) {

        User findUserByEmail =  userRepository.findByEmailAddress(userrequest.getEmailAddress());

        if (findUserByEmail == null) {
            User user = new User();

            user.setUsername(userrequest.getUsername());
            user.setEmailAddress(userrequest.getEmailAddress());
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
                if (!Objects.equals(userRequest.getUsername(), "")){
                    user.setUsername(userRequest.getUsername());
                }

                if (userRequest.getEmailAddress() != null){
                    user.setEmailAddress(userRequest.getEmailAddress());
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
}
