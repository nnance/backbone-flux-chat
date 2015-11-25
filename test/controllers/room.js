import { expect } from 'chai';
import Backbone from 'backbone';
import actions from '../../src/actions/room';
import controller from '../../src/controllers/room';
import {rooms, session} from '../../src/stores/room';

describe('Room Orchestrations', function() {
  after(function() {
    rooms.reset();
    session.clear();
  });

  describe('When receiving add room message', function() {
    before(() => actions.addRoom('testing'));

    after(() => rooms.reset());

    it('should have 1 item with title testing', function(){
      expect(rooms.length).to.equal(1);
      expect(rooms.at(0).title).to.equal('testing');
    });

    describe('When adding second room', function() {
      before(() => actions.addRoom('other'));

      it('should have 2 items', function() {
        expect(rooms.length).to.equal(2);
      });
    })
  });

  describe('When receiving select room message', function() {
    const room = new Backbone.Model({title: 'testing'});
    before(() => actions.selectRoom(room));

    it('should have room selected in session', function(){
      expect(session.activeRoom).to.equal(room);
    });
  });

  describe('When receiving filter message with initilaized collection', function() {
    before(() => actions.setFilter('filtered'));

    it('should have filter set', function(){
      expect(session.roomFilter).to.equal('filtered');
    });
  })
});
