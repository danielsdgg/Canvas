package com.canvas.springboot.controllers;

import com.canvas.springboot.models.requests.QuizRequest;
import com.canvas.springboot.models.responses.QuizResponse;
import com.canvas.springboot.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/quiz")
public class QuizController {
    @Autowired
    private QuizService quizService;

    @PostMapping
    public ResponseEntity<QuizResponse> createQuiz(@RequestBody QuizRequest quizRequest){
        QuizResponse quizResponse = quizService.saveQuiz(quizRequest);
        return new ResponseEntity<>(quizResponse, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuizResponse> getQuizById(@PathVariable Long id){
        QuizResponse quizResponse = quizService.getQuizById(id);
        return new ResponseEntity<>(quizResponse, HttpStatus.OK);
    }
}
