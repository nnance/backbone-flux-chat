import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import bro from 'jsdom-test-browser';
import Backbone from 'backbone';
import ControlButtonGroup from '../../../src/app/components/control_btn_group';
import session from '../../../src/stores/session_model';

function getDisabledButtons(instance) {
  return TestUtils
          .scryRenderedDOMComponentsWithTag(instance, 'button')
          .map((entry) => React.findDOMNode(entry))
          .filter((entry) => entry.getAttribute('disabled') !== null);
}

describe('control_btn_grp View', function() {
  let instance;

  before(function (done) { bro.newBrowser(done); });

  describe('When session state is not active', function(){
    beforeEach(function() {
      instance = TestUtils.renderIntoDocument(<ControlButtonGroup
        model={session}
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

  describe('when session state is active', function() {
    beforeEach(function(){
      session.isActive = true;
    });
    it('should render 3 buttons enabled', function() {
      const entries = getDisabledButtons(instance);
      expect(entries.length).to.equal(3);
    });
  });
});
