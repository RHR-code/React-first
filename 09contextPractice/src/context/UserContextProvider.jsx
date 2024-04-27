import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <UserContext.Provider value={{ user, setUser, addItem, items }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
