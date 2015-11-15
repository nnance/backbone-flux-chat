import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Backbone from 'backbone';
import ControlButtonGroup from '../../../src/app/components/control_btn_group';
import session from '../../../src/stores/session';

function render() {
  return TestUtils.renderIntoDocument(<ControlButtonGroup
    model={session}
  />);
}

function getTagNodes(instance, tag) {
  return TestUtils
          .scryRenderedDOMComponentsWithTag(instance, tag)
          .map((entry) => React.findDOMNode(entry))
}

function getDisabledButtons(instance) {
  return getTagNodes(instance, 'button')
          .filter((entry) => entry.getAttribute('disabled') !== null);
}

function getEnableddButtons(instance) {
  return getTagNodes(instance, 'button')
          .filter((entry) => entry.getAttribute('disabled') === null);
}

describe('Control Button Group View', function() {
  let instance;
  jsdom();

  describe('When session state is not active', function(){
    before(() => instance = render());

    it('should render 4 buttons', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'btn');
      expect(entries.length).to.equal(4);
    });

    it('should render 3 buttons disabled', function() {
      const entries = getDisabledButtons(instance);
      expect(entries.length).to.equal(3);
    });

    it('should have active start button', function() {
      const entries = getEnableddButtons(instance)
                        .filter((entry) => entry.textContent === 'Start')
      expect(entries.length).to.equal(1);
    });
  });

  describe('when session state is active', function() {
    before(function(){
      session.isActive = true;
      instance = render();
    });

    it('should render 3 buttons enabled', function() {
      const entries = getDisabledButtons(instance);
      expect(entries.length).to.equal(1);
    });

    it('should have active start button', function() {
      const entries = getEnableddButtons(instance)
                        .filter((entry) => entry.textContent === 'End')
      expect(entries.length).to.equal(1);
    });
  });
});
