import React from 'react';

const Cart = (props) => {
  // console.log(props.time);
  const {add} = props;
  console.log(add);
  let All = 0;
  for(let collect of add){
    All = All + collect.time;
  }
  return (
    <div>
      <div className="sub-container">
        {/* <h1>lenght: </h1> */}
        <h4>Abdul Kader</h4>
        <h6>Dhaka, Bangladesh</h6>

        <div className='about'>

        <div >
          <h1>60<small>kg</small></h1>
          <p>Weight</p>
        </div>
        <div>
        <h1>5.6</h1>
          <p>Height</p>
        </div>
        <div>
        <h1>27<small>yrs</small></h1>
          <p>Age</p>
        </div>
        </div>

        <div className='add'>

        <h2>Add A Break</h2>
        </div>
        <div className='btn-grp'>
          <button><small>10s</small></button>
          <button><small>20s</small></button>
          <button><small>30s</small></button>
          <button><small>40s</small></button>
          
        </div>

        <div className="detail">
          <h2>Exercixe Details</h2>
        </div>

        <div style={{marginTop:'15px',color:"#fff",marginLeft:'7px'}}>
          <h3>Exercise time: {All}</h3>
          {/* <input type="password" / > */}
          
        </div>

        <div style={{marginTop:'15px',color:"#fff",marginLeft:'7px'}}>
          <h3>Break time: </h3>
          {/* <input type="password" / > */}
          
        </div>
        <div className="activity">
          <button>Activity Completed</button>
        </div>




      </div>
    </div>
  );
};

export default Cart;