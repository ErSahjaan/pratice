import React from 'react'
import './Header.css';
import logo2 from '../../asset/emages/3.png'

const FullPageImage2 = () => {

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
    <div className="fullpage-image-container" style={containerStyle}>
      <img src={logo2} alt="Full Page Image" className="fullpage-image" style={imageStyle} />
      <div className="fullpage-image-content" style={contentStyle}>
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default FullPageImage2 ;