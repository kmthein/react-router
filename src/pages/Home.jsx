import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  
  const navgiateHandler = () => {
    navigate("/products");
  }

  return (
    <div>
      <h1>Home Page</h1>  
      <button onClick={navgiateHandler}>Go to product</button>
    </div>
  )
}

export default Home