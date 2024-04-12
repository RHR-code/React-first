import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function AnotherOne() {
  return <h1>Hey yo! mrwhite</h1>;
}

let newRec = React.createElement(
  "img",
  {
    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imgacademy.com%2F&psig=AOvVaw04HqrR9eez0BTsoQTMv8Gg&ust=1712598974318000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCmvLnWsIUDFQAAAAAdAAAAABAE",
    alt: "Description of the image",
  },
  "Click me"
);

ReactDOM.createRoot(document.getElementById("root")).render(newRec);
