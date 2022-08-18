import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";

const Comment = ({ data }) => {
  console.log(data);

  return (
    <div style={{ border: "solid 1px gray", margin: "10px", padding: "10px" }}>
      <h1>{data.title}</h1>
    </div>
  );
};

export default Comment;
