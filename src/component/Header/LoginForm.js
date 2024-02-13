import React,{useState} from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  
  const onFinish = async (values) => {
        if(email === email && password === password){
          sessionStorage.setItem("accessToken","eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNZEAxMjMiLCJpYXQiOjE3MDcxMTU4NzMsImV4cCI6MTcwNzIwMjI3M30.4nipvMhgxtyBmi67jZbOrvyylyyTue8AL446OfpYwHU");
          window.location.href = "/dashboard";
        } 
        else{
          setError("Invalid username or password");
        }
         

    try {
    const JsonData = JSON.stringify(values)
    console.log('Received values:', JsonData);

    const response = await axios.post('http://localhost:8086/api/v1/auth/register', values);
    console.log('Form data successfully submitted:', response.data);
        }       catch (error) {
         console.error('Error submitting form data:', error);
         }
    };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '130px', marginBottom: '90px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
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
