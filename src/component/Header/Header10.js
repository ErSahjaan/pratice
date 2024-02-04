import React from 'react'
import './Header.css';
import logo2 from '../../asset/emages/4.png'

const FullPageImage10 = () => {

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
    <div className="fullpage-image-container1" style={containerStyle}>
      <img src={logo2} alt="Full Page Image1" className="fullpage-image1"  style={imageStyle}/>
      <div className="fullpage-image-content1" style={contentStyle}>
      </div>
    </div>
  );
};

export default FullPageImage10;