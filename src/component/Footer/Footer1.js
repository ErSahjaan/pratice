import React from 'react';
import { Layout, Button } from 'antd';

const { Footer } = Layout;

const AppFooter1 = () => {
  const openCalendly = () => {
    const url1 = "https://calendly.com/zulmomin";
    window.open(url1, '_blank');
    console.log('Opening Calendly...');
  };

  return (
    <Footer style={{
      // position: 'fixed',
      bottom: 0,
      // marginTop:100,
      fontSize:'2px',
      width: '100%',
      backgroundColor:'darkblue',
    
      color: 'white',  
      padding: '0px', 
      textAlign: 'center',
      display: 'flex',
      // justifyContent: 'space-between',
      alignItems: 'center', 
    }}>



      
      {/*  */}

      <div style={{ flexGrow: 1, textAlign: 'center',   }}>
      <p style={{ color: 'white',  marginLeft: '140px',   fontSize:'15px'}}>Terms Of Service</p>
      <p style={{ color: 'white',  marginLeft: '140px',   fontSize:'15px'}}>Privacy Policy</p>
      <p style={{ color: 'white',  marginLeft: '140px',   fontSize:'15px'}}>info@oodlesrewards.com</p>
      
        
      </div>
      {/*  */}
        

      {/* <div style={{ flexGrow: 1, textAlign: 'left' }}>
        <h3 style={{ color: 'white' }}>Contact Information</h3>
        <p style={{ color: 'white' }}>info@oodlesrewards.com</p>
      </div>  */}

      <Button style={{marginRight:'100px', backgroundColor:'#fcc603', color:'#fff' }}
        className="gpt3__header-content__input1"
        onClick={openCalendly}
      >
        Schedule Demo
      </Button>
    </Footer>
  );
};

export default AppFooter1;
