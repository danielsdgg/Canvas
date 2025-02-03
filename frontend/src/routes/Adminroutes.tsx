import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admindashboard from '../pages/Admin/Admindashboard'
import Calendar from "../components/Calendar";
import Inbox from "../components/Inbox";
import History from "../components/History";
import Help from "../components/Help";
import Account from "../pages/Shared/Accounts";
import LessonPage from '../components/LessonPage';
import CoursesPage from "../components/CoursesPage";
import CourseDetails from "../components/CourseDetails";
import UserDetail from '../pages/Shared/UserDetail';


//   FRONTEND ROUTES
import Lesson8 from "../pages/Frontend/Lesson8";
import Lesson9 from "../pages/Frontend/Lesson9";
import Lesson10 from "../pages/Frontend/Lesson10";

// lesson1 - days
import Lesson1 from '../pages/Frontend/Lesson1';
import Day1 from '../pages/Frontend/Lesson1-pages/Day1';
import Day2 from '../pages/Frontend/Lesson1-pages/Day2';
import Day3 from '../pages/Frontend/Lesson1-pages/Day3';

//   DATA SCIENCE ROUTES



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
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonPage />} />
            <Route path="*" element={<div className="p-6 text-center">404: Page Not Found</div>}/>
            <Route path="/user/:userId" element={<UserDetail />} /> 


            {/* data science pages */}

            {/* frontend lessons */}
            <Route path="/courses/:courseId/lessons/1" element={<Lesson1 />} />
            <Route path="/courses/:courseId/lessons/2" element={<Lesson8 />} />
            <Route path="/courses/:courseId/lessons/3" element={<Lesson9 />} />
            <Route path="/courses/:courseId/lessons/4" element={<Lesson10/>} />
            
            {/* frontend pages here */}
            {/* lesson 1 */}
            <Route path="/fdl1day1" element={<Day1/>} />
            <Route path='/fdl1day2' element={<Day2/>} />
            <Route path="/fdl1day3" element={<Day3/>} />
        </Routes>
    </div>
  )
}

export default Adminroutes