/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id: 'ARG',
  name: 'Argentina',
  imgFlag:'https://es.wikipedia.org/wiki/Bandera_de_la_Argentina#/media/Archivo:Flag_of_Argentina.svg',
  continent: 'Americas',
  capital: 'Buenos Aires'
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it('should get 200', () =>
      agent.get('/countries?continent=Americas').expect(200)
    );
    it('should get 404 if the continent doesn´t exist', () =>
      agent.get('/countries?continent=China').expect(404)
    );
    it('should get 404 if the country doesn´t exist', () =>
      agent.get('/countries?name=Europe').expect(404)
    );
  });
});
