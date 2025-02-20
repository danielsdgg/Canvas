package com.canvas.springboot.repositories;

import com.canvas.springboot.entities.Submission;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface SubmissionRepository extends JpaRepository<Submission, Long> {
}
