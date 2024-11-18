import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    assignments: {
        id: number;
        title: string;
        description: string;
        assigned_at: string;
        due_date: string;
    }[];
}


const DayContentDetails: React.FC = () => {
    const { courseId, lessonId, dayNumber } = useParams<{ courseId: string; lessonId: string; dayNumber: string }>();
    const [content, setContent] = useState<LessonContent | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!courseId || !lessonId || !dayNumber) {
            setError('Invalid parameters');
            return;
        }
    
        const fetchDayContent = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/courses/${courseId}/lessons/${lessonId}/contents/${dayNumber}`
                );
                setContent(response.data);
            } catch (err) {
                setError('Failed to fetch content for the day');
                console.error(err);
            }
        };
    
        fetchDayContent();
    }, [courseId, lessonId, dayNumber]);
    

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!content) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Day {content.day_number} Details</h1>
            <p className="text-gray-600">
                <strong>Type:</strong> {content.content_type}
            </p>
            <p className="text-gray-700 mt-4">{content.content1}</p>
            <p className="text-gray-700 mt-4">{content.content2}</p>
            <p className="text-gray-700 mt-4">{content.content3}</p>
            <p className="text-gray-700 mt-4">{content.content4}</p>
            <p className="text-gray-700 mt-4">{content.content5}</p>
            <p className="text-gray-700 mt-4">{content.content6}</p>
        </div>
    );
};

export default DayContentDetails;
