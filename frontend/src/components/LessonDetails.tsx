import React from 'react'

const LessonDetails = () => {
  return (
    <div>LessonDetails</div>
  )
}

export default LessonDetails

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// interface Assignment {
//     id: number;
//     title: string;
//     description: string;
//     assigned_at: string;  // Kept as string for consistent formatting with API responses
//     due_date: string;
// }

// interface LessonContent {
//     week_number: number;
//     content_type: string;
//     content: string;
//     week_start: string;
//     week_end: string;
// }

// interface LessonDetailsResponse {
//     lesson_content: LessonContent;
//     assignments: Assignment[];
// }

// const LessonDetails: React.FC = () => {
//     const { lessonId } = useParams();
//     const [lesson, setLesson] = useState<LessonContent | null>(null);
//     const [assignments, setAssignments] = useState<Assignment[]>([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchLesson = async () => {
//             try {
//                 const response = await fetch(`/lesson/${lessonId}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data: LessonDetailsResponse = await response.json();
//                 console.log('Fetched data:', data);  // Log the response for debugging
//                 setLesson(data.lesson_content);
//                 setAssignments(data.assignments);
//             } catch (error) {
//                 console.error('Failed to fetch lesson:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
    
//         fetchLesson();
//     }, [lessonId]);
    

//     if (loading) return <p>Loading...</p>;
//     if (!lesson) return <p>Lesson not found.</p>;

//     return (
//         <div>
//             <h1>Week {lesson.week_number}</h1>
//             <p>Type: {lesson.content_type}</p>
//             <p>{lesson.content}</p>
//             <p>Week Start: {new Date(lesson.week_start).toLocaleDateString()}</p>
//             <p>Week End: {new Date(lesson.week_end).toLocaleDateString()}</p>

//             <h2>Assignments</h2>
//             {assignments.length > 0 ? (
//                 <ul>
//                     {assignments.map((assignment) => (
//                         <li key={assignment.id}>
//                             <strong>{assignment.title}</strong> - {assignment.description} 
//                             (Due: {new Date(assignment.due_date).toLocaleDateString()})
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No assignments for this lesson.</p>
//             )}
//         </div>
//     );
// };

// export default LessonDetails;
