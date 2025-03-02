import React from 'react'
import Calendar from "../components/Calendar";
import Inbox from "../components/Inbox";
import History from "../components/History";
import Help from "../components/Help";
import Account from "../pages/Shared/Accounts";
import LessonDetails from "../components/LessonDetails";
import CoursesPage from "../components/CoursesPage";
import CourseDetails from "../components/CourseDetails";
import { Route,Routes } from 'react-router-dom'
import Superdashboard from '../pages/Superadmin/Superdashboard'
//   FRONTEND ROUTES


//   DATA SCIENCE ROUTES

const Superadmin = () => {
  return (
    <div>
        <Routes>
            <Route path='/superdashboard' element={<Superdashboard/>} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/accounts" element={<Account />} />
            <Route path="/history" element={<History />} />
            <Route path="/help" element={<Help />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetails />} />
            {/* data science pages */}

            {/* frontend pages */}

        </Routes>
    </div>
  )
}

export default Superadmin