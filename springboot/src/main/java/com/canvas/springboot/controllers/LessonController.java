package com.canvas.springboot.controllers;

import com.canvas.springboot.models.requests.LessonRequest;
import com.canvas.springboot.models.responses.LessonResponse;
import com.canvas.springboot.services.LessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/lessons")
public class LessonController {

    @Autowired
    private LessonService lessonService;

    @GetMapping
    public ResponseEntity<List<LessonResponse>> fetchLessons(){
        List<LessonResponse> lessonResponse = lessonService.getLessons();
        return new ResponseEntity<>(lessonResponse, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LessonResponse> fetchLesson(@PathVariable Long id){
        LessonResponse lessonResponse = lessonService.getLessonById(id);
        return new ResponseEntity<>(lessonResponse, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<LessonResponse> addLesson(@RequestBody LessonRequest lessonRequest){
        LessonResponse lessonResponse = lessonService.createLesson(lessonRequest);
        return new ResponseEntity<>(lessonResponse, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LessonResponse> updateLesson(@PathVariable Long id, @RequestBody LessonRequest lessonRequest){
        LessonResponse lessonResponse = lessonService.updateLesson(id, lessonRequest);
        return new ResponseEntity<>(lessonResponse, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteLesson(@PathVariable Long id){
        lessonService.deleteLesson(id);
    }
}
