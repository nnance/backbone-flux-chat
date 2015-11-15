import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Header from '../../../src/app/components/header';

describe('Header View', function() {
  let instance;
  jsdom();

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<Header/>);
  });

  it('should render h1 element', function() {
    const entries = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'navbar-header');
    expect(entries.length).to.equal(1);
  });
});
