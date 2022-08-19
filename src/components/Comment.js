import React, { useEffect, useState } from "react";
// import { Container } from "@mui/material";
// -------localstorage, styling, 



const Comment = ({ data, deleteHandle, index }) => {
  //   const [myData, setMyData] = useState([]);

  //   useEffect(() => {
  //     data.map((item) => setMyData(item));
  //     console.log(myData);
  //   }, []);

  const { name, email, comment } = data.values;

  return (
    <div style={{ border: "solid 1px gray", margin: "10px", padding: "10px" }}>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{comment}</h1>
      <h1>{data.date}</h1>
      <button onClick={() => deleteHandle(index)}>delete</button>
    </div>
  );
};

export default Comment;
