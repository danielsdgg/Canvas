export interface Lesson {
    id: string;
    title: string;
  }
  
  export interface Course {
    id: number;
    title: string;
    description: string;
    duration: string;
    lessons: Lesson[];
  }
  
  export const coursesList: Course[] = [
    {
      id: 1,
      title: "Data Science",
      description: "Learn the foundations of data science, machine learning, and big data analysis.",
      duration: "6 months",
      lessons: [
        { id: "lesson1", title: "Lesson 1 - Introduction to Data Science" },
        { id: "lesson2", title: "Lesson 2 - Python for Data Science" },
        { id: "lesson3", title: "Lesson 3 - Data Wrangling and Cleaning" },
        { id: "lesson4", title: "Lesson 4 - Data Visualization with Python" },
        { id: "lesson5", title: "Lesson 5 - Statistics for Data Science" },
        { id: "lesson6", title: "Lesson 6 - Introduction to Machine Learning" },
      ],
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Master the art of creating visually appealing and responsive web interfaces.",
      duration: "6 months",
      lessons: [
        { id: "lesson7", title: "Lesson 1 - Introduction to Web Development" },
        { id: "lesson8", title: "Lesson 2 - HTML Basics and Advanced" },
        { id: "lesson9", title: "Lesson 3 - CSS Fundamentals and Flexbox/Grid" },
        { id: "lesson10", title: "Lesson 4 - JavaScript Basics" },
        { id: "lesson11", title: "Lesson 5 - React.js for Building Interactive UIs" },
        { id: "lesson12", title: "Lesson 6 - Frontend Project: Building a Portfolio Website" },
      ],
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Learn to create robust server-side applications and APIs.",
      duration: "7 months",
      lessons: [
        { id: "lesson13", title: "Lesson 1 - Introduction to Backend Development" },
        { id: "lesson14", title: "Lesson 2 - Setting Up a Backend Environment" },
        { id: "lesson15", title: "Lesson 3 - Node.js Basics and Express.js" },
        { id: "lesson16", title: "Lesson 4 - Database Management with MongoDB" },
        { id: "lesson17", title: "Lesson 5 - Authentication and Authorization" },
        { id: "lesson18", title: "Lesson 6 - RESTful API Design and Development" },
        { id: "lesson19", title: "Lesson 7 - Deploying Backend Applications" },
      ],
    },
  ];
  
  export const courseDetails: Record<string, Course> = {
    "1": coursesList[0],
    "2": coursesList[1],
    "3": coursesList[2],
  };
  
  export const lessonDetails: Record<string, { title: string; content: string }> = {
    // Data Science Lessons
    lesson1: {
      title: "Introduction to Data Science",
      content: "Understand what data science is, its importance, and its various applications.",
    },
    lesson2: {
      title: "Python for Data Science",
      content: "Learn Python programming with a focus on data science libraries like Pandas, NumPy, and Matplotlib.",
    },
    lesson3: {
      title: "Data Wrangling and Cleaning",
      content: "Learn techniques to clean and prepare data for analysis.",
    },
    lesson4: {
      title: "Data Visualization with Python",
      content: "Create stunning data visualizations using tools like Matplotlib and Seaborn.",
    },
    lesson5: {
      title: "Statistics for Data Science",
      content: "Understand statistical concepts crucial for data analysis.",
    },
    lesson6: {
      title: "Introduction to Machine Learning",
      content: "Dive into the basics of machine learning, including supervised and unsupervised learning.",
    },
  
    // Frontend Development Lessons
    lesson7: {
      title: "Introduction to Web Development",
      content: "Learn the basics of web development and how the internet works.",
    },
    lesson8: {
      title: "HTML Basics and Advanced",
      content: "Master HTML for structuring web content.",
    },
    lesson9: {
      title: "CSS Fundamentals and Flexbox/Grid",
      content: "Learn how to style websites using modern CSS techniques.",
    },
    lesson10: {
      title: "JavaScript Basics",
      content: "Understand core JavaScript concepts and DOM manipulation.",
    },
    lesson11: {
      title: "React.js for Building Interactive UIs",
      content: "Learn how to use React.js for creating modern user interfaces.",
    },
    lesson12: {
      title: "Frontend Project: Building a Portfolio Website",
      content: "Apply what you've learned to build a personal portfolio website.",
    },
  
    // Backend Development Lessons
    lesson13: {
      title: "Introduction to Backend Development",
      content: "Learn what backend development is and its role in web applications.",
    },
    lesson14: {
      title: "Setting Up a Backend Environment",
      content: "Set up your development environment with Node.js and Express.",
    },
    lesson15: {
      title: "Node.js Basics and Express.js",
      content: "Learn the basics of Node.js and build web servers using Express.js.",
    },
    lesson16: {
      title: "Database Management with MongoDB",
      content: "Learn how to manage data using MongoDB.",
    },
    lesson17: {
      title: "Authentication and Authorization",
      content: "Implement secure login systems using JWT and OAuth.",
    },
    lesson18: {
      title: "RESTful API Design and Development",
      content: "Design and build RESTful APIs for your applications.",
    },
    lesson19: {
      title: "Deploying Backend Applications",
      content: "Learn to deploy your backend applications on platforms like Heroku or AWS.",
    },
  };
  

  