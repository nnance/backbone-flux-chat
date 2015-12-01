import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import React from 'react';
import Backbone from 'backbone';
import TestUtils from 'react-addons-test-utils';
import Body from '../../src/components/app_body';

describe('Body View', function() {
  let instance;
  jsdom();

  afterEach(() => React.unmountComponentAtNode(React.findDOMNode(instance).parentNode));

  describe('With a missing visible component prop', function(){
    before(function() {
      instance = TestUtils.renderIntoDocument(<Body />);
    });

    it('should render div element', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      expect(entries.length).to.equal(1);
    });
  });

  describe('With a visible component set', function(){
    var component = React.createClass({
      render: function() {
        return <div><ul><li>test</li></ul></div>
      }
    });

    before(function() {
      instance = TestUtils.renderIntoDocument(<Body visibleComponent={component}/>);
    });

    it('should render ul element', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'ul');
      expect(entries.length).to.equal(1);
    });
  });

});
