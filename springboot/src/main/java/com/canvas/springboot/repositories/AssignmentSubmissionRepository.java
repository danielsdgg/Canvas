package com.canvas.springboot.repositories;

import com.canvas.springboot.entities.AssignmentSubmission;
import com.canvas.springboot.entities.Assignments;
import com.canvas.springboot.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AssignmentSubmissionRepository extends JpaRepository<AssignmentSubmission, Long> {
    List<AssignmentSubmission> findByUserIdAndIsGradedTrue(Long userId);
    List<AssignmentSubmission> findByIsGradedTrue();
//    List<AssignmentSubmission> findByUserId(Long userId);
    List<AssignmentSubmission> findByUserEmailAddress(String emailAddress);
    Optional<AssignmentSubmission> findByAssignmentAndUser(Assignments assignment, User user);
}
