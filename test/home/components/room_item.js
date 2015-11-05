import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import bro from 'jsdom-test-browser';
import Backbone from 'backbone';
import RoomItem from '../../../src/home/components/room_item';
import Room from '../../../src/stores/room_model';

let expect = chai.expect;
chai.use(sinonChai);

function render(room) {
  return TestUtils.renderIntoDocument(<RoomItem
    model={room}
  />);
}

describe('Room Item View', function() {
  let instance;
  let room = new Room({id: 1, title: 'Testing'});

  before((done) => bro.newBrowser(done));

  describe('With a model', function(){
    before(() => instance = render(room));

    it('should render a list item', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'li');
      expect(entries.length).to.equal(1);
    });

    it('should trigger router navigate when clicked', function(){
      const spy = sinon.spy(Backbone.history, 'navigate');
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'li');
      const node = React.findDOMNode(entries[0]);

      TestUtils.Simulate.click(node.children[0]);
      Backbone.history.navigate.restore();

      expect(spy).to.have.been.calledWith('#room/1');
    });
  });
});
