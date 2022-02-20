import React, { useState } from 'react'
import logo from '../assets/alphaSigKP_ccexpress.png';
import { Link } from 'react-router-dom';
import ReorderIcon from "@material-ui/icons/Reorder";
import '../styles/Navbar.css';

function Navbar() {
    //will change eventually, supposed to change icon 
    //on nav bar when screen is little
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? 'open' : 'close'}>
            <img src={logo} alt="" />
            <div className='hiddenLinks'>
                <Link to="/"> Home </Link>
                <Link to="/prudential"> Prudential </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
            </div>
        </div>
        <div className='rightSide' >
            <Link to="/"> Home </Link>
            <Link to="/prudential"> Prudential </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/calendar"> Calendar </Link>
            <button onClick={toggleNavbar}>
            <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar