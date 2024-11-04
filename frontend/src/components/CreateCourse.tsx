// src/components/Courses/CreateCourse.tsx
import React, { useState } from 'react';
import { createCourse } from './Services/courseService'

// Define the structure of a Lesson object
interface Lesson {
    title: string;
    description: string;
}

// Define the structure of a Course object
interface Course {
    title: string;
    description: string;
    instructor: string;
    term: string;
    lessons: Lesson[];
}

const CreateCourse: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [instructor, setInstructor] = useState<string>('');
    const [term, setTerm] = useState<string>('');
    const [lessons, setLessons] = useState<Lesson[]>([{ title: '', description: '' }]);

    const handleLessonChange = (index: number, field: keyof Lesson, value: string) => {
        const newLessons = [...lessons];
        newLessons[index][field] = value; // Now type-safe with keyof
        setLessons(newLessons);
    };

    const handleAddLesson = () => {
        setLessons([...lessons, { title: '', description: '' }]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const courseData: Course = { title, description, instructor, term, lessons };
        try {
            await createCourse(courseData);
            alert('Course created successfully!');
            // Optionally reset the form here
            setTitle('');
            setDescription('');
            setInstructor('');
            setTerm('');
            setLessons([{ title: '', description: '' }]); // Reset lessons to one empty lesson
        } catch (error) {
            console.error("Error creating course:", error);
        }
    };

    return (
        <div className="container mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl">Create Course</h2>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input"
                    placeholder="Course Title"
                    required
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="input"
                    placeholder="Course Description"
                    required
                />
                <input
                    type="text"
                    value={instructor}
                    onChange={(e) => setInstructor(e.target.value)}
                    className="input"
                    placeholder="Instructor Name"
                    required
                />
                <input
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    className="input"
                    placeholder="Term"
                    required
                />
                {lessons.map((lesson, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={lesson.title}
                            onChange={(e) => handleLessonChange(index, 'title', e.target.value)}
                            className="input"
                            placeholder="Lesson Title"
                            required
                        />
                        <textarea
                            value={lesson.description}
                            onChange={(e) => handleLessonChange(index, 'description', e.target.value)}
                            className="input"
                            placeholder="Lesson Description"
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={handleAddLesson} className="btn">Add Lesson</button>
                <button type="submit" className="btn">Create Course</button>
            </form>
        </div>
    );
};

export default CreateCourse;
