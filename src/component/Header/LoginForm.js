import React from 'react';
import { Form, Input, Button } from 'antd';

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '100px', marginBottom: '90px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#1890ff' }}>Login</h2>
      <Form onFinish={onFinish}>
        <Form.Item 
          name="email"
          rules={[{ required: true, message: 'Please enter your email!' }]}
        >
          <Input type="email" placeholder="Enter your email" />
        </Form.Item >
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Login
          </Button>
        </Form.Item>
        <div style={{ textAlign: 'center', marginTop: '10px',  }}>
          <h3>
            Don't have an account? <a href="/SignUp" style={{ color: '#1890ff' }}>Sign Up now</a>
          </h3>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
