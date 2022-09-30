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
        <div className='question'>
          <blockquote>
            <h1>How does  react work?</h1>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
          </blockquote>
          <blockquote>
            <h1>Props and State different?</h1>
            <p>
            Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
          </blockquote>
          <blockquote>
            <h1>How Many ways Useeffect uses?</h1>
            <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>
          </blockquote>

        </div>

      </div>
      <Cart add={add}></Cart>

      
      
    </div>
  );
};

export default Main;