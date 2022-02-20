import React from 'react'
import './Login.css'
import Yash from './Yash'

const Hero =({handleLogout}) => {
  return(
    <section className='hero'>
      <nav>
        <h2>TWM</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <Yash/>
    </section>
    
  );
};

export default Hero;