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

function App() {

  
  return (
      <Router>
      <div className="flex">
        <div className="flex-grow p-4 md:ml-64">
          <Routes>
          {/* <Route path="/" element={<Auth />} /> */}
            {/* <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} /> */}
            <Route path='/' element={<Dashboard/>} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path='/inbox' element={<Inbox/>} />
            <Route path='/accounts' element={<Account/>} />
            <Route path='/history' element={<History/>} />
            <Route path='/help' element={<Help/>} />
            <Route path="/create-course" element={<CreateCourse />} />
            <Route path='/calendar' element={<Calendar/>} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetails />} />
            <Route path="/courses/:courseId/lessons/lesson7" element={<Lesson1 />} />

            </Routes>
        </div>
      </div>
      </Router>
  );
}

export default App;
