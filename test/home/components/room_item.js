import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import bro from 'jsdom-test-browser';
import Backbone from 'backbone';
import RoomItem from '../../../src/home/components/room_item';
import {rooms} from '../../../src/stores/room';
import actions from '../../../src/actions/room';

let expect = chai.expect;
chai.use(sinonChai);

function render(room) {
  return TestUtils.renderIntoDocument(<RoomItem
    model={room}
  />);
}

describe('Room Item View', function() {
  let instance;
  let room = new rooms.model(require('../../stores/data/room').rooms[0]);

  before((done) => bro.newBrowser(done));

  describe('With a model', function(){
    before(() => instance = render(room));

    it('should render a list item', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'li');
      expect(entries.length).to.equal(1);
    });

    it('should trigger router navigate when clicked', function(){
      const stub = sinon.stub(actions, 'selectRoom');
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'a');
      const node = React.findDOMNode(entries[0]);

      TestUtils.Simulate.click(node);

      stub.restore();
      expect(stub).to.have.been.calledWith(room);
    });
  });
});
