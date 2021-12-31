import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

const ProductMock = {
  image_url: 'https://via.placeholder.com/150',
  name: 'Product 1',
  price: 100,
};

describe('Product Card Component Test Suite', () => {
  test('Product Card Should Render Product Image with alt attribute', () => {
    render(<ProductCard {...ProductMock} />);
    expect(screen.getByTestId('image')).toHaveAttribute('alt');
  });
  test('Product Card Should Render Product Name', () => {
    render(<ProductCard {...ProductMock} />);
    expect(screen.getByText(ProductMock.name)).toBeInTheDocument();
  });
  test('Product Card Should Render Product Price', () => {
    render(<ProductCard {...ProductMock} />);
    expect(screen.getByText(ProductMock.price)).toBeInTheDocument();
  });
});
