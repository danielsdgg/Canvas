import React from 'react'
import Dashboard from "../components/Dashboard";
import Calendar from "../components/Calendar";
import Inbox from "../components/Inbox";
import History from "../components/History";
import Help from "../components/Help";
import Account from "../pages/Shared/Accounts";
import LessonDetails from "../components/LessonDetails";
import CoursesPage from "../components/CoursesPage";
import CourseDetails from "../components/CourseDetails";
import { Routes, Route } from 'react-router-dom';
import UserDetail from '../pages/Shared/UserDetail';
import Grade from '../components/Grade';



const Clientroutes = () => {
  return (
    <div>
        <Routes>
                    {/* Add your routes here */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/inbox" element={<Inbox />} />
                    <Route path="/accounts" element={<Account />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/courses/:courseId" element={<CourseDetails />} />
                    <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetails />} />
                    <Route path="/user/:userId" element={<UserDetail />} />
                    <Route path="*" element={<Grade />} /> 

                </Routes>
    </div>
  )
}

export default Clientroutes