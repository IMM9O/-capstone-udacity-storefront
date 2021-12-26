import { ProductStore } from '../../models/Product';

describe('Product Model', () => {
  const store = new ProductStore();
  const image_url =
    'https://images.unsplash.com/photo-1640374577565-4cd9da10bb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';

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
      image_url,
    });
    expect(result).toEqual({
      id: 1,
      name: 'Keyboard',
      price: 50,
      category: 'PC',
      image_url,
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
        image_url,
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
      image_url,
    });
  });

  it('delete method should remove the product', async () => {
    await store.delete(1);
    const result = await store.index();

    expect(result).toEqual([]);
  });
});
