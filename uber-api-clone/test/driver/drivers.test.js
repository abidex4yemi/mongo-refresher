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

  it('should delete a driver using specific driver id', async () => {
    const driver = await Driver.create({
      name: 'Jojo',
      email: 'jojo@gmail.com'
    });

    const response = await request.delete(`/api/v1/drivers/${driver._id}`);

    assert(response.status === 200);
    assert(`${response.body._id}` === `${driver._id}`);
  });

  it('should find driver near specified location', async () => {
    const seattleDriver = await Driver.create({
      name: 'seattle driver',
      email: 'seattle@test.com',
      location: { type: 'Point', coordinates: [-222.4759902, 47.1647628] }
    });

    const miamiDriver = await Driver.create({
      name: 'miami driver',
      email: 'miami@test.com',
      location: { type: 'Point', coordinates: [-80.253, 25.791] }
    });

    const response = await request.get('/api/v1/drivers?lng=-80.253&lat=25');
    console.log(response.body);
  });
});
