# Morgan-LMS

Morgan-LMS is a **Learning Management System** designed to facilitate online learning by enabling instructors to manage and track student progress. It provides a structured way to enroll users, assign courses, and monitor learning progress.

## Features

- **User Roles:**
  - **Super Admin:**
    - Enrolls **Admins/Instructors** to a course.
    - Assigns **students** to an Admin/Instructor.
  - **Admins/Instructors:**
    - Manage and track student progress.
  - **Students:**
    - Access assigned courses and track progress of assignments submissions.

- **Course Management:**
  - Admins/Instructors can track student progress within courses.
  - Super Admin has full control over course assignments.

- **User Authentication:**
  - Secure login and role-based access control.

- **Responsive UI:**
  - Built with React and Tailwind CSS for an optimized user experience.

## Technologies Used

### Frontend
- **React (TypeScript - TSX)**: Component-based UI development
- **Tailwind CSS**: Styling framework
- **React Router**: Client-side navigation
- **NPM**: Package manager

### Backend
- **Java (Spring Boot)**: Backend framework
- **MySQL**: Database for storing user and course data
- **Maven**: Dependency and build management

## Installation & Setup

### Backend (Spring Boot + MySQL)
1. Clone the repository:
   ```sh
   git clone https://github.com/danielsdgg/Canvas.git
   ```
2. Navigate to the backend folder:
   ```sh
   cd springboot
   ```
3. Configure database settings in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/canvas
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```
4. Run the backend server:
   ```sh
   mvn spring-boot:run
   ```

### Frontend (React + TypeScript + Tailwind CSS)
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend application:
   ```sh
   npm start
   ```

## Usage

1. **Login:**
   - Super Admin, Admins/Instructors, and Students log in with their assigned credentials.
   
2. **Super Admin Capabilities:**
   - Can assign **Admins/Instructors** to courses.
   - Enrolls **students** to an **Admin/Instructor**.
   
3. **Admins/Instructors Capabilities:**
   - Can **manage and track students' progress**.
   
4. **Students Capabilities:**
   - Can access enrolled **courses** and track progress.

## API Endpoints (Example)
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/v1/auth/login` | POST | User login |
| `/api/v1/users` | GET | Get all users |
| `/api/v1/users/enroll` | POST | Enroll Admins/Instructors |
| `/api/v1/courses/assign` | POST | Assign students to a course |

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Added new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## License
This project is licensed under the **MIT License**.

## Authors

**Daniel Muiruri** & **Owen Ngare**

- **GitHub:** 
  - [danielsdgg](https://github.com/danielsdgg)  
  - [Ngaremaina](https://github.com/Ngaremaina)  

- **Portfolio:** 
  - [danielmuiruri.netlify.app](https://danielmuiruri.netlify.app/)  
  - [owenmaina.netlify.app](https://owenmaina.netlify.app/)  

- **LinkedIn:** 
  - [Daniel Muiruri](https://www.linkedin.com/in/daniel-muiruri-541a701a3/)  
  - [Owen Ngare](https://www.linkedin.com/in/owen-ngare-maina/)  
