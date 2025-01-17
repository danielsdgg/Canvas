package com.canvas.springboot.repositories;

import com.canvas.springboot.entities.AssignmentSubmission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssignmentSubmissionRepository extends JpaRepository<AssignmentSubmission, Long> {
}
