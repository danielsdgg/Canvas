import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admindashboard from '../pages/Admin/Admindashboard'
import Calendar from "../components/Calendar";
import Inbox from "../components/Inbox";
import History from "../components/History";
import Help from "../components/Help";
import Account from "../pages/Shared/Accounts";
import LessonPage from '../components/LessonPage';
import CourseDetails from "../components/CourseDetails";
import UserDetail from '../pages/Shared/UserDetail';
import EnrolledAdmins from '../components/EnrolledAdmins';

//   Frontend lessons
import Lesson1 from '../pages/Frontend/Lesson1';
import Lesson2 from '../pages/Frontend/Lesson2';
import Lesson3 from '../pages/Frontend/Lesson3';

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
import Dayy11 from '../pages/Frontend/Lesson2-pages/Dayy11';
import Dayy12 from '../pages/Frontend/Lesson2-pages/Dayy12';
// lesson 3 pages
import Date1 from '../pages/Frontend/Lesson3-pages/Date1';
import Date2 from '../pages/Frontend/Lesson3-pages/Date2';
import Date3 from '../pages/Frontend/Lesson3-pages/Date3';
import Date4 from '../pages/Frontend/Lesson3-pages/Date4';
import Date5 from '../pages/Frontend/Lesson3-pages/Date5';
import Date6 from '../pages/Frontend/Lesson3-pages/Date6';
import Date7 from '../pages/Frontend/Lesson3-pages/Date7';
import Date8 from '../pages/Frontend/Lesson3-pages/Date8';
import Date9 from '../pages/Frontend/Lesson3-pages/Date9';
import Date10 from '../pages/Frontend/Lesson3-pages/Date10';
import Date11 from '../pages/Frontend/Lesson3-pages/Date11';

// backend lessons
import Leson1 from '../pages/Backend/Leson1';
import Leson2 from '../pages/Backend/Leson2';
// lesson 1 pages
import Dey1 from '../pages/Backend/Leson1-pages/Dey1';
import Dey2 from '../pages/Backend/Leson1-pages/Dey2';
import Dey3 from '../pages/Backend/Leson1-pages/Dey3';
import Dey4 from '../pages/Backend/Leson1-pages/Dey4';
import Dey5 from '../pages/Backend/Leson1-pages/Dey5';
import Dey6 from '../pages/Backend/Leson1-pages/Dey6';
import Dey7 from '../pages/Backend/Leson1-pages/Dey7';
import Dey8 from '../pages/Backend/Leson1-pages/Dey8';
import Dey9 from '../pages/Backend/Leson1-pages/Dey9';
import Dey10 from '../pages/Backend/Leson1-pages/Dey10';
import Dey11 from '../pages/Backend/Leson1-pages/Dey11';
import Dey12 from '../pages/Backend/Leson1-pages/Dey12';
import Dey13 from '../pages/Backend/Leson1-pages/Dey13';
// lesson 2 pages
import Deyy1 from '../pages/Backend/Leson2-pages/Deyy1';
import Deyy2 from '../pages/Backend/Leson2-pages/Deyy2';
import Deyy3 from '../pages/Backend/Leson2-pages/Deyy3';
import Deyy4 from '../pages/Backend/Leson2-pages/Deyy4';
import Deyy5 from '../pages/Backend/Leson2-pages/Deyy5';
import Deyy6 from '../pages/Backend/Leson2-pages/Deyy6';
import Deyy7 from '../pages/Backend/Leson2-pages/Deyy7';
import Deyy8 from '../pages/Backend/Leson2-pages/Deyy8';
import Deyy9 from '../pages/Backend/Leson2-pages/Deyy9';
import Deyy10 from '../pages/Backend/Leson2-pages/Deyy10';
import Deyy11 from '../pages/Backend/Leson2-pages/Deyy11';
import Deyy12 from '../pages/Backend/Leson2-pages/Deyy12';

// cyber security lessons
import Lesoon1 from '../pages/Cyber/Lesoon1';
import Lesoon2 from '../pages/Cyber/Lesoon2';
import Lesoon3 from '../pages/Cyber/Lesoon3';
import Lesoon4 from '../pages/Cyber/Lesoon4';
import Lesoon5 from '../pages/Cyber/Lesoon5';
import Lesoon6 from '../pages/Cyber/Lesoon6';
// lesson 1 pages
import Det1 from '../pages/Cyber/Lesoon1-pages/Det1';
import Det2 from '../pages/Cyber/Lesoon1-pages/Det2';
import Det3 from '../pages/Cyber/Lesoon1-pages/Det3';
import Det4 from '../pages/Cyber/Lesoon1-pages/Det4';
import Det5 from '../pages/Cyber/Lesoon1-pages/Det5';
import Det6 from '../pages/Cyber/Lesoon1-pages/Det6';
import Det7 from '../pages/Cyber/Lesoon1-pages/Det7';
import Det8 from '../pages/Cyber/Lesoon1-pages/Det8';
import Det9 from '../pages/Cyber/Lesoon1-pages/Det9';
import Det10 from '../pages/Cyber/Lesoon1-pages/Det10';
import Det11 from '../pages/Cyber/Lesoon1-pages/Det11';
import Det12 from '../pages/Cyber/Lesoon1-pages/Det12';
import Det13 from '../pages/Cyber/Lesoon1-pages/Det13';
import Det14 from '../pages/Cyber/Lesoon1-pages/Det14';
import Det15 from '../pages/Cyber/Lesoon1-pages/Det15';
import Det16 from '../pages/Cyber/Lesoon1-pages/Det16';


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
            <Route path="/courses" element={<EnrolledAdmins />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonPage />} />
            <Route path="*" element={<div className="p-6 text-center">404: Page Not Found</div>}/>
            <Route path="/user/:emailAddress" element={<UserDetail />} />

             {/* cyber security lessons  */}
             <Route path="/courses/:courseId/lessons/8" element={<Lesoon1 />} />
             <Route path="/courses/:courseId/lessons/9" element={<Lesoon2 />} />
             <Route path="/courses/:courseId/lessons/10" element={<Lesoon3 />} />
             <Route path="/courses/:courseId/lessons/11" element={<Lesoon4 />} />
             <Route path="/courses/:courseId/lessons/12" element={<Lesoon5 />} />
             <Route path="/courses/:courseId/lessons/13" element={<Lesoon6 />} />

            {/* backend lessons*/}
            <Route path="/courses/:courseId/lessons/5" element={<Leson1 />} />
            <Route path="/courses/:courseId/lessons/6" element={<Leson2 />} />

            {/* frontend lessons */}
            <Route path="/courses/:courseId/lessons/1" element={<Lesson1 />} />
            <Route path="/courses/:courseId/lessons/2" element={<Lesson2 />} />
            <Route path="/courses/:courseId/lessons/3" element={<Lesson3 />} />

            
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
            <Route path='/fdl2day11' element={<Dayy11/>} />
            <Route path='/fdl2day12' element={<Dayy12/>} />
            {/* lesson 3 */}
            <Route path='/fdl3day1' element={<Date1/>} />
            <Route path='/fdl3day2' element={<Date2/>} />
            <Route path='/fdl3day3' element={<Date3/>} />
            <Route path='/fdl3day4' element={<Date4/>} />
            <Route path='/fdl3day5' element={<Date5/>} />
            <Route path='/fdl3day6' element={<Date6/>} />
            <Route path='/fdl3day7' element={<Date7/>} />
            <Route path='/fdl3day8' element={<Date8/>} />
            <Route path='/fdl3day9' element={<Date9/>} />
            <Route path='/fdl3day10' element={<Date10/>} />
            <Route path='/fdl3day11' element={<Date11/>} />

            {/* backend pages here */}
            {/* lesson 1 */}
            <Route path='/sdl1day1' element={<Dey1/>} />
            <Route path='/sdl1day2' element={<Dey2/>} />
            <Route path='/sdl1day3' element={<Dey3/>} />
            <Route path='/sdl1day4' element={<Dey4/>} />
            <Route path='/sdl1day5' element={<Dey5/>} />
            <Route path='/sdl1day6' element={<Dey6/>} />
            <Route path='/sdl1day7' element={<Dey7/>} />
            <Route path='/sdl1day8' element={<Dey8/>} />
            <Route path='/sdl1day9' element={<Dey9/>} />
            <Route path='/sdl1day10' element={<Dey10/>} />
            <Route path='/sdl1day11' element={<Dey11/>} />
            <Route path='/sdl1day12' element={<Dey12/>} />
            <Route path='/sdl1day13' element={<Dey13/>} />
            {/* lesson 2 */}
            <Route path='/sdl2day1' element={<Deyy1/>} />
            <Route path='/sdl2day2' element={<Deyy2/>} />
            <Route path='/sdl2day3' element={<Deyy3/>} />
            <Route path='/sdl2day4' element={<Deyy4/>} />
            <Route path='/sdl2day5' element={<Deyy5/>} />
            <Route path='/sdl2day6' element={<Deyy6/>} />
            <Route path='/sdl2day7' element={<Deyy7/>} />
            <Route path='/sdl2day8' element={<Deyy8/>} />
            <Route path='/sdl2day9' element={<Deyy9/>} />
            <Route path='/sdl2day10' element={<Deyy10/>} />
            <Route path='/sdl2day11' element={<Deyy11/>} />
            <Route path='/sdl2day12' element={<Deyy12/>} />

            {/* cyber security pages here */}
            {/* lesson 1 */}
            <Route path='/csl1day1' element={<Det1/>} />
            <Route path='/csl1day2' element={<Det2/>} />
            <Route path='/csl1day3' element={<Det3/>} />
            <Route path='/csl1day4' element={<Det4/>} />
            <Route path='/csl1day5' element={<Det5/>} />
            <Route path='/csl1day6' element={<Det6/>} />
            <Route path='/csl1day7' element={<Det7/>} />
            <Route path='/csl1day8' element={<Det8/>} />
            <Route path='/csl1day9' element={<Det9/>} />
            <Route path='/csl1day10' element={<Det10/>} />
            <Route path='/csl1day11' element={<Det11/>} />
            <Route path='/csl1day12' element={<Det12/>} />
            <Route path='/csl1day13' element={<Det13/>} />
            <Route path='/csl1day14' element={<Det14/>} />
            <Route path='/csl1day15' element={<Det15/>} />
            <Route path='/csl1day16' element={<Det16/>} />

        </Routes>
    </div>
  )
}

export default Adminroutes