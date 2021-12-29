import { Form, Input, Button } from 'antd';
import { Product } from '../types/Product';

type Props = {
  onProductAdd: () => void;
  token: string;
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
    productRequest(p).then((res) => props.onProductAdd());
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={addProduct}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Product Name"
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
        label="Product Price"
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
        label="Image URL"
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
