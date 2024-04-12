import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Colorchanger from "./components/Colorchanger";
function App() {
  const [count, setCount] = useState(15);
  let counter = () => {
    setCount((value) => {
      let newval = value + 1;
      return newval;
    });
  };
  let myobj = {
    name: "rhr",
    age: 20,
  };
  return (
    <>
      {/* <h1
        onClick={counter}
        className="bg-green-400 text-black p-10 rounded-full mb-10"
      >
        This is Tailwindcss: {count}
      </h1>
      <Card userName="RHR" btn="welcome" obj={myobj} />
      <Card userName="HASAN" btn="Visit us" /> */}
      <Colorchanger />
    </>
  );
}

export default App;
