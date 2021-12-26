import { useEffect, useState } from 'react';
import AppLayout from '../containers/Layout/Layout';
import ProductsContainer from './../containers/Products/Products';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const products = await response.json();
      return products;
    };
    fetchProducts().then(res => setProducts(res));
  }, []);
  return (
    <AppLayout>
      <h1>Products page</h1>
      <ProductsContainer products={products} />
    </AppLayout>
  );
}

export default Products;
