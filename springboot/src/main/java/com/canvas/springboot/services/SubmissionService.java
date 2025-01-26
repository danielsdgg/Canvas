package com.canvas.springboot.services;

import com.canvas.springboot.entities.Question;
import com.canvas.springboot.entities.Quiz;
import com.canvas.springboot.entities.Submission;
import com.canvas.springboot.entities.User;
import com.canvas.springboot.models.requests.SubmissionRequest;
import com.canvas.springboot.models.responses.SubmissionResponse;
import com.canvas.springboot.repositories.QuizRepository;
import com.canvas.springboot.repositories.SubmissionRepository;
import com.canvas.springboot.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
public class SubmissionService {
    @Autowired
    private SubmissionRepository submissionRepository;

    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public SubmissionResponse processSubmission(SubmissionRequest submissionRequest) {
        // Fetch User and Quiz
        User user = userRepository.findById(submissionRequest.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Quiz quiz = quizRepository.findById(submissionRequest.getQuizId())
                .orElseThrow(() -> new RuntimeException("Quiz not found"));

        // Calculate marks
        int marks = 0;
        for (Map.Entry<Long, String> entry : submissionRequest.getAnswers().entrySet()) {
            Long questionId = entry.getKey();
            String selectedAnswer = entry.getValue();

            Question question = quiz.getQuestions().stream()
                    .filter(q -> q.getId().equals(questionId))
                    .findFirst()
                    .orElseThrow(() -> new RuntimeException("Question not found"));

            if (question.getCorrectAnswer().equals(selectedAnswer)) {
                marks++;
            }
        }

        // Create and save Submission
        Submission submission = new Submission();
        submission.setUser(user);
        submission.setQuiz(quiz);
        submission.setAnswers(submissionRequest.getAnswers());
        submission.setMarks(marks);

        submissionRepository.save(submission);

        // Convert to Response DTO
        return convertSubmissionResponse(submission);
    }


    private SubmissionResponse convertSubmissionResponse(Submission submission) {
        // Convert to a response object
        SubmissionResponse response = new SubmissionResponse();
        response.setId(submission.getId());
        response.setUserId(submission.getUser().getId());
        response.setQuizId(submission.getQuiz().getId());
        response.setMarks(submission.getMarks());

        return response;
    }


}
