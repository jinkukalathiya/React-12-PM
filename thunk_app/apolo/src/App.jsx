import { useEffect } from "react";
import "./App.css";
import UserList from "./components/UserList";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <>
      <Counter />
      <UserList />
    </>
  );
}

export default App;
