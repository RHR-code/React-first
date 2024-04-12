import React from "react";

function Colorchanger() {
  function bgChange(color) {
    document.querySelector("body").style.background = color;
  }

  return (
    <>
      <div>
        <div className=" fixed inset-x-96 flex justify-center bottom-12 gap-10 bg-white px-5 py-2 rounded-full">
          <div
            onClick={() => bgChange("red")}
            className="dam bg-red-600 w-20 rounded-xl "
          >
            Red
          </div>
          <div
            onClick={() => bgChange("green")}
            className="2 bg-green-600 w-20 rounded-xl "
          >
            Green
          </div>
          <div
            onClick={() => bgChange("blue")}
            className="3 bg-blue-600 w-20 rounded-xl "
          >
            Blue
          </div>
          <div
            onClick={() => bgChange("yellow")}
            className="4 bg-yellow-600 w-20 rounded-xl "
          >
            Yellow
          </div>
          <div
            onClick={(color) => bgChange("black")}
            className="5 bg-black w-20 rounded-xl "
          >
            Black
          </div>
        </div>
      </div>
    </>
  );
}

export default Colorchanger;
