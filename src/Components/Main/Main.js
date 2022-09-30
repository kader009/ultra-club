import React, { useEffect, useState } from 'react';
import ShowData from '../ShowData/ShowData';
import './Main.css'

const Main = () => {
  
  const [collects, setCollect] = useState([])
  useEffect(() => {
    // fetch('fakedb.json')
    // .then(res => res.json())
    // .then(data => setCollect(data));
    const fetchData = async() => {
      const res = await fetch('https://raw.githubusercontent.com/hmathir/HAOA_API/main/data.json');
      const data =await res.json();
      setCollect(data);
    }
    fetchData();
  },[])

  return (
    <div className='main'>
      <div className="main-container">
        {
          collects.map(collect => <ShowData 
            key={collect.id}
            collect={collect}
            ></ShowData>)
            
        }

      </div>
      <div className="sub-container">
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


      </div>
      
    </div>
  );
};

export default Main;