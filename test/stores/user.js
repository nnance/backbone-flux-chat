import { expect } from 'chai';
import { users } from '../../src/stores/user';
import data from './data/user';

describe('Room Store', function() {
  before(() => users.add(data.users));

  after(() => users.reset());

  describe('when initialized', function() {
    it('should have 6 items', function(){
      expect(users.length).to.equal(6);
    });
  });

  describe('When filtered with a valid filter', function() {
    var entries;

    before(() => entries = users.filteredByName('Smith'));

    it('should return 2 item', function() {
      expect(entries.length).to.equal(2);
    });

    it('the remaining item should contain a name of Smith', function() {
      expect(entries[0].name.indexOf('Smith')).to.be.above(0);
    });
  });

  describe('When filtered with an empty filter', function() {
    var entries;

    before(() => entries = users.filteredByName(''));

    it('should return 6 items', function() {
      expect(entries.length).to.equal(6);
    });
  });
});
