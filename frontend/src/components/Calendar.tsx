import React, { useState, useEffect } from 'react';
import SideNav from './SideNav';

interface Event {
  date: number; // The day of the month
  title: string; // Title of the event
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events] = useState<Event[]>([
    { date: 5, title: 'Assignment Due' },
    { date: 15, title: 'Project Presentation' },
    { date: 20, title: 'Meeting with Team' },
    { date: 27, title: 'Workshop' },
  ]);

  // Get month and year
  const monthName = currentDate.toLocaleString('default', { month: 'long' }) + ' ' + currentDate.getFullYear();
  
  // Calculate days in the current month
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  
  // Calculate the starting day of the month (0 = Sunday, 1 = Monday, ...)
  const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  // Function to render the days in the calendar
  const renderDays = () => {
    const days = [];
    
    // Empty slots for the days before the start of the month
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-20"></div>);
    }

    // Adding the actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === currentDate.getDate();
      const eventForDay = events.find(event => event.date === day);

      days.push(
        <div 
          key={day} 
          className={`border h-20 flex items-center justify-center relative ${
            isToday ? 'bg-blue-200' : 'bg-white'
          }`}
        >
          {day}
          {eventForDay && (
            <div className="absolute bottom-2 text-sm text-red-500">
              {eventForDay.title}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  useEffect(() => {
    // Update current date to the current day whenever the component mounts
    const now = new Date();
    setCurrentDate(now);
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <SideNav />
      <div className="flex-1 p-4 md:ml-64 h-screen overflow-y-auto">
        {/* Adjusting the left margin to accommodate the SideNav width */}
        <h2 className="text-2xl font-bold text-center mb-4">{monthName}</h2>
        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="font-semibold text-center bg-gray-200 p-2">
              {day}
            </div>
          ))}
          {renderDays()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
