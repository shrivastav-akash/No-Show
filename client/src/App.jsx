import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import OAuthCallback from "./pages/OAuthCallback";
import { useState, useEffect } from "react";

// Protected Route Component
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" />;
};

function App() {
  // Theme handling
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <Routes>
            <Route
              path="/"
              element={<LandingPage toggleTheme={toggleTheme} theme={theme} />}
            />
            <Route
              path="/login"
              element={<Login toggleTheme={toggleTheme} theme={theme} />}
            />
            <Route
              path="/signup"
              element={<Signup toggleTheme={toggleTheme} theme={theme} />}
            />
            <Route
              path="/privacy"
              element={
                <PrivacyPolicy toggleTheme={toggleTheme} theme={theme} />
              }
            />
            <Route
              path="/contact"
              element={<Contact toggleTheme={toggleTheme} theme={theme} />}
            />
            <Route
              path="/oauth-callback"
              element={<OAuthCallback />}
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard toggleTheme={toggleTheme} theme={theme} />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile toggleTheme={toggleTheme} theme={theme} />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
