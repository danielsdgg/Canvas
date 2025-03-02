import React, { useState, useEffect } from 'react';
import SideNav from './SideNav';

interface Event {
  date: number;
  title: string;
  description: string;
  time: string;
  location: string;
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getFirstFriday = (year: number, month: number): number => {
    for (let day = 1; day <= 7; day++) {
      const date = new Date(year, month, day);
      if (date.getDay() === 5) return day; // Friday
    }
    return 1; // Default (should never reach here)
  };

  const firstFriday = getFirstFriday(currentDate.getFullYear(), currentDate.getMonth());
  const events: Event[] = [
    {
      date: firstFriday,
      title: 'Google Meet Session',
      description: 'Monthly team meeting.',
      time: '11:00 AM - 11:30 AM',
      location: 'Online - Google Meet',
    },
  ];

  const monthName = currentDate.toLocaleString('default', { month: 'long' }) + ' ' + currentDate.getFullYear();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const renderDays = () => {
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-20"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const eventForDay = events.find(event => event.date === day);

      days.push(
        <div 
          key={day} 
          className={`border h-20 flex items-center justify-center relative ${
            day === currentDate.getDate() ? 'bg-indigo-200' : 'bg-white'
          }`}
          onClick={() => {
            if (eventForDay) {
              setSelectedEvent(eventForDay);
              setIsModalOpen(true);
            }
          }}
        >
          {day}
          {eventForDay && (
            <div className="absolute bottom-2 w-2 h-2 rounded-full bg-indigo-500"></div>
          )}
        </div>
      );
    }

    return days;
  };

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <SideNav />
      <div className="flex-1 p-4 md:ml-4 h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-indigo-700">{monthName}</h2>
        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="font-semibold text-center bg-indigo-300 p-2">
              {day}
            </div>
          ))}
          {renderDays()}
        </div>

        {isModalOpen && selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white rounded-lg p-6 w-80 max-w-full">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">{selectedEvent.title}</h3>
              <p><strong>Date:</strong> {selectedEvent.date}</p>
              <p><strong>Time:</strong> {selectedEvent.time}</p>
              <p><strong>Location:</strong> {selectedEvent.location}</p>
              <p><strong>Description:</strong> {selectedEvent.description}</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
