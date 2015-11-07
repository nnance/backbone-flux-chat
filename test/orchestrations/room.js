import { expect } from 'chai';
import Backbone from 'backbone';
import constants from '../../src/constants/room';
import orchestrations from '../../src/orchestrations/store';
import {rooms, session} from '../../src/stores/room';

describe('Room Orchestrations', function() {
  after(function() {
    rooms.reset();
    session.clear();
  });

  describe('When receiving add room message', function() {
    before(() => Backbone.trigger(constants.ROOM_ADD,{title: 'testing'}));

    after(() => rooms.reset());

    it('should have 1 item with title testing', function(){
      expect(rooms.length).to.equal(1);
      expect(rooms.at(0).title).to.equal('testing');
    });

    describe('When adding second room', function() {
      before(() => Backbone.trigger(constants.ROOM_ADD,{title: 'other'}));

      it('should have 2 items', function() {
        expect(rooms.length).to.equal(2);
      });
    })
  });

  describe('When receiving select room message', function() {
    const room = new Backbone.Model({title: 'testing'});
    before(() => Backbone.trigger(constants.ROOM_SELECTED, {room: room}));

    it('should have room selected in session', function(){
      expect(session.activeRoom).to.equal(room);
    });
  });

  describe('When receiving filter message with initilaized collection', function() {
    before(() => Backbone.trigger(constants.ROOM_FILTER,{filter: 'filtered'}));

    it('should have filter set', function(){
      expect(session.roomFilter).to.equal('filtered');
    });
  })
});
