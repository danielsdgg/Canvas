import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
// import Courses from './components/CoursesList';
// import Details from './components/Details';
import CourseDetails from './components/CourseDetails';
import CoursesList from './components/CoursesList';
import LessonDetails from './components/LessonDetails';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CreateCourse from './components/CreateCourse';

function App() {
  return (
      <Router>
      <div className="flex">
        <div className="flex-grow p-4 md:ml-64">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-course" element={<CreateCourse />} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/calendar' element={<Calendar/>} />
            <Route path="/" element={<Navigate to="/courses" replace />} />
            <Route path="/courses" element={<CoursesList />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetails />} />
            <Route path="*" element={<p className="text-center text-gray-500">404 - Page Not Found</p>} />
          </Routes>
        </div>
      </div>
      </Router>
  );
}

export default App;
