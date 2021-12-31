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
  it('Create user endpoint should return status code 401', async () => {
    const response = await request.post(`${endpoint}/`);
    expect(response.status).toBe(401);
  });
  // update
  it('Update user endpoint should return status code 401', async () => {
    const response = await request.put(`${endpoint}/1`);
    expect(response.status).toBe(401);
  });
  // signup
  it('Signup endpoint should return status code 200', async () => {
    const response = await request.post(`${endpoint}/signup`);
    expect(response.status).toBe(200);
  });
  // signup
  it('Signup endpoint should return token with code 200 if successfully register the user', async () => {
    const response = await request
      .post(`${endpoint}/signup`)
      .send({ email: 'islam@mail.com', password: 'pass123' });
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
  // login
  it('Login endpoint should return status code 401 if request missing required fields', async () => {
    const response = await request.post(`${endpoint}/login`);
    expect(response.status).toBe(401);
  });
  // login
  it('Login endpoint should return status code 404 if user not found', async () => {
    const response = await request
      .post(`${endpoint}/login`)
      .send({ email: 'ahmed@mail.com', password: 'Password' });
    expect(response.status).toBe(404);
  });
  // login
  it('Login endpoint should return status code 404 if user credential wrong', async () => {
    const response = await request
      .post(`${endpoint}/login`)
      .send({ email: 'islam@mail.com', password: 'Password' });
    expect(response.status).toBe(404);
  });
  // login
  it('Login endpoint should return status code 200 if user credential is right', async () => {
    const response = await request
      .post(`${endpoint}/login`)
      .send({ email: 'islam@mail.com', password: 'pass123' });
    expect(response.status).toBe(200);
  });
  // delete
  it('Delete user endpoint should return status code 401', async () => {
    const response = await request.delete(`${endpoint}/1`);
    expect(response.status).toBe(401);
  });
});
