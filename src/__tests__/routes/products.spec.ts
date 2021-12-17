import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

const endpoint = `/api/products`;

/*
 * Test endpoint using supertest
 */
describe('Test products endpoint responses', () => {
  // index
  it('Get all products endpoint should return status code 200', async () => {
    const response = await request.get(`${endpoint}/`);
    expect(response.status).toBe(200);
  });
  // show
  it('Get product endpoint should return status code 200', async () => {
    const response = await request.get(`${endpoint}/1`);
    expect(response.status).toBe(200);
  });
  // create
  it('Create product endpoint should return status code 401', async () => {
    const response = await request.post(`${endpoint}/`);
    expect(response.status).toBe(401);
  });
  // update
  it('Update product endpoint should return status code 401', async () => {
    const response = await request.put(`${endpoint}/1`);
    expect(response.status).toBe(401);
  });
  // delete
  it('Delete product endpoint should return status code 401', async () => {
    const response = await request.delete(`${endpoint}/1`);
    expect(response.status).toBe(401);
  });
});
