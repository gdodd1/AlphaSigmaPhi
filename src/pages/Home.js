import React from 'react'
import {Link} from 'react-router-dom';
import "../styles/Home.css";
import pic from '../assets/toBETTERtheMAN2.png';

function Home() {
  return (
    <div className='home'  style={{ backgroundImage:  `url(${pic})`}}>
        <div className='headerContainer'> 
            <h1>Alpha Sigma Phi</h1>
            <p>Kappa Pi Provisional Chapter</p>
            <Link to="/about">
            <button>More Info</button>
            </Link>
        </div>
    </div>
  )
}

export default Home