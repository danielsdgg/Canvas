// src/components/CoursesList.tsx
import React from "react";
import { Link } from "react-router-dom";
import { coursesList } from "../coursesData";
import SideNav from "./SideNav";

const CoursesList: React.FC = () => {
  return (
    <>
      <SideNav />
      <div>
        {coursesList.map((course) => (
          <div key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Duration: {course.duration}</p>
            {/* Link to course details */}
            <Link to={`/courses/${course.id}`} className="text-blue-500">
              View Lessons
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoursesList;
