import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import {Link} from 'react-router-dom';

const { Title } = Typography;

const SignIn: React.FC = () => {
  const onFinish = (values: { email: string; password: string }) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: 'auto',
        padding: '20px',
        border: '1px solid #d9d9d9',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <Title level={3} style={{ textAlign: 'center', color: 'red' }}>Sign In</Title>
      <Form
        name="signIn"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input a valid email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" danger htmlType="submit" block>
            Sign In
          </Button>
        </Form.Item>
        Create an account ? <Link to="/">Register</Link>
      </Form>
    </div>
  );
};

export default SignIn;
