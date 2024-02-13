import React from 'react';
import { Typography, Divider } from 'antd';
import { SmileOutlined, WarningOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const TermsAndConditions = () => {
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '0px', marginTop:'100px'  }}>
      <Title style={{ marginLeft: '150px' }} level={2}>Terms & Conditions </Title>
      <p style={{ marginLeft: '150px' }}>Effective Date: February 1, 2024</p>
      <Divider />
      <Paragraph>
        <WarningOutlined />
        <h1>1. Introduction</h1>

        Welcome to the FuelSignal Application Programming Interface (API) suite, offered by FuelSignal, Inc., a corporation doing business as Oodles (collectively referred to as "Oodles" throughout these Terms and Conditions). This document outlines the terms and conditions (the "Terms") governing your access and use of any of the following APIs: Feedback API: Enables applications to collect and manage user feedback. Rewards API: Enables applications to interact with the rewards program. Social Listener API: Enables applications to access and analyze social media data related to the business entity. By accessing or using any of the Oodles APIs, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use any of the APIs.
      </Paragraph>

      <Paragraph>
       
        <h1>2 API Components:</h1>
        API: Any of the individual Oodles APIs listed in Section 1. Documentation: All technical documentation, specifications, and guidelines related to each API. Data: Any information accessed or retrieved through an API, specific to each API's function. Rate Limits: The limitations on the frequency and volume of API requests a User or Application can make, categorized by: API: Different APIs may have different rate limits. Account Tier: Free and paid accounts may have different rate limits. Authentication Credentials: Unique identifiers and secrets used to identify and authenticate Users and Applications with an API. These include: API Key: A unique identifier assigned to each Developer account. API Secret: A randomly generated string used to sign API requests.
      </Paragraph>

      <Paragraph>
        <h1>3. Grant of License</h1>
        FuelSignal, Inc DBA Oodles ("FuelSignal") grants you a non-exclusive, non-transferable, revocable license to access and use any of the APIs subject to the terms and conditions set forth herein. This license is limited to the following purposes: Developing and operating Applications that: Access and process Data from the relevant API as permitted by these Terms. Are for end-user consumption, not data aggregation or resale. Comply with Oodles branding and usage guidelines (if applicable). (Add specific use cases relevant to each API, e.g., for Feedback API: collecting product reviews, for Rewards API: managing user points, for Social Listener API: analyzing brand sentiment) Integrating an API with your own products and services, provided it does not compete with Oodles offerings.
      </Paragraph>

      <Paragraph>
        <h1>4. Permitted Uses</h1>
        In addition to the general permissible uses outlined in Section 3, you may also: Make reasonable use for non-commercial research and development purposes, with Oodles prior written approval. Make reasonable use for internal testing and quality assurance purposes.
      </Paragraph>

      <Paragraph>
        <h1>5. Prohibited Uses</h1>
        <h2>5.1 API Misuse:</h2> Exceeding Rate Limits: Making excessive or unreasonable API requests can negatively impact Oodles infrastructure and other Users. Sharing Authentication Credentials: Sharing API Keys or Secrets with any third party compromises access control and security. Modifying or Reverse Engineering an API: Altering an API's functionality or attempting to understand its internal workings is strictly prohibited. Obscuring or Removing Proprietary Notices: Removing or modifying Oodles branding or copyright notices infringes on intellectual property rights. <h2>5.2 Data Misuse:</h2> Collecting Personal Information Without Consent: Oodles requires User consent for collecting and processing personal information. Applications must obtain and respect that consent (if applicable). Harming, misleading, or Offensive Applications: Applications built with an API must not harm users, spread misinformation, or contain offensive content. Competing with Oodles: The APIs cannot be used to develop Applications that directly compete with Oodles products or services.
      </Paragraph>

      <Paragraph>
        <h1>6. User Responsibilities</h1>
        <h2>6.1 Legal Compliance:</h2> Ensure your use of an API complies with all applicable laws and regulations, including data privacy laws. Respect the intellectual property rights of Oodles <h2>6.2 Security:</h2> Implement appropriate security measures to protect your Authentication Credentials, Data, and end-user information (if applicable). Promptly notify Oodles of any unauthorized access or use of your account or an API. <h2>6.3 Account Management:</h2> Provide accurate and complete information when registering for an API account. Maintain the accuracy and completeness of your account information. Comply with all API-specific documentation and usage guidelines. <h2>6.4 Specific Terms for Each API:</h2> In addition to the general terms outlined above, each Oodles API may have specific terms and conditions related to its functionality and data. Please refer to the individual API documentation for details.
      </Paragraph>

      <Paragraph>
        <h1>7. Data Privacy</h1>
        Oodles collects and uses Data in accordance with its Privacy Policy, which is available at [link to privacy policy]. You agree to comply with all applicable data privacy laws and regulations in your use of any API. This includes obtaining any necessary consents from end users of your Applications before collecting or processing their personal information (if applicable).
      </Paragraph>

      <Paragraph>
        <h1>8. Intellectual Property</h1>
        Oodles owns and retains all intellectual property rights in and to the APIs, including all Data, documentation, and related materials. You agree not to infringe upon any of Oodles intellectual property rights.
      </Paragraph>

      <Paragraph>
        <h1>9. Disclaimer of Warranties</h1>
        THE APIS ARE PROVIDED "AS IS" AND WITHOUT ANY WARRANTY OR CONDITION, EXPRESS, IMPLIED, OR STATUTORY. OODLES DISCLAIMS ALL WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE. OODLES DOES NOT WARRANT THAT THE APIS WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE APIS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
      </Paragraph>

      <Paragraph>
        <h1>10. Limitation of Liability</h1>
        OODLES SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING OUT OF OR RELATING TO YOUR ACCESS OR USE OF ANY API, EVEN IF OODLES HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </Paragraph>

      <Paragraph>
        <h1>11. Termination</h1>
        Oodles may terminate your access to any API at any time, with or without cause, upon written notice. Oodles may also suspend your access to an API if you breach any of these Terms. Upon termination, all rights and licenses granted to you under these Terms will immediately terminate.
      </Paragraph>

      <Paragraph>
        <h1>12. Dispute Resolution</h1>
        Any dispute arising out of or relating to these Terms shall be resolved by binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in Houston, Texas, and the decision of the arbitrator shall be final and binding.
      </Paragraph>

      <Paragraph>
        <h1>13. Governing Law</h1>
        These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of laws provisions.
      </Paragraph>

      <Paragraph>
        <h1>14. Contact Information</h1>
        <Paragraph> If you have any questions about these Terms</Paragraph>
      
        please contact Oodles at: FuelSignal, Inc DBA Oodles 1801 Main Street Ste 1300 Houston, Texas 77002 Phone: 281-845-8479<br/>
        <a href='/info@oodlesai.com'>Email: info@oodlesai.com</a> Email: info@oodlesai.com<br/>
      </Paragraph>

      <Paragraph>
        <h1>15. Entire Agreement</h1>
        These Terms constitute the entire agreement between you and FuelSignal, Inc DBA Oodles with respect to the APIs.
      </Paragraph>
    </div>
  );
};

export default TermsAndConditions;
