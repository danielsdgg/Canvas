// src/components/lessons/LessonNotFound.tsx
import React from "react";

const LessonNotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p className="text-red-500 text-xl font-semibold">Lesson not found</p>
    </div>
  );
};

export default LessonNotFound;
