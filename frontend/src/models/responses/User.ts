export interface UserResponse {
    userDetails:{
        id:number,
        username: string;
        emailAddress: string;
    }
    token: string;
    role: string;
  }

  interface Assignment {
    id: number;
    title: string;
    description: string;
    dueDate: string; // ISO 8601 date string
}

interface Course {
    id: number;
    courseName: string;
    description: string;
    assignments: Assignment[];
}

export interface UserDetailsResponse {
    id: number;
    emailAddress: string;
    username: string;
    phoneNumber: string;
    createdAt: string; // ISO 8601 date string
    courses: Course[];
    assignments: Assignment[]; // Additional assignments not tied to a course
}
