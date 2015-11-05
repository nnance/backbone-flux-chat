import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import bro from 'jsdom-test-browser';
import Header from '../../../src/app/components/header';

describe('Header View', function() {
  let instance;

  before((done) => bro.newBrowser(done));

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<Header/>);
  });

  it('should render h1 element', function() {
    const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'h1');
    expect(entries.length).to.equal(1);
  });
});
