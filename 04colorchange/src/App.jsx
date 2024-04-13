import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className=" w-full h-screen " style={{ background: color }}>
      <div className="bg-white fixed bottom-12 inset-x-52 py-2 flex flex-wrap  justify-center align-middle gap-10 rounded-full">
        <button
          onClick={() => setColor("green")}
          className="bg-green-600 px-5 py-2 text-white rounded-full"
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-600 px-5  text-white rounded-full"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("purple")}
          className="bg-purple-600 px-5 text-white rounded-full"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-600 px-5 text-white rounded-full"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("black")}
          className="bg-black px-5 text-white rounded-full"
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
