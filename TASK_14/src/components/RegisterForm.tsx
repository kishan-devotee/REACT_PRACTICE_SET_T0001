import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const RegistrationForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    alert("Success!");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    alert("Failed! try again.");
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Title level={3} style={{ textAlign: "center", color: "red" }}>
        Register
      </Title>
      <Form
        name="registration"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "red", borderColor: "red" }}
          >
            Register
          </Button>
        </Form.Item>
        Already have an account ? <Link to="/signIn">SignIn</Link>
      </Form>
    </div>
  );
};

export default RegistrationForm;
