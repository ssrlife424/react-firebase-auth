import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthState from "./context/index.jsx";
AuthState
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthState>
      <App />
    </AuthState>
  </BrowserRouter>
);
