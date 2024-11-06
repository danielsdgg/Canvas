// src/components/History.tsx
import React from 'react';
import SideNav from './SideNav';

interface HistoryItem {
  id: number;
  date: string;
  activity: string;
  details: string;
}

const historyData: HistoryItem[] = [
  { id: 1, date: '2024-09-20', activity: 'Assignment Submission', details: 'Math Homework 3 submitted by student.' },
  { id: 2, date: '2024-09-22', activity: 'Grade Update', details: 'Math Homework 3 graded. Grade: B+' },
  { id: 3, date: '2024-09-25', activity: 'Quiz Completed', details: 'Science Quiz 2 completed with a score of 85%' },
  // Add more history items as needed
];

const History: React.FC = () => {
  return (
    <>
    <SideNav/>
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6">Activity History</h2>
      <div className="space-y-4">
        {historyData.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-shadow duration-200"
          >
            <p className="text-gray-500 text-sm">{item.date}</p>
            <h3 className="text-lg font-bold">{item.activity}</h3>
            <p className="text-gray-700">{item.details}</p>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default History;
