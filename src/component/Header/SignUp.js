import React, { useEffect, useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

const RegistrationForm = () => {
  const [users, setUsers] = useState([]);

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

    useEffect(() => {
      fetch('http://localhost:8086/api/api/v1/auth/register')
      .then(Response => Response.json())
      .then(data => setUsers(data))
      .catch(error=> console.log('anble to ftach data', error))
    }, [])
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '120px', marginBottom:'100px',  border: '1px solid #ccc', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#1890ff' }}>Registration</h2>
      <Form onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please enter your email!' }]}
        >
          <Input type="email" placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please create a password!' }]}
        >
          <Input.Password placeholder="Create password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords do not match!');
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm password" />
        </Form.Item>
        <Form.Item
          name="terms"
          valuePropName="checked"
          rules={[
            { validator: (_, value) => (value ? Promise.resolve() : Promise.reject('Please accept the terms & conditions!')) },
          ]}
        >
          <Checkbox style={{ color: '#1890ff' }}>I accept all terms & conditions</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Register Now
          </Button>
        </Form.Item>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <h3>
            Already have an account? <a href="/login" style={{ color: '#1890ff' }}>Login now</a>
          </h3>
        </div>
      </Form>
    </div>
  );
};

export default RegistrationForm;
