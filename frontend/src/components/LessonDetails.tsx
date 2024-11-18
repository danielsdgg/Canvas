import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import SideNav from './SideNav';

interface Assignment {
    id: number;
    title: string;
    description: string;
    assigned_at: string;
    due_date: string;
}

interface LessonContent {
    id: number;
    week_number: number;
    day_number: number;
    content_type: string;
    content1: string;
    content2: string;
    content3: string;
    content4: string;
    content5: string;
    content6: string;
    assignments: Assignment[];
}

const LessonDetails: React.FC = () => {
    const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
    const [lessonContents, setLessonContents] = useState<LessonContent[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!courseId || !lessonId) {
            setError('Invalid parameters');
            return;
        }

        const fetchLessonContents = async () => {
            try {
                const response = await axios.get(
                    `/courses/${courseId}/lessons/${lessonId}/contents`
                );
                setLessonContents(response.data);
            } catch (err) {
                setError('Failed to fetch lesson contents');
                console.error(err);
            }
        };

        fetchLessonContents();
    }, [courseId, lessonId]);

    // Group the content by week number
    const groupedByWeek = lessonContents.reduce((acc, content) => {
        const { week_number, day_number } = content;
        if (!acc[week_number]) {
            acc[week_number] = [];
        }
        acc[week_number].push(content);
        return acc;
    }, {} as Record<number, LessonContent[]>);

    return (
        <>
            <SideNav />
            <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Lesson Details</h1>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                    {Object.keys(groupedByWeek).length > 0 ? (
                        Object.entries(groupedByWeek).map(([weekNumber, contents]) => (
                            <div key={weekNumber} className="border-b pb-4 last:border-none">
                                <h3 className="text-xl font-semibold text-gray-700">
                                    Week {weekNumber}
                                </h3>
                                <div className="space-y-4 mt-4">
                                    {contents.map((content) => (
                                        <div key={content.id} className="bg-gray-100 p-4 rounded-md shadow-sm">
                                            <h4 className="text-lg font-semibold text-gray-800">
                                                Day {content.day_number}
                                            </h4>
                                            <div className="mt-2">
                                                <p className="text-blue-900">
                                                    <strong className="font-semibold">Type:</strong>{' '}
                                                    {content.content_type}
                                                </p>
                                                <p className="mt-5  text-gray-800 underline block">{content.content1}</p>
                                                <p className="mt-5  text-gray-800 underline block">{content.content2}</p>
                                                <p className="mt-5  text-gray-800 underline block">{content.content3}</p>
                                                <p className="mt-5  text-gray-800 underline block">{content.content4}</p>
                                                <p className="mt-5  text-gray-800 underline block">{content.content5}</p>
                                                <p className="mt-5  text-gray-800 underline block">{content.content6}</p>

                                                {/* Link to detailed content page */}
                                                {/* <Link to={`/courses/${courseId}/lessons/${lessonId}/contents/${content.day_number}`} className="text-blue-500 hover:underline mt-4 block">
                                                    View Full Content for Day {content.day_number}
                                                </Link> */}

                                                {/* Display Assignments */}
                                                {content.assignments.length > 0 && (
                                                    <div className="mt-4">
                                                        <h5 className="text-lg font-semibold text-gray-800">
                                                            Assignments:
                                                        </h5>
                                                        <ul className="space-y-2 mt-2">
                                                            {content.assignments.map((assignment) => (
                                                                <li key={assignment.id} className="bg-gray-200 p-3 rounded-md">
                                                                    <p className="text-gray-700 font-semibold">
                                                                        {assignment.title}
                                                                    </p>
                                                                    <p className="text-gray-600">
                                                                        {assignment.description}
                                                                    </p>
                                                                    <p className="text-gray-600">
                                                                        <strong>Assigned on:</strong>{' '}
                                                                        {assignment.assigned_at}
                                                                    </p>
                                                                    <p className="text-gray-600">
                                                                        <strong>Due by:</strong> {assignment.due_date}
                                                                    </p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No lesson contents available.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default LessonDetails;
