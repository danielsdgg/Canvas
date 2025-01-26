package com.canvas.springboot.services;

import com.canvas.springboot.entities.Question;
import com.canvas.springboot.entities.Quiz;
import com.canvas.springboot.models.requests.QuizRequest;
import com.canvas.springboot.models.responses.QuestionResponse;
import com.canvas.springboot.models.responses.QuizResponse;
import com.canvas.springboot.repositories.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuizService {
    @Autowired
    private QuizRepository quizRepository;

    public QuizResponse saveQuiz(QuizRequest quizRequest) {
        Quiz quiz = new Quiz();
        quiz.setTitle(quizRequest.getTitle());

        // Set the relationship between Quiz and Questions
        List<Question> questions = quizRequest.getQuestions().stream().map(q -> {
            Question question = new Question();
            question.setText(q.getText());
            question.setOptions(q.getOptions());
            question.setCorrectAnswer(q.getCorrectAnswer());
            question.setQuiz(quiz); // Set the parent quiz
            return question;
        }).toList();

        quiz.setQuestions(questions);
        quizRepository.save(quiz);

        return convertQuizResponse(quiz);
    }


    private QuizResponse convertQuizResponse(Quiz quiz) {
        QuizResponse quizResponse = new QuizResponse();
        quizResponse.setTitle(quiz.getTitle());

        if (quiz.getQuestions() != null) {
            List<QuestionResponse> questionResponses = quiz.getQuestions().stream()
                    .map(entityQuestion -> {
                        QuestionResponse questionResponse = new QuestionResponse();
                        questionResponse.setId(entityQuestion.getId());
                        questionResponse.setText(entityQuestion.getText());
                        questionResponse.setOptions(entityQuestion.getOptions());
                        return questionResponse;
                    })
                    .collect(Collectors.toList());
            quizResponse.setQuestions(questionResponses);
        } else {
            quizResponse.setQuestions(Collections.emptyList());
        }

        return quizResponse;
    }

    public QuizResponse getQuizById(Long quizId) {
        Quiz quiz = quizRepository.findById(quizId)
                .orElseThrow(() -> new RuntimeException("Quiz not found"));
        return convertQuizResponse(quiz);
    }

}
