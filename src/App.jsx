import { Route, Routes, Navigate } from "react-router-dom";
import ProfilePage from "./pages/profile";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import AuthPage from "./pages/private-route";

function App() {
  return (
    <div>
      <Routes>
        {/* Redirect from the root URL to the login page */}
        <Route path="/" element={<Navigate to="/register" replace />} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/profile"
          element={
            <AuthPage>
              <ProfilePage />
            </AuthPage>
          }
        />
      </Routes>
    </div>
  );
}

export default App;