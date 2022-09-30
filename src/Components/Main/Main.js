import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ShowData from '../ShowData/ShowData';
import './Main.css'

const Main = () => {
  
  const [collects, setCollect] = useState([])
  const [add, setAdd] = useState([])
  // console.log(add);
  useEffect(() => {
    fetch('fakedb.json')
    .then(res => res.json())
    .then(data => setCollect(data));
    
  },[])

  const AddtoCart = (collect) =>{
    // console.log(collect);
    const newCart = [...add, collect]
    setAdd(newCart);
  }

  return (
    <div className='main'>
      <div className="main-container">
        {
          collects.map(collect => <ShowData 
            key={collect.id}
            collect={collect}
            AddtoCart={AddtoCart}
            ></ShowData>)
            
        }

      </div>
      <Cart add={add}></Cart>
      
    </div>
  );
};

export default Main;