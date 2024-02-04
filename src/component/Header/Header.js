import React from 'react'
 import './Header.css'

//  import './Header1.css'
import logo2 from '../../asset/emages/slide 8.png'
import logo3 from '../../asset/emages/1.png'
import logo4 from '../../asset/emages/3.png'
import { Button } from 'antd'
import FullPageImage1 from './Header1'
const FullPageImage = () => {
  const containerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    transition: 'transform 0.5s ease',
  };

  const imageStyle = {
    width: '100%',
  };

  const contentStyle = {
    flex: 1,
    
  };
  return (
    <>
    <div className="fullpage-image-container" style={containerStyle}>
     <img src={logo2} alt="Full Page Image" className="fullpage-image"  style={imageStyle}/> 
     
      <div className="fullpage-image-content" style={contentStyle}>
      </div>
      <div className="gpt3__header-content__input">
        <a className="email"  type = "email" href="/contact">GET STARTED</a>
        
      </div>
     
      
    </div>
   
    {/* <FullPageImage1/> */}

    </>
 
    
  
  );
};

export default FullPageImage;