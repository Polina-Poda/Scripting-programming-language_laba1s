const app = require('./app_Laba1_server1');
const supertest = require('supertest');
const request = supertest(app);

it('має бути Hello Word', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello Word');
    return 0;
}); 
