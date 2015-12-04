import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import jsdom from 'mocha-jsdom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import RoomList from '../../src/components/room_list';
import Rooms from '../../src/stores/room';
import Session from '../../src/stores/session';
import actions from '../../src/actions/room';
import data from '../stores/data/room';

let expect = chai.expect;
chai.use(sinonChai);

describe('Room List View', function() {
  let instance, rooms, session;
  jsdom();

  before(function(){
    rooms = new Rooms();
    session = new Session();    
  });

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<RoomList session={session} rooms={rooms}/>);
  });

  afterEach(() => React.unmountComponentAtNode(React.findDOMNode(instance).parentNode));

  describe('When room list is empty', function(){
    it('should have an unordered list', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'table');
      expect(entries.length).to.equal(1);
    });

    it('should render no list items', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'tr');
      expect(entries.length).to.equal(0);
    });
  });


  describe('When room list has items', function(){

    before(() => rooms.add(data.rooms));
    after(() => rooms.reset());

    it('should render a list of items', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'tr');
      expect(entries.length).to.equal(2);
    });

    it('list item should have testing text', function() {
      const entry = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'tr');
      const node = React.findDOMNode(entry[0]);
      expect(node.children[1].children[0].innerHTML).to.equal('testing');
    });

    describe('When filter is set to filtered', function() {
      before(() => session.roomFilter = 'filtered');
      after(() => session.clear());

      it('should render only 1 item', function() {
        const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'tr');
        expect(entries.length).to.equal(1);
      });
    });

    describe('When a row is clicked', function() {
      it('should trigger router navigate when clicked', function(){
        const stub = sinon.stub(actions, 'selectRoom');
        const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'a');
        const node = React.findDOMNode(entries[1]);

        TestUtils.Simulate.click(node);

        stub.restore();
        expect(stub).to.have.been.calledWith(rooms.at(0));
      });
    });
  });
});
