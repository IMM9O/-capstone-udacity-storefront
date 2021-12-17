import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

const endpoint = `/api/orders/`;

/*
 * Test endpoint using supertest
 */
describe('Test orders endpoint responses', () => {
  it('Get all user orders endpoint should return status code 200', async done => {
    const response = await request.get(endpoint+5);
    expect(response.status).toBe(200);
    done();
  });
});
