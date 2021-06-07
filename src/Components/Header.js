import React from 'react'
import {  Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header>
        <h1>RecordStore</h1>
        <ul className="navBar">

          <li><Link className='link' to="/callback">Store</Link></li>

          <li><Link className='link' to="/contacts">Contacts</Link></li>
        </ul>
      </header>
    <div className='line'></div>
    </div>
  );
}

export default Header