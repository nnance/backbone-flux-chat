import { expect } from 'chai';
import Backbone from 'backbone';
import room from '../../src/orchestrations/store';
import {rooms, session} from '../../src/stores/room';

describe('Room Orchestrations', function() {
  after(() => {
    room.off();
    rooms.reset();
  });

  describe('When handling ADD_ROOM message', function() {
    before(() => Backbone.trigger(constants.ROOM_ADD,{title: 'testing'}));

    it('should have 1 item', function(){
      expect(rooms.length).to.equal(1);
    });
  });
});
