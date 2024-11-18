import React, { useState, useEffect } from "react";
import axios from "axios";

type LessonContent = {
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  content5: string;
  content6: string;
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
                  <strong>{content.content_type}:</strong> {content.content1}
                  <strong>{content.content_type}:</strong> {content.content2}
                  <strong>{content.content_type}:</strong> {content.content3}
                  <strong>{content.content_type}:</strong> {content.content4}
                  <strong>{content.content_type}:</strong> {content.content5}
                  <strong>{content.content_type}:</strong> {content.content6}
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
