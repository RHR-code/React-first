import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="bg-gray-700 text-white p-4 text-center text-xl lg:text-3xl lg:text-white ">
      <div>Github: {data.followers}</div>
      <div className="flex justify-center pt-5 pb-5">
        <img
          src={data.avatar_url}
          alt="git image"
          width={300}
          className="rounded-full"
        />
      </div>
      <div>{data.name}</div>
    </div>
  );
}

export default Github;

// export const githubInfoLoader = async () => {
//   const response = await fetch("https://api.github.com/users/hiteshchoudhary");
//   return response.json();
// };
export const githubInfoLoader = () => {
  return fetch("https://api.github.com/users/hiteshchoudhary")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
