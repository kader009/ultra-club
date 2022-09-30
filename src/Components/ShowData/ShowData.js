import React from 'react';
import './ShowData.css'

const ShowData = (props) => {
  // const { time } =props.collect;
  // console.log(img);
  const { title, time, description, img} = props.collect || {};
  // console.log(props);
  // const {AddtoCart} = props;

  // const AddtoCart = () =>{
  //   console.log('object');
  // }
  
  return (
    <div className='showdata'>
      <img src={img} alt="" />
      <h2>Title: {title} </h2>
      <p>Description: {description}</p>
      <h4>Time: {time}</h4>
      <button  onClick={() => props.AddtoCart(props.collect)} className='btn'>Add to list</button>
    </div>
    
  );
};

export default ShowData;