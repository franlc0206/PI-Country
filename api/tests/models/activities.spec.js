const { Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Activity.sync({ force: true }));
    describe('difficulty', () => {
      it('should throw an error if difficulty it´s different to 1, 2, 3, 4 or 5', (done) => {
        Activity.create({difficulty:'6'})
          .then(() => done(new Error('The difficulty its has to be 1, 2, 3, 4 or 5')))
          .catch(() => done());
      });
      it('should throw an error if the season doesn´t exist', () => {
        Activity.create({season:'Winteerr'})
        .then(() => done(new Error('The season doesn´t exist')))
      });
    });
  });
});
