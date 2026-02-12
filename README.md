# Attendify | Smart Attendance Tracker

**Attendify** is a powerful MERN Stack application designed to help students manage their academic attendance with precision. It allows users to track their courses, calculate current attendance percentages in real-time, and provides smart insights on how many classes can be safely skipped or must be attended to maintain a target percentage.

## 🚀 Features

### core Functionality
- **Smart Dashboard**: Visual overview of all courses with color-coded attendance indicators.
- **Attendance Calculator**:
  - **"Skip?"**: Instantly calculates safe skips while maintaining target (e.g., 75%).
  - **"Attend?"**: Calculates how many consecutive classes are needed to reach the target.
  - **On Duty (OD)**: Support for "On Duty" status, counting as attended without penalizing total classes.
- **Course Management**: Easily Add, Edit, and Delete courses.
- **Global Target Setting**: Customizable attendance target (default 75%).

### User Experience
- **Secure Authentication**: Signup and Login with JWT-based session management.
- **Google Authentication**: One-click login/signup using Google OAuth.
- **Dark & Light Mode**: Fully integrated theme system with persistent preferences.
- **Responsive Design**: Optimized for everything from mobile phones to large desktop screens.
- **Profile Management**: Update user profile details and university information.
- **Privacy & Support**: Dedicated Privacy Policy and Contact Support pages.

## 🛠️ Tech Stack

### Frontend
- **React.js (Vite)**: Ultra-fast development and build tool.
- **React Router DOM v7**: Modern client-side routing.
- **CSS3 Variables**: Custom, lightweight theming engine (Dark/Light).
- **React Icons**: Comprehensive icon library for UI elements.
- **Axios**: Promise-based HTTP client.
- **@react-oauth/google**: Google OAuth integration for React.
- **jwt-decode**: Library to decode JWT tokens.

### Backend
- **Node.js & Express.js**: RESTful API architecture.
- **MongoDB & Mongoose**: Flexible document-based database.
- **JWT (JSON Web Tokens)**: Stateless, secure authentication.
- **Bcryptjs**: Industrial-strength password hashing.
- **Dotenv**: Environment variable management.
- **google-auth-library**: Google Node.js client library for authentication.

## ⚙️ Installation & Setup

Follow these steps to set up the project locally.

### Prerequisites
- **Node.js** (v18+ recommended)
- **MongoDB** (Local instance or Atlas Cluster)

### 1. Clone the Repository
```bash
git clone https://github.com/shrivastav-akash/attendify.git
cd attendify
```

### 2. Backend Setup
Navigate to the server directory, install dependencies, and configure variables.

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secure_jwt_secret
```

Start the server:
```bash
npm run dev
```
_Server runs on http://localhost:5000_

### 3. Frontend Setup
Navigate to the client directory and install dependencies.

```bash
cd client
npm install
```

Start the development server:
```bash
npm run dev
```
_Client runs on http://localhost:5173_

## 📡 API Reference

### Authentication
- `POST /api/auth/signup` - Register a new user.
- `POST /api/auth/login` - Authenticate and receive a token.
- `GET /api/auth/me` - Retrieve current user details (Protected).

### Courses
- `GET /api/courses` - Fetch all courses for the logged-in user.
- `POST /api/courses` - Add a new course.
- `PUT /api/courses/:id` - Update an existing course.
- `DELETE /api/courses/:id` - Delete a course.

### Users
- `PUT /api/users/profile` - Update user profile information (Username, University).

## 🛡️ Security & Privacy
- **Data Isolation**: Users can only access their own data.
- **Encryption**: Passwords are hashed using bcrypt before storage.
- **Protection**: API routes are protected securely using Middleware.

## 🤝 Contributing
Contributions are welcome! Please fork the repository and create a pull request.

## 👨‍💻 Author
Developed by **Akash**.
- [LinkedIn](https://www.linkedin.com/in/shrivastavakash/)
- [Email](mailto:shrivastav.work@gmail.com)
