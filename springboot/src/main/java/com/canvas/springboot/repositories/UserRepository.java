package com.canvas.springboot.repositories;

import com.canvas.springboot.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmailAddress(String emailAddress);

    @Query("SELECT u FROM User u WHERE u.id NOT IN (SELECT uc.id FROM User uc JOIN uc.courses c)")
    List<User> findUnenrolledStudents();

}
