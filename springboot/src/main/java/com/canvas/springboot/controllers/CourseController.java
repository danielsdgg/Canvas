package com.canvas.springboot.controllers;

import com.canvas.springboot.entities.Courses;
import com.canvas.springboot.models.requests.CourseRequest;
import com.canvas.springboot.models.responses.CourseResponse;
import com.canvas.springboot.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping
    public ResponseEntity<List<CourseResponse>> getAllCourses() {
        List<CourseResponse> courseResponse = courseService.getAllCourses();
        return new ResponseEntity<>(courseResponse, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseResponse> getCourseById(@PathVariable Long id) {
        CourseResponse courseResponse = courseService.getCourseById(id);
        return new ResponseEntity<>(courseResponse, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CourseResponse> createCourse(@RequestBody CourseRequest course) {
        CourseResponse courseResponse = courseService.createCourse(course);
        return new ResponseEntity<>(courseResponse, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseResponse> updateCourse(@PathVariable Long id, @RequestBody CourseRequest updatedCourse) {
        CourseResponse courseResponse = courseService.updateCourse(id, updatedCourse);
        return new ResponseEntity<>(courseResponse, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable Long id) {
        courseService.deleteCourse(id);
    }

    @PostMapping("/{courseId}/enroll/{userId}")
    public void enrollUserInCourse(@PathVariable Long courseId, @PathVariable Long userId) {
        courseService.enrollUserInCourse(courseId, userId);
    }
}