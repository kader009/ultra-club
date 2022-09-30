import React from 'react';
import './ShowData.css'

const ShowData = (props) => {
  // console.log(props);
  // const { time } =props.collect;
  // console.log(img);
  const {id, title, time, description,img} = props.collect || {};
  
  return (
    <div className='showdata'>
      <img src={img} alt="" />
      <h2>Title: {title} </h2>
      <p>Description: {description}</p>
      <h4>Time: {time}</h4>
      <button></button>
    </div>
  );
};

export default ShowData;