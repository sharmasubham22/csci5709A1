import '../App.css';
import React, { useState }  from 'react';
// import Navbar from './navbar';
import Test from './test';
import Cards from './cards';
import Nav2 from './nav2';
import Footer from './footer';
import Mobiles from './mobile';
import { Link } from 'react-router-dom';

function ProdHome() {

    return (
     <div className='producthome'>
        <Nav2 />
        <div className='cc-align'>
       <div className='category'>
        <p className='c-list'>CATEGORIES</p>
                <div class="list">
                    <Link to="/category">Mobile Phones</Link>
                    <a href="/category">Laptops</a>
                    <a href="/category">Televisions</a>
                    <a href="/category">Smartwatches</a>
                    <a href="/category">Cameras</a>
                    <a href="/category">Gaming Consoles</a>
                    <a href="/category">Desktops & Components</a>
                    <a href="/category">Accessories</a>
                </div>
        </div>
        <Test/>
        </div>
        <p className='heading'>Featured Products</p>
        <Cards/>
        <p className='heading'>Top Mobile Phones</p>
        <Mobiles/>
        <Footer/>
     </div>
     
    );
  }
  
  export default ProdHome;
