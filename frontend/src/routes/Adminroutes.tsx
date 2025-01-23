import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admindashboard from '../pages/Admin/Admindashboard'
import Calendar from "../components/Calendar";
import Inbox from "../components/Inbox";
import History from "../components/History";
import Help from "../components/Help";
import Account from "../pages/Shared/Accounts";
import LessonDetails from "../components/LessonDetails";
import CoursesPage from "../components/CoursesPage";
import CourseDetails from "../components/CourseDetails";
//   FRONTEND ROUTES
import Lesson7 from "../pages/Frontend/Lesson7";
import Lesson8 from "../pages/Frontend/Lesson8";
import Lesson9 from "../pages/Frontend/Lesson9";
import Lesson10 from "../pages/Frontend/Lesson10";
import Lesson11 from "../pages/Frontend/Lesson11";
import Lesson12 from "../pages/Frontend/Lesson12";

//   DATA SCIENCE ROUTES
import Lesson1 from "../pages/Data Science/Lesson1";

const Adminroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/admin-dashboard' element={<Admindashboard/>} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/accounts" element={<Account />} />
            <Route path="/history" element={<History />} />
            <Route path="/help" element={<Help />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetails />} />
            <Route path="/courses" element={<CoursesPage />} />

            {/* data science pages */}
            <Route path="/courses/:courseId/lessons/lesson1" element={<Lesson1 />} />

            {/* frontend pages */}
            <Route path="/courses/:courseId/lessons/lesson7" element={<Lesson7 />} />
            <Route path="/courses/:courseId/lessons/lesson8" element={<Lesson8 />} />
            <Route path="/courses/:courseId/lessons/lesson9" element={<Lesson9 />} />
            <Route path="/courses/:courseId/lessons/lesson10" element={<Lesson10/>} />
            <Route path="/courses/:courseId/lessons/lesson11" element={<Lesson11/>} />
            <Route path="/courses/:courseId/lessons/lesson12" element={<Lesson12/>} />
        </Routes>
    </div>
  )
}

export default Adminroutes