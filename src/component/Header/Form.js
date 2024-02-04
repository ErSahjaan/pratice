import React from 'react';
import './Form.css';
import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

function AppContact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Customer Inquiry Form</h2>
        </div>
        <Form
          name="contact_form"
          className="contact-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: 'Please enter your full name!',
              },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not a valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item name="telephone">
            <Input placeholder="Telephone" />
          </Form.Item>
          <Form.Item name="subject">
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item name="message">
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              rules={[
                { validator: (_, value) => (value ? Promise.resolve() : Promise.reject('Should accept agreement')) },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="contact-form-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* Apply Styles */}
      <style>
        {`
          .contactBlock {
            background-color: #f8f9fa;
            padding: 40px;
            text-align: center;
          }

          .titleHolder h2 {
            color: #1890ff;
          }

          .contact-form {
            max-width: 600px;
            margin: 0 auto;
          }

          .contact-form-button {
            width: 100%;
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .contact-form {
              max-width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default AppContact;
