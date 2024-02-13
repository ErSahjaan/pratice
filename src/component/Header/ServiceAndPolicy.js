import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const PrivacyPolicy = () => {
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '0px', marginTop:'100px' }}>
      <Title  style={{ marginLeft: '150px' }} level={2}>Privacy Policy</Title>
      <p style={{ marginLeft: '150px' }}>Effective Date: February 1, 2024</p>
      <Paragraph>
        <strong>1. Introduction</strong>
        <br />
        FuelSignal, Inc DBA Oodles ("FuelSignal", "we", "us", or "our") respects the privacy of our users and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, disclose, and store your personal information when you use our APIs and any related services (collectively, the "Services").
      </Paragraph>

      <Paragraph>
        <strong>2. Information We Collect</strong>
        <br />
        We collect various types of information from and about users of our Services, depending on how you interact with us. This information may include:
        <ul>
          <li>Personal Information</li>
          <li>Usage Data</li>
          <li>Device Information</li>
          <li>Social Media Information</li>
        </ul>
      </Paragraph>

      <Paragraph>
        <strong>3. How We Use Your Information</strong>
        <br />
        We use the information we collect to:
        <ul>
          <li>Provide and operate the Services</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Send you important information about our Services</li>
          <li>Analyze how you use our Services to improve them</li>
          <li>Develop new features and functionalities</li>
          <li>Prevent, detect, and address fraud and illegal activities</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>
      </Paragraph>

      <Paragraph>
        <strong>4. Sharing Your Information</strong>
        <br />
        We may share your information with:
        <ul>
          <li>Service providers</li>
          <li>Law enforcement agencies or other government officials</li>
          <li>Business partners</li>
        </ul>
      </Paragraph>

      <Paragraph>
        <strong>5. Data Retention</strong>
        <br />
        We will retain your personal information for as long as necessary to provide you with the Services, comply with legal and regulatory requirements, and resolve disputes.
      </Paragraph>

      <Paragraph>
        <strong>6. Your Choices</strong>
        <br />
        You have the following choices regarding your personal information:
        <ul>
          <li>Access, update, or delete your personal information through your account settings</li>
          <li>Unsubscribe from promotional emails or marketing communications</li>
          <li>Choose not to share certain information with us</li>
        </ul>
      </Paragraph>

      <Paragraph>
        <strong>7. Security</strong>
        <br />
        We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or electronic storage is 100% secure.
      </Paragraph>

      <Paragraph>
        <strong>8. Children's Privacy</strong>
        <br />
        Our Services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.
      </Paragraph>

      <Paragraph>
        <strong>9. International Users</strong>
        <br />
        Our Services are hosted in the United States. If you access the Services from outside the United States, you consent to the transfer of your information to, and processing in, the United States.
      </Paragraph>

      <Paragraph>
        <strong>10. Changes to this Privacy Policy</strong>
        <br />
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
      </Paragraph>

      <Paragraph>
        <strong>11. Contact Us</strong>
        <br />
        If you have any questions about this Privacy Policy, please contact us at:
        <br />
        FuelSignal, Inc DBA Oodles <br />
        1801 Main Street Ste 1300 <br />
        Houston, Texas 77002 <br />
        Phone: 281-845-8479 <br />
        <a href='/info@oodlesai.com'>  Email: info@oodlesai.com</a>
        {/* Email: info@oodlesai.com */}
      </Paragraph>
    </div>
  );
};

export default PrivacyPolicy;
