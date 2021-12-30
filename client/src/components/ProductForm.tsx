import { Form, Input, Button, notification } from 'antd';
import { Product } from '../types/Product';

type Props = {
  onProductAdd: () => void;
  token: string;
};

const openNotification = (message: string) => {
  notification.open({
    message: 'Something went wrong!',
    description: message,
  });
};

function ProductForm(props: Props) {
  const productRequest = async (prod: Product) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/api/products`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          authorization: `beacon ${props.token}`,
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(prod),
      },
    );
    const res = await response.json();
    return res;
  };
  const addProduct = (p: Product) => {
    productRequest(p)
      .then((res) => {
        if (res.err) {
          openNotification(res.err);
        } else {
          props.onProductAdd();
        }
      })
      .catch((err) => {
        openNotification(err.err);
      });
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={addProduct}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input product name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            required: true,
            message: 'Please input product price!',
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="Category"
        name="category"
        rules={[
          {
            required: true,
            message: 'Please input product category!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Image"
        name="image_url"
        rules={[
          {
            required: true,
            message: 'Please input product image!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ProductForm;
