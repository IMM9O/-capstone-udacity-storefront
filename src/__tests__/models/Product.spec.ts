import { ProductStore } from '../../models/Product';
import { resetSequence } from '../helpers/truncate';

const store = new ProductStore();

describe('Product Model', () => {
  beforeAll(async () => {
    await resetSequence('products');
  });

  afterAll(async () => {
    await resetSequence('products');
  });

  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  it('should have a update method', () => {
    expect(store.update).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(store.delete).toBeDefined();
  });

  it('create method should add a product', async () => {
    const result = await store.create({
      name: 'Keyboard',
      price: 50,
      category: 'PC',
    });
    expect(result).toEqual({
      id: 1,
      name: 'Keyboard',
      price: 50,
      category: 'PC',
    });
  });

  it('index method should return a list of products', async () => {
    const result = await store.index();
    expect(result).toEqual([
      {
        id: 1,
        name: 'Keyboard',
        price: 50,
        category: 'PC',
      },
    ]);
  });

  it('show method should return the correct product', async () => {
    const result = await store.show(1);
    expect(result).toEqual({
      id: 1,
      name: 'Keyboard',
      price: 50,
      category: 'PC',
    });
  });

  it('delete method should remove the product', async () => {
    store.delete(1);
    const result = await store.index();

    expect(result).toEqual([]);
  });
});
