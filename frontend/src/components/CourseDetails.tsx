import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Lesson {
    id: number;
    title: string;
    description: string;
    order: number;
    materials?: string;
}

interface Course {
    id: number;
    title: string;
    description: string;
    instructor: string;
    term: string;
    lessons: Lesson[];
}

const CourseDetails: React.FC = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState<Course | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                console.log('Course ID:', courseId); // Log the course ID
                const response = await fetch(`http://localhost:5000/courses/${courseId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch course details');
                }
                const data = await response.json();
                console.log('Fetched course data:', data); // Log the fetched data
                // Ensure lessons is an array
                setCourse({ ...data, lessons: data.lessons || [] });
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [courseId]);

    if (loading) return <p>Loading course details...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            {course ? (
                <>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h2>
                    <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
                    <p className="text-gray-500 mb-4">Term: {course.term}</p>
                    <p className="text-gray-700 mb-6">{course.description}</p>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lessons</h3>
                    {course.lessons && course.lessons.length > 0 ? (
                        <ul className="space-y-4">
                            {course.lessons.map((lesson) => (
                                <li key={lesson.id} className="p-4 border rounded-lg bg-gray-50">
                                    <Link to={`/courses/${courseId}/lessons/${lesson.id}`} className="text-lg font-semibold text-blue-600 hover:underline">
                                        {lesson.title}
                                    </Link>
                                    <p className="text-gray-600">{lesson.description}</p>
                                    {lesson.materials && <p className="text-gray-500 mt-2">Materials: {lesson.materials}</p>}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No lessons available for this course.</p>
                    )}
                </>
            ) : (
                <p>Course not found.</p>
            )}
        </div>
    );
};

export default CourseDetails;
