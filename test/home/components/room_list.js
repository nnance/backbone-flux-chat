import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import bro from 'jsdom-test-browser';
import Backbone from 'backbone';
import RoomList from '../../../src/home/components/room_list';

describe('room_list View', function() {
  let instance;

  before(function (done) { bro.newBrowser(done); });

  describe('When room list is empty', function(){
    beforeEach(function() {
      instance = TestUtils.renderIntoDocument(<RoomList
        collection={new Backbone.Collection()}
      />);
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
});
