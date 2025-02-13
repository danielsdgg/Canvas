package com.canvas.springboot.utils;

import com.canvas.springboot.entities.Lessons;
import com.canvas.springboot.models.responses.LessonResponse;

public class LessonMapper {
    public static LessonResponse mapToLessonResponse(Lessons lessons) {
        LessonResponse response = new LessonResponse();
        response.setId(lessons.getId());
        response.setTitle(lessons.getTitle());
        return response;
    }
}
