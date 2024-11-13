import React, { useState, useEffect } from "react";
import axios from "axios";

type LessonContent = {
  content: string;
  content_type: string;
};

type Lesson = {
  lesson_title: string;
  lesson_description: string;
  contents: LessonContent[];
};

type LessonsProps = {
  courseId: number;
  weekNumber: number;
};

const LessonContents: React.FC<LessonsProps> = ({ courseId, weekNumber }) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLessonContents = async () => {
      try {
        const response = await axios.get(`/courses/${courseId}/lessons/week/${weekNumber}`);
        setLessons(response.data);
      } catch (err) {
        setError("Could not fetch lessons for the specified week.");
        console.error(err);
      }
    };

    fetchLessonContents();
  }, [courseId, weekNumber]);

  return (
    <div>
      <h2>Lesson Contents for Week {weekNumber}</h2>
      {error && <p>{error}</p>}
      {lessons.length === 0 ? (
        <p>No lessons found for this week.</p>
      ) : (
        lessons.map((lesson, index) => (
          <div key={index} className="lesson-card">
            <h3>{lesson.lesson_title}</h3>
            <p>{lesson.lesson_description}</p>
            <ul>
              {lesson.contents.map((content, contentIndex) => (
                <li key={contentIndex}>
                  <strong>{content.content_type}:</strong> {content.content}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default LessonContents;
