import { expect } from 'chai';
import Chats from '../../src/stores/chat';
import data from './data/chat';

describe('Chat Store', function() {
  let chats;

  before(function() {
    chats = new Chats();
    chats.add(data.chats.filter((chat) => chat.room === 1));
  });

  describe('when initialized', function() {
    it('should have 5 items', function(){
      expect(chats.length).to.equal(5);
    });
  });

  describe('When filtered with a valid filter', function() {
    var entries;

    before(() => entries = chats.filteredByUser(3));

    it('should return 2 item', function() {
      expect(entries.length).to.equal(2);
    });
  });

  describe('When filtered with an empty filter', function() {
    var entries;

    before(() => entries = chats.filteredByUser());

    it('should return 5 items', function() {
      expect(entries.length).to.equal(5);
    });
  });
});
