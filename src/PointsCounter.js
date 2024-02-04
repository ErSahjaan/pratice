// components/SurveyForm.js
import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Select, Checkbox } from 'antd';


const { Option } = Select;
const { TextArea } = Input;

const SurveyForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Survey Configuration:', values);
    // Send the form data to your backend for storage
  };

  return (
    <Form form={form} name="surveyForm" onFinish={onFinish} labelCol={{ span: 6 }}>
      {/* Basic Information */}
      <h2>Basic Information</h2>
      <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter a title' }]}>
        <Input />
      </Form.Item>
      {/* Add other basic information fields here (description, point value, etc.) */}

      {/* Survey Questions */}
      <h2>Survey Questions</h2>
      {/* Add logic to dynamically render questions based on user input */}
      {/* Example: Display a text input for the question and options for the answer */}
      <Form.Item label="Question" name="questions[0].question">
        <Input />
      </Form.Item>
      <Form.Item label="Answer Options" name="questions[0].options">
        <Select mode="tags" />
      </Form.Item>
      {/* Add logic to dynamically render more questions as needed */}

      {/* Schedule */}
      <h2>Schedule</h2>
      <Form.Item label="Start Date and Time" name="startDate">
        <DatePicker showTime />
      </Form.Item>
      <Form.Item label="End Date and Time" name="endDate">
        <DatePicker showTime />
      </Form.Item>

      {/* Eligibility and Locking */}
      <h2>Eligibility and Locking</h2>
      <Form.Item label="Restrict to Segment" name="restrictSegment">
        <Select>
          {/* Options for restricting to a specific segment */}
        </Select>
      </Form.Item>
      <Form.Item label="Prerequisite Activity" name="prerequisiteActivity">
        <Select>
          {/* Options for prerequisite activities */}
        </Select>
      </Form.Item>

      {/* Additional Languages (optional) */}
      <h2>Additional Languages (optional)</h2>
      {/* Add logic to dynamically render fields for additional languages */}
      {/* Example: Display a dropdown for language selection and input fields for translated content */}
      <Form.Item label="Select Language" name="additionalLanguages.language">
        <Select>
          {/* Options for languages */}
        </Select>
      </Form.Item>
      <Form.Item label="Translated Title" name="additionalLanguages.title">
        <Input />
      </Form.Item>
      {/* Add more fields for translated content as needed */}

      {/* Submit Button */}
      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add Survey
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SurveyForm;
