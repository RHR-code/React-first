import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { Id } = useParams();
  return <div className="bg-gray-700 text-white p-4 text-3xl">User:{Id}</div>;
}

export default User;
