import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("User Registerd Successfully!!");
    navigate("/login")
  };

  return (
    <>
      <div>User Registration</div>
      <input
        type="email"
        placeholder='"Email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </>
  );
};

export default Register;
