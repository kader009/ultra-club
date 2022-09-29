import React, { useEffect, useState } from 'react';
import './Main.css'

const Main = () => {

  const [fake, getFake] = useState([])
  useEffect(() => {
    fetch(`Fake.json`)
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  return (
    <div className='main'>
      <div className="main-container">
        <h1>this is for pic</h1>

      </div>
      <div className="sub-container">
        <h3>this is hi</h3>

      </div>
    </div>
  );
};

export default Main;