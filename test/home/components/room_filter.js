import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import bro from 'jsdom-test-browser';
import Backbone from 'backbone';
import RoomFilter from '../../../src/home/components/room_filter';
import {rooms} from '../../../src/stores/room';
import constants from '../../../src/constants/room';

let expect = chai.expect;
chai.use(sinonChai);

function render(room) {
  return TestUtils.renderIntoDocument(<RoomFilter/>);
}

describe('Room Filter View', function() {
  let instance;

  before((done) => bro.newBrowser(done));

  describe('With no filter set', function(){
    before(() => instance = render());

    it('should render an input node', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'input');
      expect(entries.length).to.equal(1);
    });

    it('should trigger action on change', function(){
      const spy = sinon.spy(Backbone, 'trigger');

      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'input');
      const node = React.findDOMNode(entries[0]);
      node.value = 'filtered';
      TestUtils.Simulate.change(node);

      Backbone.trigger.restore();
      expect(spy).to.have.been.calledWithMatch(constants.ROOM_FILTER, {value: 'filtered'});
    });

    it('should trigger action on add', function(){
      const spy = sinon.spy(Backbone, 'trigger');

      var entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'input');
      var node = React.findDOMNode(entries[0]);
      node.value = 'reactjs';

      entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
      node = React.findDOMNode(entries[0]);
      TestUtils.Simulate.click(node);

      Backbone.trigger.restore();
      expect(spy).to.have.been.calledWithMatch(constants.ROOM_ADD, {value: 'reactjs'});
    });

  });
});
