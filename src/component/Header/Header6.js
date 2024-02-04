import React from 'react'
 import './Header.css'
import logo2 from '../../asset/emages/7.png'

const FullPageImage6 = () => {

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
    <div id="Naeem" className="fullpage-image-container" style={containerStyle}>
      <img src={logo2} alt="Full Page Image" className="fullpage-image"  style={imageStyle}/>
      <div className="fullpage-image-content" style={contentStyle}>
      </div>
    </div>
  );
};

export default FullPageImage6;