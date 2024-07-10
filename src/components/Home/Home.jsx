// src/HomePage.js
import React from 'react';
import JavaScript from './JavaScript';
import HtmlPart from './HtmlPart';
import CssPart from './CssPart';
import Python from './Python';
import HeroSection from './HeroSection';
import Cart from './Cart';




const HomePage = () => {
  return (
    <> 
    {/* *********hero section*********** */}

    <div>
      <HeroSection/>
    </div>
    
   {/* ****************2nd hero section **************** */}

      {/* 1. ---2.1 hero section  */}
   <div >
  <HtmlPart/>
   </div>
  
  {/* CSS part 3rd section of hero section  */}
  <div >
 
    <CssPart/>
  </div>


{/* JavaScript part hero section    */}
    <div>
    <JavaScript/>
    </div>

    {/* Python section******** */}
    <div>
    <Python/>

    </div>

    {/* card section  */}
    <div className=' bg-gray-400'>
      <Cart/>
    </div>

    </>
   
  );
};

export default HomePage;
