// Footer.js

import './Footer.css';
import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import { InlineWidget } from 'react-calendly';

const { Footer } = Layout;

const AppFooter = () => {

  


  const openCalendly = () => {
    const url1 = "https://calendly.com/sahjan11957";
    window.open(url1, '_blank');
  };

  return (
    <div  className="navbar1">
      <Footer className='' style={{ }}>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <h3>Navigation Links</h3>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
             
            </ul>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h3>Contact Information</h3>
          
            <p>info@oodlesrewards.com</p>
           
          </Col>
           <Col xs={24} sm={12} md={8} style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            <div>
              <h3>Schedule Meeting</h3>
              <Button className="gpt3__header-content__input1" onClick={openCalendly}>Schedule</Button>
            </div>
          </Col> 
        </Row>
      </Footer>
    </div>
  );
};

export default AppFooter;
