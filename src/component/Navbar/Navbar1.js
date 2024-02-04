import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Navbar1 = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a href="/about">About</a>
        </Menu.Item>
        <Menu.Item key="services">
          <a href="/services">Services</a>
        </Menu.Item>
        <Menu.Item key="contact">
          <a href="/contact">Contact</a>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar1;
