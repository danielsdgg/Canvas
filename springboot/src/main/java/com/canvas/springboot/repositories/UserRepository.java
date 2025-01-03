package com.canvas.springboot.repositories;

import com.canvas.springboot.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    User findByEmailAddress(String emailAddress);

    Optional<User> findUserByEmailAddress(String emailAddress);
}
