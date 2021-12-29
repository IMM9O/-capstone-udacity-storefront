import { render, screen } from '@testing-library/react';
import ProductForm from './ProductForm';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

xdescribe('Product Form Component Test Suite', () => {
  test('Product Form Should Render Product Name Text Field', () => {
    render(<ProductForm token={''} onProductAdd={() => {}} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
  });
  test('Product Form Should Render Product Price Text Filed', () => {
    render(<ProductForm token={''} onProductAdd={() => {}} />);
    expect(screen.getByText('Price')).toBeInTheDocument();
  });
  test('Product Form Should Render Product Image Text Filed', () => {
    render(<ProductForm token={''} onProductAdd={() => {}} />);
    expect(screen.getByText('Image')).toBeInTheDocument();
  });
  test('Product Form Should Render Product Category Text Filed', () => {
    render(<ProductForm token={''} onProductAdd={() => {}} />);
    expect(screen.getByText('Category')).toBeInTheDocument();
  });
});
