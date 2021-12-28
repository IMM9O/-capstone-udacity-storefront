import { Form, Input, Button, Spin } from 'antd';

import AppLayout from '../containers/Layout/Layout';
import { Status, useToken } from '../hooks/useToken';

import { User } from '../types/User';

export default function Signup() {
  const { status, onSubmit } = useToken('signup');

  const onFinish = (values: User) => {
    console.log('Success:', values);
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <AppLayout>
      <h1>Register Form</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastname"
          rules={[
            {
              required: true,
              message: 'Please input your Last name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={status === Status.FETCH}
          >
            {status === Status.FETCH && <Spin />} Submit
          </Button>
        </Form.Item>
      </Form>
    </AppLayout>
  );
}
