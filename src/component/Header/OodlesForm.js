import React from 'react';
// import { Form, Input, Button } from 'antd';
import { Form, Input, Button, Upload, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

import './OodlesForm.css';

const Oodles = () => {


  const onFinish = async (values) => {
    try {
      const JsonData = JSON.stringify(values)
      console.log('Received values:', JsonData);

      const response = await axios.post('http://localhost:8086/api/v1/auth/register', values);
      console.log('Form data successfully submitted:', response.data);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };
  // const onFinish = (values) => {
  //   console.log('Received values:', values);

  // };



  return (

    <div className="container">
     
      <div className="right-side">
      <h1 className="centered-text">Please complete this form</h1>
        <p className="centered-text">Get your free Oodles account now</p>

        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical" 
        >
          <Form.Item
            label="Organization Name" 
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input placeholder="" />
          </Form.Item>
                 <Form.Item
            label="Business Email" 
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Business Email" />
          </Form.Item>
          <Form.Item
            label="Password" 
            name="password"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Business Password" />
          </Form.Item>

          <Form.Item 
         label="Address" 
         name="address"
         rules={[{ required: true, message: 'Please input your address!' }]}
          >
         <Input.TextArea placeholder="Address" />
         </Form.Item>

          <Form.Item
            label="Phone Number" 
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Form.Item
            label="Primary Contact Name" 
            name="email"
            rules={[{ required: true, message: ' Primary Contact Name' }]}
          >
            <Input placeholder="Primary Contact Name" />
          </Form.Item>

          {/* <Form.Item
         label="Employer Identification Number Attachment" 
        name="file"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
       rules={[{ required: true, message: 'Please upload a file!' }]}
       >
      <Upload
    name="file"
    multiple={false}
    beforeUpload={() => false}
    style={{ padding: '30px', width: '100%' }}
    // style={{ height: '100%', width: '100%' }}
      >
    <Button style={{  width: '407%', height: '100%', }} icon={<UploadOutlined />} >Click to Upload</Button>
  </Upload>
     </Form.Item> */}
    <Form.Item
  name="agreement"
  valuePropName="checked"
  rules={[{ required: true, message: 'Please agree to the terms and conditions!' }]}
   >
  <Checkbox>
    I agree to the <a href="/terms">Terms and Conditions</a>
  </Checkbox>
     </Form.Item>
         <Form.Item>
            <Button style={{ height: '100%', width: '100%' }} type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
       
      </div>
    </div>
  );
};

export default Oodles;
