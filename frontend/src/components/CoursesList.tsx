import React from 'react'
import { coursesList } from '../coursesData'
import SideNav from './SideNav'

const CoursesList: React.FC = () => {
  return (
    <>
    <SideNav/>
    <div>
    {coursesList.map((course) => (
      <div key={course.id}>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <p>Duration: {course.duration}</p>
      </div>
    ))}
  </div>
    </>

  )
}

export default CoursesList