import { render, screen } from '@testing-library/react';
import Products from './Products';

const ProductsMock = [
  {
    id: 1,
    image_url: 'https://via.placeholder.com/100',
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    image_url: 'https://via.placeholder.com/200',
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    image_url: 'https://via.placeholder.com/500',
    name: 'Product 3',
    price: 500,
  },
];

describe('Product Card Component Test Suite', () => {
  test('Products Should Render First Product Name', () => {
    render(<Products products={ProductsMock} />);
    expect(
      screen.getByText(ProductsMock[0].name),
    ).toBeInTheDocument();
  });
  test('Product Card Should Render Product Price', () => {
    render(<Products products={ProductsMock} />);
    expect(
      screen.getByText(ProductsMock[0].price),
    ).toBeInTheDocument();
  });
});
