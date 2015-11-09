import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import bro from 'jsdom-test-browser';
import Footer from '../../../src/app/components/footer';

describe('Footer View', function() {
  let instance;

  before((done) => bro.newBrowser(done));

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<Footer/>);
  });

  it('should render footer element', function() {
    const entries = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'footer');
    expect(entries.length).to.equal(1);
  });
});
