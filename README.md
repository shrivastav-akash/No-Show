# No-Show | Smart Attendance Tracker

**No-Show** is a modern MERN Stack application designed to help students manage their academic attendance with precision. It allows users to track their courses, calculate attendance percentages, and know exactly how many classes they can skip or need to attend to maintain their target attendance.

## 🚀 Features

- **User Authentication**: Secure Signup, Login, and Session management using JWT and Bcrypt.
- **Smart Dashboard**: Visual overview of all courses with color-coded attendance calculations.
- **Attendance Logic**:
  - **"Skip?"**: Tells you how many classes you can safely miss while staying above your target (default 75%).
  - **"Attend?"**: Tells you how many classes you _must_ attend to reach your target.
  - **On Duty (OD)**: Handles "On Duty" status which counts as attended but doesn't penalize total classes in the standard way.
- **Course Management**: Add, Edit, and Delete courses with ease.
- **Theme System**: Fully functional **Dark Mode** and Light Mode.
- **Responsive Design**: optimized for Mobile, Tablet, Laptops, and Desktops.
- **Profile Management**: Update user details and university information.

## 🛠️ Tech Stack

### Frontend

- **React.js (Vite)**: Fast and modern UI library.
- **React Router DOM**: Client-side routing.
- **CSS3 (Variables)**: Custom theming system without external heavy libraries.
- **React Icons**: For a clean and intuitive UI.
- **Axios**: HTTP client for API communication.

### Backend

- **Node.js & Express.js**: Robust backend API.
- **MongoDB & Mongoose**: NoSQL database for flexible data modeling.
- **JWT (JSON Web Tokens)**: Secure stateless authentication.
- **Bcryptjs**: Password hashing.

## ⚙️ Installation & Setup

Follow these steps to get the project running locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas URL)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/no-show.git
cd no-show
```

### 2. Backend Setup

Navigate to the server directory and install dependencies.

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

Start the backend server:

```bash
# Development mode with nodemon (if installed)
npm run dev
# OR standard start
node server.js
```

### 3. Frontend Setup

Navigate to the client directory and install dependencies.

```bash
cd ../client
npm install
```

Start the React development server:

```bash
npm run dev
```

The application should now be running at `http://localhost:5173` (or the port shown in your terminal).

## 📡 API Endpoints

### Auth

- `POST /api/auth/signup` - Register a new user.
- `POST /api/auth/login` - Authenticate user & get token.
- `GET /api/auth/me` - Get current user data.

### Courses

- `GET /api/courses` - Fetch all courses for the logged-in user.
- `POST /api/courses` - Add a new course.
- `PUT /api/courses/:id` - Update a course.
- `DELETE /api/courses/:id` - Delete a course.

### Users

- `PUT /api/users/profile` - Update user profile details.

## 🛡️ Privacy & Security

- Passwords are **never** stored in plain text.
- Data is isolated per user; you can only see and manage your own courses.
- JWT tokens are used for session verification with a 15-day expiry.

## 👨‍💻 Developer

Developed by **Akash**.

- [LinkedIn](https://www.linkedin.com/in/shrivastavakash/)
- [Email](mailto:shrivastav.work@gmail.com)
