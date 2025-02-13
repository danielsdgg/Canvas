import React from 'react'
import Dashboard from "../components/Dashboard";
import Calendar from "../components/Calendar";
// import Inbox from "../components/Inbox";
import History from "../components/History";
import Help from "../components/Help";
import Account from "../pages/Shared/Accounts";
import LessonDetails from "../components/LessonDetails";
import CourseDetails from "../components/CourseDetails";
import { Routes, Route } from 'react-router-dom';
import UserDetail from '../pages/Shared/UserDetail';
import Grade from '../components/Grade';
import EnrolledCoursesPage from '../components/EnrolledcoursesPage';

//   FRONTEND ROUTES
import Lesson1 from '../pages/Frontend/Lesson1';
import Lesson2 from '../pages/Frontend/Lesson2';
// lesson1 - days
import Day1 from '../pages/Frontend/Lesson1-pages/Day1';
import Day2 from '../pages/Frontend/Lesson1-pages/Day2';
import Day3 from '../pages/Frontend/Lesson1-pages/Day3';
import Day4 from '../pages/Frontend/Lesson1-pages/Day4';
import Day5 from '../pages/Frontend/Lesson1-pages/Day5';
import Day6 from '../pages/Frontend/Lesson1-pages/Day6';
import Day7 from '../pages/Frontend/Lesson1-pages/Day7';
import Day8 from '../pages/Frontend/Lesson1-pages/Day8';
import Day9 from '../pages/Frontend/Lesson1-pages/Day9';
import Day10 from '../pages/Frontend/Lesson1-pages/Day10';
import Day11 from '../pages/Frontend/Lesson1-pages/Day11';
import Day12 from '../pages/Frontend/Lesson1-pages/Day12';
// lesson 2 - days
import Dayy1 from '../pages/Frontend/Lesson2-pages/Dayy1';
import Dayy2 from '../pages/Frontend/Lesson2-pages/Dayy2';
import Dayy3 from '../pages/Frontend/Lesson2-pages/Dayy3';
import Dayy4 from '../pages/Frontend/Lesson2-pages/Dayy4';
import Dayy5 from '../pages/Frontend/Lesson2-pages/Dayy5';
import Dayy6 from '../pages/Frontend/Lesson2-pages/Dayy6';
import Dayy7 from '../pages/Frontend/Lesson2-pages/Dayy7';
import Dayy8 from '../pages/Frontend/Lesson2-pages/Dayy8';
import Dayy9 from '../pages/Frontend/Lesson2-pages/Dayy9';
import Dayy10 from '../pages/Frontend/Lesson2-pages/Dayy10';



const Clientroutes = () => {
  return (
    <div>
        <Routes>
                    {/* Add your routes here */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/courses" element={<EnrolledCoursesPage />} />
                    {/* <Route path="/inbox" element={<Inbox />} /> */}
                    <Route path="/accounts" element={<Account />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/courses/:courseId" element={<CourseDetails />} />
                    <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonDetails />} />
                    <Route path="/user/:userId" element={<UserDetail />} />
                    <Route path="*" element={<Grade />} /> 

                     {/* frontend lessons */}
            <Route path="/courses/:courseId/lessons/1" element={<Lesson1 />} />
            <Route path="/courses/:courseId/lessons/2" element={<Lesson2 />} />
            
            
            {/* frontend pages here */}
            {/* lesson 1 */}
            <Route path="/fdl1day1" element={<Day1/>} />
            <Route path='/fdl1day2' element={<Day2/>} />
            <Route path="/fdl1day3" element={<Day3/>} />
            <Route path='/fdl1day4' element={<Day4/>} />
            <Route path='/fdl1day5' element={<Day5/>} />
            <Route path='/fdl1day6' element={<Day6/>} />
            <Route path='/fdl1day7' element={<Day7/>} />
            <Route path='/fdl1day8' element={<Day8/>} />
            <Route path='/fdl1day9' element={<Day9/>} />
            <Route path='/fdl1day10' element={<Day10/>} />
            <Route path='/fdl1day11' element={<Day11/>} />
            <Route path='/fdl1day12' element={<Day12/>} />
            {/* lesson 2 */}
            <Route path='/fdl2day1' element={<Dayy1/>} />
            <Route path='/fdl2day2' element={<Dayy2/>} />
            <Route path='/fdl2day3' element={<Dayy3/>} />
            <Route path='/fdl2day4' element={<Dayy4/>} />
            <Route path='/fdl2day5' element={<Dayy5/>} />
            <Route path='/fdl2day6' element={<Dayy6/>} />
            <Route path='/fdl2day7' element={<Dayy7/>} />
            <Route path='/fdl2day8' element={<Dayy8/>} />
            <Route path='/fdl2day9' element={<Dayy9/>} />
            <Route path='/fdl2day10' element={<Dayy10/>} />

                </Routes>
    </div>
  )
}

export default Clientroutes