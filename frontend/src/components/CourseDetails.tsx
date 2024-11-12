import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SideNav from './SideNav';

interface Assignment {
  id: number;
  title: string;
  due_date: string;
}

interface LessonContent {
  id: number;
  content: string;
}

interface Lesson {
  id: number;
  title: string;
  description: string;
  order: number;
  lesson_contents: LessonContent[];
  assignments: Assignment[];
}

interface Course {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

const CourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const courseIdNumber = Number(courseId); // Ensure it's a number
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!courseId || isNaN(courseIdNumber)) {
      setError('Invalid course ID.');
      setLoading(false);
      return;
    }

    const fetchCourse = async () => {
      try {
        const response = await fetch(`/course/${courseIdNumber}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course details');
        }
        const data = await response.json();
        setCourse({ ...data, lessons: data.lessons || [] });
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId, courseIdNumber]);

  if (loading) return <div className="spinner">Loading...</div>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <SideNav />
      <div className="p-6 bg-white rounded-lg shadow-lg">
        {course ? (
          <>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h2>
            <p className="text-black mb-2">Description: {course.description}</p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lessons</h3>
            {course.lessons && course.lessons.length > 0 ? (
              <ul className="space-y-4">
                {course.lessons.map((lesson) => (
                  <li key={lesson.id} className="p-4 border rounded-lg bg-gray-50">
                    <Link
                      to={`/course/${courseId}/lessons/${lesson.id}`}
                      className="text-lg font-semibold text-blue-600 hover:underline"
                    >
                      {lesson.title}
                    </Link>
                    <p className="text-gray-600">{lesson.description}</p>
                    <p className="text-gray-600">Order: {lesson.order}</p>

                    {/* Display lesson contents */}
                    {lesson.lesson_contents.length > 0 && (
                      <div className="mt-2">
                        <h4 className="text-xl font-semibold">Lesson Contents</h4>
                        <ul className="ml-6 space-y-2">
                          {lesson.lesson_contents.map((content) => (
                            <li key={content.id} className="text-gray-600">{content.content}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Display assignments */}
                    {lesson.assignments.length > 0 && (
                      <div className="mt-2">
                        <h4 className="text-xl font-semibold">Assignments</h4>
                        <ul className="ml-6 space-y-2">
                          {lesson.assignments.map((assignment) => (
                            <li key={assignment.id} className="text-gray-600">
                              {assignment.title} - Due: {assignment.due_date}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
    </>
  );
};

export default CourseDetails;
