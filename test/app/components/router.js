import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import React from 'react';
import Backbone from 'backbone';
import TestUtils from 'react-addons-test-utils';
import Body from '../../../src/app/components/body';
import router from '../../../src/stores/router';

describe('Router View', function() {
  let instance;
  jsdom();

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<Body model={router}/>);
  });

  afterEach(() => React.unmountComponentAtNode(React.findDOMNode(instance).parentNode));

  describe('With a missing model', function(){
    it('should render div element', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      expect(entries.length).to.equal(1);
    });
  });

  describe('With a visible compinent set', function(){
    var component = React.createClass({
      render: function() {
        return <div><ul><li>test</li></ul></div>
      }
    });

    before(() => router.visibleComponent = component);

    it('should render ul element', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'ul');
      expect(entries.length).to.equal(1);
    });
  });

});
