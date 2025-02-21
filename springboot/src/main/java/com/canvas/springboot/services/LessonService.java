package com.canvas.springboot.services;

import com.canvas.springboot.entities.Courses;
import com.canvas.springboot.entities.Lessons;
import com.canvas.springboot.models.requests.LessonRequest;
import com.canvas.springboot.models.responses.LessonResponse;
import com.canvas.springboot.repositories.CourseRepository;
import com.canvas.springboot.repositories.LessonRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class LessonService {

    @Autowired
    private LessonRepository lessonRepository;

    @Autowired
    private CourseRepository courseRepository;

    public List<LessonResponse> getLessons(){
        List<Lessons> lessons = lessonRepository.findAll();
        return lessons.stream().map(this::convertLessonResponse).toList();

    }

    public LessonResponse getLessonById(Long id){
        Lessons lessons = lessonRepository.findById(id).orElseThrow(() -> new RuntimeException("Could not find lesson"));
        return convertLessonResponse(lessons);
    }

    @Transactional
    public LessonResponse createLesson(LessonRequest lessonRequest) {
        Lessons lessons = new Lessons();

        // Set the fields from the request
        lessons.setTitle(lessonRequest.getTitle());

        // Fetch and set the associated course
        Courses course = courseRepository.findById(lessonRequest.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found"));
        lessons.setCourse(course);

        // Save the lesson
        lessonRepository.save(lessons);
        return convertLessonResponse(lessons);
    }

    @Transactional
    public LessonResponse updateLesson(Long id, LessonRequest lessonRequest) {
        // Find the existing lesson
        Lessons lesson = lessonRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Lesson not found"));

        // Update fields only if provided in the request
        if (lessonRequest.getTitle() != null) {
            lesson.setTitle(lessonRequest.getTitle());
        }
        // Save the updated lesson
        lessonRepository.save(lesson);
        return convertLessonResponse(lesson);
    }

    private LessonResponse convertLessonResponse(Lessons lessons) {
        LessonResponse lessonResponse = new LessonResponse();
        lessonResponse.setId(lessons.getId());
        lessonResponse.setTitle(lessons.getTitle());
        return lessonResponse;
    }

}
