// src/services/courseService.ts
import api from './api';

export const getAllCourses = async () => {
    const response = await api.get('/courses');
    return response.data;
};

export const getCourse = async (courseId: number) => {
    const response = await api.get(`/courses/${courseId}`);
    return response.data;
};

export const createCourse = async (courseData: any) => {
    const response = await api.post('/post_courses', courseData);
    return response.data;
};

// Add other course-related functions as needed
