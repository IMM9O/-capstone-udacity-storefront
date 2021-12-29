import { Form, Input, Button, Spin } from 'antd';

import AppLayout from '../containers/Layout/Layout';
import { useAuth } from '../hooks/useAuth';
import { Status } from '../hooks/useProvideAuth';
import { User } from '../types/User';

export default function Login() {
  const auth = useAuth();

  const onFinish = (values: User) => {
    console.log('Success:', values);
    auth.signin(values);
  };

  return (
    <AppLayout>
      <h1>Login Page</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
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
          <Button type="primary" htmlType="submit">
            {auth.status === Status.FETCH && <Spin />} Submit
          </Button>
        </Form.Item>
      </Form>
    </AppLayout>
  );
}
