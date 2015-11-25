import BackboneRouteControl from 'backbone-route-control';
import app from './controllers/app';
import room from './controllers/room';


class Body extends BackboneRouteControl {
  routes() {
    return {
      '': 'app#showHome',
      'detail': 'room#showDetail'
    }
  }
}

module.exports = new Body({
  controllers: {
    app: app,
    room: room
  }
});
