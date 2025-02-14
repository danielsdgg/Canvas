import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const reactTopics = [
  {
    week: 1,
    days: [
      { day: 1, title: 'Introduction to React', description: 'Understanding React, its advantages, and setting up a React project.' },
      { day: 2, title: 'JSX & Components', description: 'Learning JSX syntax and creating functional components.' },
      { day: 3, title: 'Props & State', description: 'Understanding component props and managing local state.' },
      { day: 4, title: 'Event Handling', description: 'Handling user events in React applications.' },
      { day: 5, title: 'Conditional Rendering', description: 'Implementing conditional UI rendering in React.' },
    ],
  },
  {
    week: 2,
    days: [
      { day: 6, title: 'Lists & Keys', description: 'Rendering lists dynamically and understanding React keys.' },
      { day: 7, title: 'Forms in React', description: 'Managing forms, controlled vs uncontrolled components.' },
      { day: 8, title: 'Component Lifecycle', description: 'Understanding component lifecycle methods and useEffect.' },
      { day: 9, title: 'React Hooks', description: 'Introduction to React hooks like useState, useEffect.' },
      { day: 10, title: 'Context API', description: 'Managing global state with React Context API.' },
    ],
  },
  {
    week: 3,
    days: [
      { day: 11, title: 'React Router', description: 'Implementing navigation with React Router.' },
      { day: 12, title: 'Fetching API Data', description: 'Fetching and displaying data using fetch and Axios.' },
      { day: 13, title: 'Performance Optimization', description: 'Using React.memo, useCallback, and useMemo.' },
      { day: 14, title: 'React with TypeScript', description: 'Integrating TypeScript into React projects.' },
      { day: 15, title: 'Deploying React Apps', description: 'Deployment options for React applications.' },
    ],
  },
];

const Lesson3 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
    }
  }, []);

  
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">React Learning Plan</h1>
      {reactTopics.map((week) => (
        <div key={week.week} className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Week {week.week}</h2>
          <div className="space-y-4">
            {week.days.map((day) => (
              <Link
                to={`/lesson3/day/${day.day}`}
                key={day.day}
                className="block p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
              >
                <h3 className="text-lg font-medium">Day {day.day}: {day.title}</h3>
                <p className="text-sm text-gray-600">{day.description}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lesson3;