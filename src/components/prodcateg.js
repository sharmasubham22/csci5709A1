import '../App.css';
import React, { useState }  from 'react';
// import Navbar from './navbar';
import Test from './test';
import Mobiles from './mobile'
import Nav2 from './nav2';
import Footer from './footer';


function ProdCateg() {

    return (
     <div className='producthome'>
        <Nav2 />
        <div className='cc-align'>
       <div className='category'>
        <p className='c-list'>CATEGORIES</p>
                <div class="list">
                    <a href="/category">Mobile Phones</a>
                    <a href="/category">Laptops</a>
                    <a href="/category">Televisions</a>
                    <a href="/category">Smartwatches</a>
                    <a href="/category">Cameras</a>
                    <a href="/category">Gaming Consoles</a>
                    <a href="/category">Desktops & Components</a>
                    <a href="/category">Accessories</a>
                </div>
        </div>
        <div className="cat-list">
            <p className='heading'>MOBILE PHONES</p>
            <Mobiles/>
            <Mobiles/>
       </div>
        </div>
        <Footer/>
     </div>
     
    );
  }
  
  export default ProdCateg;