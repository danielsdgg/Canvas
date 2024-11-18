import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';

import CourseDetails from './components/CourseDetails';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
import CreateCourse from './components/CreateCourse';
import Inbox from './components/Inbox';
import History from './components/History';
import Help from './components/Help';
import Account from './components/Accounts';
import LessonDetails from './components/LessonDetails';
import CoursesList from './components/CoursesList';
import DayContentDetails from './components/DayContentDetails';
// import Auth from './components/Auth';
// import Profile from './components/Profile';

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
            <Route path='/inbox' element={<Inbox/>} />
            <Route path='/accounts' element={<Account/>} />
            <Route path='/history' element={<History/>} />
            <Route path='/help' element={<Help/>} />
            <Route path="/create-course" element={<CreateCourse />} />
            <Route path='/calendar' element={<Calendar/>} />
            <Route path="/courses" element={<CoursesList />} />
            <Route path="/course/:courseId" element={<CourseDetails />} />
            <Route path="/course/:courseId/lesson/:lessonId" element={<LessonDetails />} />
            <Route path="/courses/:courseId/lessons/:lessonId/contents/:dayNumber" element={<DayContentDetails />} />
            </Routes>
        </div>
      </div>
      </Router>
  );
}

export default App;
