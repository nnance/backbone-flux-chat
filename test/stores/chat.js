import { expect } from 'chai';
import { users } from '../../src/stores/user';
import { chats } from '../../src/stores/chat';
import user from './data/user';
import data from './data/chat';

describe('Chat Store', function() {
  before(function() {
    users.add(user.users);
    chats.add(data.chats.filter((chat) => chat.room === 1));
  });

  after(function() {
    users.reset();
    chats.reset();
  });

  describe('when initialized', function() {
    it('should have 5 items', function(){
      expect(chats.length).to.equal(5);
    });
  });

  describe('When filtered with a valid filter', function() {
    var entries;

    before(() => entries = chats.filteredByName('Smith'));

    it('should return 2 item', function() {
      expect(entries.length).to.equal(2);
    });

    it('the remaining item should contain a name of Smith', function() {
      expect(entries[0].user.name.indexOf('Smith')).to.be.above(0);
    });
  });

  describe('When filtered with an empty filter', function() {
    var entries;

    before(() => entries = chats.filteredByName(''));

    it('should return 5 items', function() {
      expect(entries.length).to.equal(5);
    });
  });
});
