import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
import Courses from './components/Courses';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/calendar' element={<Calendar/>} />
          <Route path='/courses' element={<Courses/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
