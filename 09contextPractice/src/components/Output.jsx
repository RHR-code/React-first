import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Output() {
  const { items } = useContext(UserContext);
  const { user } = useContext(UserContext);
  function liClick(e) {
    e.target.remove();
  }
  return (
    <div>
      <ul className="w-full bg-red-400 flex-row justify-center gap-5 py-9 ">
        {items.map((items, index) => {
          return (
            <li
              className="w-2/3 bg-black text-white"
              onClick={liClick}
              key={index}
            >
              {items}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Output;
