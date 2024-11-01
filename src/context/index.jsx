import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebaseConfig";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext(null);

export default function AuthState({ children }) {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  console.log(registerFormData);

  function registerWithFirebase() {
    setLoading(true);
    const { email, password } = registerFormData;
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function loginWithFireBase() {
    setLoading(true);
    const { email, password } = loginFormData;
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handleLogout() {
    return signOut(auth);
  }

  useEffect(() => {
    const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser,'currentUser')
      setUser(currentUser);
      setLoading(false);
    });

    
    return () => {
      checkAuthState();
    };
  }, []);
  
  console.log(user, "users");
  
  useEffect(() => {
    if (user) navigate("/profile");
  }, [user]);
  
  if (loading) return <h1>Loading... Please Wait !!!</h1>;
  return (
    <AuthContext.Provider
      value={{
        registerFormData,
        setRegisterFormData,
        registerWithFirebase,
        loading,
        user,
        loginFormData,
        setLoginFormData,
        loginWithFireBase,
        handleLogout,
        setUser,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}