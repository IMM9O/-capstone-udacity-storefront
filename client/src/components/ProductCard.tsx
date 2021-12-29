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
      style={{
        width: 240,
        border: '1px solid',
        padding: '5px',
      }}
      cover={
        <img
          data-testid="image"
          alt={props.name}
          src={props.image_url}
          height={200}
          style={{ objectFit: 'cover' }}
        />
      }
    >
      <Meta title={props.name} description={props.price} />
    </Card>
  );
}

export default Product;
