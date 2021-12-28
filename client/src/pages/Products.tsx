import { useEffect, useState } from 'react';
import AppLayout from '../containers/Layout/Layout';
import ProductsContainer from './../containers/Products/Products';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_SERVER}/api/products`,
      );
      const res = await response.json();
      return res;
    };
    fetchProducts().then((res) => setProducts(res));
  }, []);
  return (
    <AppLayout>
      <h1>Products page</h1>
      <ProductsContainer products={products} />
    </AppLayout>
  );
}

export default Products;
