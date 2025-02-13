package com.canvas.springboot.repositories;

import com.canvas.springboot.entities.AssignmentSubmission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssignmentSubmissionRepository extends JpaRepository<AssignmentSubmission, Long> {
    List<AssignmentSubmission> findByUserIdAndIsGradedTrue(Long userId);
    List<AssignmentSubmission> findByIsGradedTrue();
    List<AssignmentSubmission> findByUserId(Long userId);
}
