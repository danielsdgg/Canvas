package com.canvas.springboot.repositories;

import com.canvas.springboot.entities.Assignments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssignmentRepository extends JpaRepository<Assignments, Long> {
}
