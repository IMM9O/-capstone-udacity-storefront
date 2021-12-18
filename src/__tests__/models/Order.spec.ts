import { OrderStore } from '../../models/Order';
import { UserStore } from '../../models/User';
import { resetSequence } from '../helpers/truncate';

const store = new OrderStore();
const userStore = new UserStore();

describe('Orders Model', () => {
  beforeAll(async done => {
    await resetSequence('orders');
    await resetSequence('users');
    done();
  });

  afterAll(async done => {
    await resetSequence('orders');
    await resetSequence('users');
    done();
  });

  it('create user method should create a new user', async () => {
    const result = await userStore.create({
      firstname: 'Islam',
      lastname: 'Muhammad',
      password: 'pass123',
    });
    expect(result.id).toEqual(1);
    expect(result.firstname).toEqual('Islam');
    expect(result.lastname).toEqual('Muhammad');
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

  it('create method should add an order', async () => {
    const result = await store.create({
      user_id: 1,
      status: 'active',
    });
    expect(result).toEqual({
      id: 1,
      user_id: 1,
      status: 'active',
    });
  });

  it('getUserOrders method should return a list of orders made by one user', async () => {
    const result = await store.getUserOrders(1);
    expect(result).toEqual([
      {
        id: 1,
        user_id: 1,
        status: 'active',
      },
    ]);
  });

  it('show method should return the correct order', async () => {
    const result = await store.show(1);
    expect(result).toEqual({
      id: 1,
      user_id: 1,
      status: 'active',
    });
  });

  it('getUserActiveOrders method should return user orders with active status', async () => {
    const result = await store.getUserActiveOrders(1);
    expect(result).toEqual([
      {
        id: 1,
        user_id: 1,
        status: 'active',
      },
    ]);
  });

  it('update method should return the updated order after edit', async () => {
    const result = await store.update({
      id: 1,
      user_id: 1,
      status: 'completed',
    });
    expect(result).toEqual({
      id: 1,
      user_id: 1,
      status: 'completed',
    });
  });

  it('getUserCompletedOrders method should return user orders with competed status', async () => {
    const result = await store.getUserCompletedOrders(1);
    expect(result).toEqual([
      {
        id: 1,
        user_id: 1,
        status: 'completed',
      },
    ]);
  });

  it('delete method should remove the order', async () => {
    await store.delete(1);
    const result = await store.getUserOrders(1);
    expect(result).toEqual([]);
  });

  it('delete user method should remove the user', async () => {
    const deletedUser = await userStore.delete(1);
    expect(deletedUser.id).toEqual(1);
    const result = await userStore.index();
    expect(result).toEqual([]);
  });


});
