import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Error Page</h1>
      <button onClick={goHomeHandler}>Go Back Home</button>
    </div>
  );
};

export default Error;
