import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

const endpoint = `/api/users`;

/*
 * Test endpoint using supertest
 */
describe('Test users endpoint responses', () => {
  // index
  it('Get all users endpoint should return status code 401', async () => {
    const response = await request.get(`${endpoint}/`);
    expect(response.status).toBe(401);
  });
  // show
  it('Get user endpoint should return status code 401', async () => {
    const response = await request.get(`${endpoint}/1`);
    expect(response.status).toBe(401);
  });
  // create
  it('Create user endpoint should return status code 200', async () => {
    const response = await request.post(`${endpoint}/`);
    expect(response.status).toBe(200);
  });
  // update
  it('Update user endpoint should return status code 401', async () => {
    const response = await request.put(`${endpoint}/1`);
    expect(response.status).toBe(401);
  });
  // delete
  it('Delete user endpoint should return status code 401', async () => {
    const response = await request.delete(`${endpoint}/1`);
    expect(response.status).toBe(401);
  });
});
