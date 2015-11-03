import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import bro from 'jsdom-test-browser';
import Backbone from 'backbone';
import ControlButtonGroup from '../../src/components/ControlButtonGroup';


describe('ControlButtonGroup View', function() {
  let instance;

  before(function (done) { bro.newBrowser(done); });

  describe('When displaying all todos', function(){
    beforeEach(function() {
      instance = TestUtils.renderIntoDocument(<ControlButtonGroup/>);
    });

    it('should render 4 buttons', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
      expect(entries.length).to.equal(4);
    });
  });
});
