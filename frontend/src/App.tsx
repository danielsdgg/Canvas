import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
import CreateCourse from './components/CreateCourse';
import Inbox from './components/Inbox';
import History from './components/History';
import Help from './components/Help';
import Account from './components/Accounts';
import LessonDetails from './components/LessonDetails';
import CourseDetails from './components/CourseDetails';
import CoursesPage from './components/CoursesPage';
// import Profile from './components/Profile';
import Lesson1 from './components/Frontend/Lesson1';
import Lesson2 from './components/Frontend/Lesson2';

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
            
            {/* frontend pages */}
            <Route path="/courses/:courseId/lessons/lesson7" element={<Lesson1 />} />
            <Route path="/courses/:courseId/lessons/lesson8" element={<Lesson2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
