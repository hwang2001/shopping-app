import React from 'react';
import { useSelector } from 'react-redux';


function Home() {
    const price = useSelector(state => state.price);
    return(
      <div className="home-design">
        <h1>DAML SHOP</h1>
        <p>The destination for all things DAML</p>
        <button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
        > About </button>
        <button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
        > Shop </button>
      </div>
    );
  }


  export default Home;