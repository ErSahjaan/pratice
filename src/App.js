import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './component/Header/Header.css';
import Navbar from './component/Navbar/Navbar';
import FullPageImage from './component/Header/Header';
import FullPageImage1 from './component/Header/Header1';
import FullPageImage2 from './component/Header/Header2';
import AppContact from './component/Header/Form';
import FullPageImage5 from './component/Header/Header5';
import FullPageImage3 from './component/Header/Header3';
import FullPageImage4 from './component/Header/Header4';
import FullPageImage6 from './component/Header/Header6';
import RegistrationForm from './component/Header/SignUp';
import LoginForm from './component/Header/LoginForm';

import Sahjaan from './component/Header/Sahjaan';
import Sahjaan1 from './component/Header/Sahjaan3';
import AppFooter1 from './component/Footer/Footer1';

import { Layout } from 'antd';
import Sahjaan2 from './component/Header/Sahjaan2';
import Sahjaan3 from './component/Header/Sahjaan3';
import Sahjaan4 from './component/Header/Sahjaan4';
import Sahjaan5 from './component/Header/Sahjaan5';
import Sahjaan6 from './component/Header/Sahjaan6';
import Sahjaan7 from './component/Header/Sahjaan7';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      
        <Navbar />
        <Routes>
        <Route path="/" element={<Sahjaan/>} />
          {/* <Route path="/" element={<FullPageImage/>} /> */}
          <Route  path="/home" element={<Sahjaan />} />
          <Route path="/about" element={<Sahjaan2 />} />
          <Route path="/contact" element={<Sahjaan4/>}/>
          <Route path="/service" element={<Sahjaan3/>}/>
          <Route path="/CaseStudies" element={<Sahjaan5/>}/>
          <Route path="/SignUp" element={<Sahjaan6/>}/>
          <Route path="/login" element={<Sahjaan7/>}/>
        </Routes>
        <AppFooter1 />
      

    </Router>
  );
};

export default App;


