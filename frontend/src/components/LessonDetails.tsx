import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Assignment {
    assignment_id: number;
    title: string;
    description: string;
    due_date: string;
}

interface WeeklyContent {
    week_number: number;
    content: string;
    assignments: Assignment[];
}

interface Lesson {
    id: number;
    title: string;
    description: string;
    materials?: string;
    weekly_contents: WeeklyContent[];
}

const LessonDetails: React.FC = () => {
    const { lessonId } = useParams();
    const [lesson, setLesson] = useState<Lesson | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLesson = async () => {
            try {
                const response = await fetch(`http://localhost:5000/lessons/${lessonId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setLesson(data);
            } catch (error) {
                console.error('Failed to fetch lesson:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLesson();
    }, [lessonId]);

    if (loading) return <p>Loading...</p>;
    if (!lesson) return <p>Lesson not found.</p>;

    return (
        <div>
            <h1>{lesson.title}</h1>
            <p>{lesson.description}</p>
            {lesson.materials && <p>Materials: {lesson.materials}</p>}
            
            <h2>Weekly Contents</h2>
            {lesson.weekly_contents.map((week, index) => (
                <div key={index} className="mb-4 p-4 border rounded shadow">
                    <h3>Week {week.week_number}</h3>
                    <p>{week.content}</p>
                    
                    <h4>Assignments:</h4>
                    {week.assignments.length > 0 ? (
                        <ul>
                            {week.assignments.map((assignment) => (
                                <li key={assignment.assignment_id}>
                                    <strong>{assignment.title}</strong> - {assignment.description} (Due: {assignment.due_date})
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No assignments for this week.</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LessonDetails;
