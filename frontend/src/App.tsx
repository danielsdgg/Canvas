import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
// import Courses from './components/CoursesList';
// import Details from './components/Details';
import CourseDetails from './components/CourseDetails';
import CoursesList from './components/CoursesList';
// import LessonDetails from './components/LessonDetails';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
import CreateCourse from './components/CreateCourse';
import Inbox from './components/Inbox';
import History from './components/History';
import Help from './components/Help';
import Account from './components/Accounts';
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
        {/* Redirect from root to courses list */}
        {/* <Route path="/" element={<Navigate to="/courses" replace />} /> */}

        {/* Route for the courses list */}
        <Route path="/courses" element={<CoursesList />} />

        {/* Route for course details page with dynamic courseId */}
        <Route path="/course/:id" element={<CourseDetails />} />

        {/* Optional: Add a fallback route for unmatched paths */}
        {/* <Route path="*" element={<Navigate to="/courses" replace />} /> */}
            {/* <Route path="/course/:courseId/lessons/:lessonId" element={<LessonDetails />} /> */}
            {/* <Route path="*" element={<p className="text-center text-gray-500">404 - Page Not Found</p>} /> */}
          </Routes>
        </div>
      </div>
      </Router>
  );
}

export default App;
