import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

const endpoint = `/api/orders`;

/*
 * Test endpoint using supertest
 */
describe('Test orders endpoint responses', () => {
  it('Get all user orders endpoint should return status code 401 if no token in header', async () => {
    const response = await request.get(`${endpoint}/1`);
    expect(response.status).toBe(401);
  });
  it('Get all completed user orders endpoint should return status code 401 if no token in header', async () => {
    const response = await request.get(`${endpoint}/completed/1`);
    expect(response.status).toBe(401);
  });
  it('Get all active user orders endpoint should return status code 401 if no token in header', async () => {
    const response = await request.get(`${endpoint}/active/1`);
    expect(response.status).toBe(401);
  });
  it('Create order endpoint should return status code 401 if no token in header', async () => {
    const response = await request.post(`${endpoint}/`);
    expect(response.status).toBe(401);
  });
  it('Get order endpoint should return status code 401 if no token in header', async () => {
    const response = await request.get(`${endpoint}/1`);
    expect(response.status).toBe(401);
  });
  it('Update order endpoint should return status code 401 if no token in header', async () => {
    const response = await request.put(`${endpoint}/1`);
    expect(response.status).toBe(401);
  });
  it('Delete order endpoint should return status code 401 if no token in header', async () => {
    const response = await request.put(`${endpoint}/1`);
    expect(response.status).toBe(401);
  });
  it('Add products to order endpoint should return status code 401 if no token in header', async () => {
    const response = await request.post(`${endpoint}/1/products`);
    expect(response.status).toBe(401);
  });
  it('Get order products endpoint should return status code 401 if no token in header', async () => {
    const response = await request.get(`${endpoint}/1/products`);
    expect(response.status).toBe(401);
  });
});
