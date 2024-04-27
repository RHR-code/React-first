import { useState } from "react";

import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Input from "./components/Input";
import Output from "./components/Output";
function App() {
  return (
    <UserContextProvider>
      <h1 className="bg-blue-400">Practicing context api</h1>
      <Input />
      <Output />
    </UserContextProvider>
  );
}

export default App;
