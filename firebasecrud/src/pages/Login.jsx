import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "../components/GoogleLogin";

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Successful");
    navigate("/dashboard")
  };

  return (
    <>
      <div>Login</div>
      <input
        type="email"
        name=""
        id=""
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <GoogleLogin/>
    </>
  );
};

export default Login;
