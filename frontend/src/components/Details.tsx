import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  term: string;
  content: { module: string; lessons: string[] }[];
}

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (!id) {
      console.error("Invalid course ID");
      return;
    }
    
    // Fetch course details from db.json
    fetch(`http://localhost:5000/courses/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const courseData = data.courses.find((course: Course) => course.id === parseInt(id, 10));
        setCourse(courseData || null);
      })
      .catch((error) => console.error('Error fetching course details:', error));
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
      <p className="text-gray-700 mb-2">{course.description}</p>
      <p className="text-gray-500 mb-6">Instructor: {course.instructor} | Term: {course.term}</p>

      <h3 className="text-2xl font-semibold mb-4">Course Contents</h3>
      <div className="space-y-4">
        {course.content.map((module, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm bg-white">
            <h4 className="text-xl font-semibold text-blue-600">{module.module}</h4>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {module.lessons.map((lesson, i) => (
                <li key={i}>{lesson}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link to="/courses" className="text-blue-500 hover:underline mt-6 inline-block">
        Back to Courses
      </Link>
    </div>
  );
};

export default Details;
