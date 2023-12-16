const request = require('supertest');
const app = require('../products-service');

describe('Products Service', () => {
  it('should return a list of products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body.products).toEqual(['Product 1', 'Product 2', 'Product 3']);
  });
});
