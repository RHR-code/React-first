import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Input() {
  const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);
  const { addItem } = useContext(UserContext);
  const { items } = useContext(UserContext);
  function clickHandle(e) {
    e.preventDefault();
    addItem(username);
    console.log(items);
  }
  return (
    <div className="flex justify-center items-center bg-red-400 h-10 gap-5">
      <input
        type="text"
        value={username}
        className="w-3/4 h-full p-4 rounded-lg"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="w-1/4 h-full bg-black text-white rounded-lg"
        onClick={clickHandle}
      >
        Click
      </button>
    </div>
  );
}

export default Input;
