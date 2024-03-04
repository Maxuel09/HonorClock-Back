import request from 'supertest';
import  app   from '../index';
import  {connect}  from '../database/conection';


test('Get /users', async () => {
    // await connect();
    const response = await request(app).get('/HC/users');
    console.log(response.status)
    expect(response.status).toBe(200);
})

// afterAll(async () => {
//     await (await connect.close());
//    });