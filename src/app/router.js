import Backbone from 'backbone';
import BackboneRouteControl from 'backbone-route-control';
import app from '../orchestrations/app';
import room from '../orchestrations/room';


class Router extends BackboneRouteControl {
  routes() {
    return {
      '': 'app#showHome',
      'detail': 'room#showDetail'
    }
  }
}

module.exports = new Router({
  controllers: {
    app: app,
    room: room
  }
});
