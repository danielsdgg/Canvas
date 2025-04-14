import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/authContext";
import axiosInstance from "../api/api";

interface Lesson {
  id: number;
  title: string;
}

const LessonDetails: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { userToken } = useAuth(); // Get userToken from AuthContext

  useEffect(() => {
    const fetchLesson = async () => {
      const url = axiosInstance.getUri() + `/api/v1/lessons/${lessonId}`
      if (!lessonId) return;

      try {
        setLoading(true);
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${userToken}`, 
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch lesson details");
        }
        const data: Lesson = await response.json();
        setLesson(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [lessonId, userToken]); 

  if (loading) {
    return <div className="p-6 text-gray-700">Loading lesson details...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Error: {error}</div>;
  }

  if (!lesson) {
    return <div className="p-6 text-gray-700">Lesson not found</div>;
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{lesson.title}</h1>
    </div>
  );
};

export default LessonDetails;
