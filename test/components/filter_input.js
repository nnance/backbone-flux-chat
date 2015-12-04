import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import jsdom from 'mocha-jsdom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Backbone from 'backbone';
import FilterInput from '../../src/components/filter_input';

let expect = chai.expect;
chai.use(sinonChai);

const setFilter = sinon.stub();
const addRoom = sinon.stub();

describe('Room Filter View', function() {
  let instance;
  jsdom();

  describe('With no filter set', function(){
    before(() => {
      instance = TestUtils.renderIntoDocument(<FilterInput filterAction={setFilter} addText='Add Room' addAction={addRoom}/>);
    });

    it('should render an input node', function() {
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'input');
      expect(entries.length).to.equal(1);
    });

    it('should trigger action on change', function(){
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'input');
      const node = React.findDOMNode(entries[0]);
      node.value = 'filtered';
      TestUtils.Simulate.change(node);

      expect(setFilter).to.have.been.calledWith('filtered');
    });

    it('should trigger action on add', function(){
      var entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'input');
      var node = React.findDOMNode(entries[0]);
      node.value = 'reactjs';

      entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
      node = React.findDOMNode(entries[1]);
      TestUtils.Simulate.click(node);

      expect(addRoom).to.have.been.calledWith('reactjs');
    });

  });
});
