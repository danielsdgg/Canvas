import React, { useState, useEffect } from 'react';
import SideNav from './SideNav';

interface Event {
  date: number; // The day of the month
  title: string; // Title of the event
  description: string; // Description of the event
  time: string; // Time of the event
  location: string; // Event location
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events: Event[] = [
    { date: 5, title: 'Assignment Due', description: 'Submit your final assignment for the course.', time: '5:00 PM', location: 'Online' },
    { date: 15, title: 'Project Presentation', description: 'Present your final project to the class.', time: '10:00 AM', location: 'Room 204' },
    { date: 20, title: 'Meeting with Team', description: 'Discuss project progress and next steps.', time: '2:00 PM', location: 'Room 305' },
    { date: 27, title: 'Workshop', description: 'Attend a hands-on workshop on new technologies.', time: '9:00 AM', location: 'Conference Room A' },
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
            day === currentDate.getDate() ? 'bg-blue-200' : 'bg-white'
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
            <div className="absolute bottom-2 w-2 h-2 rounded-full bg-red-500"></div>
          )}
        </div>
      );
    }

    return days;
  };

  useEffect(() => {
    const now = new Date();
    setCurrentDate(now);
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <SideNav />
      <div className="flex-1 p-4 md:ml-4 h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold text-center mb-4">{monthName}</h2>
        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="font-semibold text-center bg-blue-200 p-2">
              {day}
            </div>
          ))}
          {renderDays()}
        </div>

        <div className="mt-6">
          {/* Event Details Section */}
          {selectedEvent && (
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{selectedEvent.title}</h3>
              <p><strong>Date:</strong> {selectedEvent.date}</p>
              <p><strong>Time:</strong> {selectedEvent.time}</p>
              <p><strong>Location:</strong> {selectedEvent.location}</p>
              <p><strong>Description:</strong> {selectedEvent.description}</p>
              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Event Details Modal */}
        {isModalOpen && selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white rounded-lg p-6 w-80 max-w-full">
              <h3 className="text-xl font-semibold mb-4">Event Details</h3>
              <p><strong>Date:</strong> {selectedEvent.date}</p>
              <p><strong>Event:</strong> {selectedEvent.title}</p>
              <p><strong>Description:</strong> {selectedEvent.description}</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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
