import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import actions from '../../src/actions/room';
import App from '../../src/app/app_controller';

let expect = chai.expect;
chai.use(sinonChai);

describe('App Controller', function() {

  describe('When created', function() {
    let controller;

    before(function(){
      controller = new App({}, {});
    });

    it('it should exist', function(){
      expect(controller).to.exist;
    });
  });

});
