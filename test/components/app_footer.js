import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Footer from '../../src/components/app_footer';

describe('Footer View', function() {
  let instance;
  jsdom();

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<Footer/>);
  });

  it('should render footer element', function() {
    const entries = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'footer');
    expect(entries.length).to.equal(1);
  });
});
