import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';
import RoomList from '../../../src/home/components/room_list';
import RoomItem from '../../../src/home/components/room_item';
import {rooms, session} from '../../../src/stores/room';
import actions from '../../../src/actions/room';
import data from '../../stores/data/room';

let expect = chai.expect;
chai.use(sinonChai);

function render() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<RoomList
    model={session}
    collection={rooms}
  />);
  return renderer;
}

describe('Room List View', function() {

  // jsdom();

  describe('When room list is empty', function(){
    var renderer, output;

    before(function() {
      renderer = render();
      output = renderer.getRenderOutput();
    });

    it('should have a table', function() {
      const entries = ShallowTestUtils.findAllWithType(output, 'table');
      expect(entries.length).to.equal(1);
    });

    it('should not have table rows', function() {
      const entries = ShallowTestUtils.findAllWithType(output, RoomItem);
      expect(entries.length).to.equal(0);
    });
  });

  describe('When room list has items', function(){
    var renderer, output;

    before(function() {
      rooms.add(data.rooms);
      renderer = render();
      output = renderer.getRenderOutput();
    });

    after(() => rooms.reset());

    it('should render a list of items', function() {
      const entries = ShallowTestUtils.findAllWithType(output, RoomItem);
      expect(entries.length).to.equal(2);
    });

    it('list item should have testing text', function() {
      const entry = ShallowTestUtils.findAllWithType(output, RoomItem);
      expect(entry[0].props.model.attributes.title).to.equal('testing');
    });

    describe('When filter is set to filtered', function() {
      before(function() {
        session.roomFilter = 'filtered';
        ShallowTestUtils.getMountedInstance(renderer).forceUpdate();
        output = renderer.getRenderOutput();
      });

      after(() => session.roomFilter = '');

      it('should render only 1 item', function() {
        const entries = ShallowTestUtils.findAllWithType(output, RoomItem);
        expect(entries.length).to.equal(1);
      });

      it('list item should have filtered text', function() {
        const entry = ShallowTestUtils.findAllWithType(output, RoomItem);
        expect(entry[0].props.model.attributes.title).to.equal('filtered');
      });
    });
/*
    describe('When a row is clicked', function() {
      before(() => instance = render());

      it('should trigger router navigate when clicked', function(){
        const stub = sinon.stub(actions, 'selectRoom');
        const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'a');
        const node = React.findDOMNode(entries[2]);

        TestUtils.Simulate.click(node);

        stub.restore();
        expect(stub).to.have.been.calledWith(rooms.at(0));
      });
    });
  */
  });
});
