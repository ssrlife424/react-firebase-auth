import { useContext } from "react";
import { AuthContext } from "../../context";
import { Navigate } from "react-router-dom";

function AuthPage({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (user) return children;
 if(loading) return <h1>Loading! Please wait</h1>
  return <Navigate to={"/login"} />;
}

export default AuthPage;
