package com.canvas.springboot.repositories;

import com.canvas.springboot.entities.Lessons;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LessonRepository extends JpaRepository<Lessons, Long> {
}
