import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

const endpoint = `/api/products/`;

/*
 * Test endpoint using supertest
 */
describe('Test products endpoint responses', () => {
  it('Get all products endpoint should return status code 200', async done => {
    const response = await request.get(endpoint);
    expect(response.status).toBe(200);
    done();
  });
});
