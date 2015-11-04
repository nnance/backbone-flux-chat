import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import bro from 'jsdom-test-browser';
import Backbone from 'backbone';
import ControlButtonGroup from '../../src/components/ControlButtonGroup';
import call from '../../src/stores/callmodel';

function getDisabledButtons(instance) {
  return TestUtils
          .scryRenderedDOMComponentsWithTag(instance, 'button')
          .map((entry) => React.findDOMNode(entry))
          .filter((entry) => entry.getAttribute('disabled') !== null);
}

describe('ControlButtonGroup View', function() {
  let instance;

  before(function (done) { bro.newBrowser(done); });

  describe('When call state is on hook', function(){
    beforeEach(function() {
      instance = TestUtils.renderIntoDocument(<ControlButtonGroup
        model={call}
      />);
    });

    it('should render 4 buttons', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'btn');
      expect(entries.length).to.equal(4);
    });

    it('should render 3 buttons disabled', function() {
      const entries = getDisabledButtons(instance);
      expect(entries.length).to.equal(3);
    });
  });

  describe('when call state is off hook', function() {
    beforeEach(function(){
      call.isActive = true;
    });
    it('should render 3 buttons enabled', function() {
      const entries = getDisabledButtons(instance);
      expect(entries.length).to.equal(3);
    });
  });
});
