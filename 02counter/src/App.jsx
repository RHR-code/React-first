import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(15);
  function countfun() {
    setCount((count = count + 1));
    check();
  }
  function countRem() {
    setCount((count = count - 1));
    check();
  }

  function check() {
    if (count <= 0) {
      setCount((count = 0));
    } else if (count >= 20) {
      setCount((count = 20));
    }
  }

  return (
    <>
      <h1>Hey! yo What is up guys</h1>
      <h3>Count: {count}</h3>
      <button onClick={countfun}>Add Count: {count}</button>
      <button onClick={countRem}>remove Count: {count}</button>
      <p>Only Count: {count}</p>
    </>
  );
}

export default App;
