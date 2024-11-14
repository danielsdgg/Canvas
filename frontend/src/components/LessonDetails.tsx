import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface LessonContent {
    id: number;
    week_number: number;
    day_number: number;  // This will indicate which day the content is for (1 = Monday, 5 = Friday)
    content_type: string;
    content: string;
    week_start: string;
    week_end: string;
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
                    `http://localhost:5000/courses/${courseId}/lessons/${lessonId}/contents`
                );
                setLessonContents(response.data);
            } catch (err) {
                setError('Failed to fetch lesson contents');
                console.error(err);
            }
        };

        fetchLessonContents();
    }, [courseId, lessonId]);

    // Group the content by week number and day
    const groupedByWeek = lessonContents.reduce((acc, content) => {
        const { week_number, day_number } = content;
        if (!acc[week_number]) {
            acc[week_number] = [];
        }
        acc[week_number].push(content);
        return acc;
    }, {} as Record<number, LessonContent[]>);

    return (
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
                                            <p className="text-gray-600">
                                                <strong className="font-semibold">Type:</strong> {content.content_type}
                                            </p>
                                            <p className="mt-2 text-gray-700">{content.content}</p>
                                            <p className="mt-2 text-gray-600">
                                                <strong className="font-semibold">Week Start:</strong> {content.week_start}
                                            </p>
                                            <p className="mt-2 text-gray-600">
                                                <strong className="font-semibold">Week End:</strong> {content.week_end}
                                            </p>
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
    );
};

export default LessonDetails;
