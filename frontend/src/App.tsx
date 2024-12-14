import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
import CreateCourse from './components/CreateCourse';
import Inbox from './components/Inbox';
import History from './components/History';
import Help from './components/Help';
import Account from './components/Accounts';
import LessonDetails from './components/LessonDetails';
import CourseDetails from './components/CourseDetails';
import CoursesPage from './components/CoursesPage';

//   FRONTEND ROUTES
import Lesson7 from './components/Frontend/Lesson7';
import Lesson8 from './components/Frontend/Lesson8';
import Lesson9 from './components/Frontend/Lesson9';
import Lesson10 from './components/Frontend/Lesson10';
import Lesson11 from './components/Frontend/Lesson11';
import Lesson12 from './components/Frontend/Lesson12';

//   DATA SCIENCE ROUTES
import Lesson1 from './components/Data Science/Lesson1';

function App() {

  
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block md:w-64 bg-gray-100"> {/* Adjust this if you have a Sidebar */}
          {/* Sidebar contents */}
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            {/* Add your routes here */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/accounts" element={<Account />} />
            <Route path="/history" element={<History />} />
            <Route path="/help" element={<Help />} />
            <Route path="/create-course" element={<CreateCourse />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetails />} />
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
      </div>
    </Router>
  );
}

export default App;