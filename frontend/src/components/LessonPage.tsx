import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Lesson {
  id: number;
  title: string;
  content: string;
}

export default function LessonPage() {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/lessons/${lessonId}`)
      .then((res) => res.json())
      .then((data) => setLesson(data))
      .catch((error) => console.error("Error fetching lesson:", error));
  }, [lessonId]);

  if (!lesson) return <div>Loading lesson...</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{lesson.title}</h1>

      {/* Fetch lesson content from backend */}
      <p className="mt-4">{lesson.content}</p>

      {/* Hardcoded additional content for specific lessons */}
      {lesson.id === 1 && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold">Extra Notes for Lesson 1</h2>
          <p>Lesson 1 covers the basics of programming, including variables and functions.</p>
        </div>
      )}

      {lesson.id === 2 && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold">Extra Notes for Lesson 2</h2>
          <p>Lesson 2 dives into conditional statements and loops.</p>
        </div>
      )}

      {/* You can add more hardcoded content for other lessons similarly */}
    </div>
  );
}
