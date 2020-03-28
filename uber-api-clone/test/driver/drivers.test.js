const assert = require('assert');
const app = require('../../src');
const request = require('supertest')(app);
const { Driver } = require('../../src/models');

describe('Add new driver [api endpoint]', () => {
  it('should add new driver', async () => {
    const response = await request.post('/api/v1/drivers').send({
      name: 'Jane',
      email: 'jane@gmail.com'
    });

    assert(response.status === 201);
    assert(response.body.name === 'Jane');
  });

  it('should update existing driver record', async () => {
    const driver = await Driver.create({
      name: 'Joe',
      email: 'joe@gmail.com'
    });

    const response = await request.put(`/api/v1/drivers/${driver._id}`).send({
      name: 'Lola',
      email: 'lola@gmail.com'
    });

    assert(response.status === 200);
    assert(response.body.name === 'Lola');
  });
});
