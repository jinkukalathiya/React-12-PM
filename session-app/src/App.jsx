import { useEffect, useState } from "react";
import Session from "./components/Session";
import UserInfo from "./components/UserInfo";
import "./App.css";

function App() {
  return (
    <>
      <Session/>
      <UserInfo/>
    </>
  );
}

export default App;
