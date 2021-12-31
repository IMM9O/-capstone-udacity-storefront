import ProductCard from '../../components/ProductCard';
import { Product } from '../../types/Product';

import './Products.css';

interface Props {
  products: Product[];
}

function Products(props: Props) {
  return (
    <div className="products-container">
      {props.products.map((p) => (
        <ProductCard
          key={p.id}
          image_url={p.image_url as string}
          name={p.name}
          price={p.price}
        />
      ))}
    </div>
  );
}

export default Products;
