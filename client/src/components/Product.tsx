import { Card } from 'antd';

const { Meta } = Card;
interface Props {
  image_url: string;
  name: string;
  price: number;
}

function Product(props: Props): JSX.Element {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={props.name} src={props.image_url} />}
    >
      <Meta title={props.name} description={props.price} />
    </Card>
  );
}

export default Product;
