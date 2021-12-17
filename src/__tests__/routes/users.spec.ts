import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

const endpoint = `/api/users/`;

/*
 * Test endpoint using supertest
 */
describe('Test users endpoint responses', () => {
  it('Get all users endpoint should return status code 200', async done => {
    const response = await request.get(endpoint);
    expect(response.status).toBe(200);
    done();
  });
});