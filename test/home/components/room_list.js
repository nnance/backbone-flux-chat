import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import bro from 'jsdom-test-browser';
import Backbone from 'backbone';
import RoomList from '../../../src/home/components/room_list';
import rooms from '../../../src/stores/room_collection';

function render() {
  return TestUtils.renderIntoDocument(<RoomList
    collection={rooms}
  />);
}

describe('Room List View', function() {
  let instance;

  before(function (done) { bro.newBrowser(done); });

  describe('When room list is empty', function(){
    before(function(){
      instance = render();
    });

    it('should have an unordered list', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'ul');
      expect(entries.length).to.equal(1);
    });

    it('should render no list items', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'li');
      expect(entries.length).to.equal(0);
    });
  });

  describe('When room list has items', function(){
    before(function() {
      rooms.add({title: 'testing'});
      instance = render();
    });

    it('should render 1 list items', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'li');
      expect(entries.length).to.equal(1);
    });

    it('list item should have testing text', function() {
      const entry = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'li');
      const node = React.findDOMNode(entry[0]);
      expect(node.innerHTML).to.equal('testing');
    });
  });
});
