const request = require('supertest');
const app = require('../orders-service');

describe('Orders Service', () => {
  it('should return a list of orders', async () => {
    const response = await request(app).get('/orders');
    expect(response.status).toBe(200);
    expect(response.body.orders).toEqual(['Order 1', 'Order 2', 'Order 3']);
  });
});
