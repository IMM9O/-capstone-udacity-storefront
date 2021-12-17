import { OrderStore } from '../../models/Order';
import { UserStore } from '../../models/User';
import { User } from '../../types/User';
import { resetSequence } from '../helpers/truncate';

const store = new OrderStore();
const userStore = new UserStore();

describe('Orders Model', () => {
  let user: User;
  beforeAll(async (done) => {
    await resetSequence('users');
    await resetSequence('orders');
    user = await userStore.create({
      firstname: 'Islam',
      lastname: 'M',
      password: 'Password',
    });
    console.log(user)
    done();
  });

  afterAll(async (done) => {
    await userStore.delete(1);
    await resetSequence('users');
    await resetSequence('orders');
    done();
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
      user_id: user.id as number,
      status: 'active',
    });
    expect(result).toEqual({
      id: 1,
      user_id: 1,
      status: 'active',
    });
  });

  it('getUserOrders method should return a list of orders made by one user', async () => {
    const result = await store.getUserOrders(user.id as number);
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
    const result = await store.getUserActiveOrders(user.id as number);
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
    const result = await store.getUserCompletedOrders(
      user.id as number,
    );
    expect(result).toEqual([
      {
        id: 1,
        user_id: 1,
        status: 'completed',
      },
    ]);
  });

  it('delete method should remove the order', async () => {
    store.delete(1);
    const result = await store.getUserOrders(user.id as number);
    expect(result).toEqual([]);
  });
});
