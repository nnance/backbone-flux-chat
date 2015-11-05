import Backbone from 'backbone';
import RoomModel from './room_model';

class RoomCollection extends Backbone.Collection {

  get model() {
    return RoomModel;
  }

  get url() {
    return 'api/rooms';
  }
}

module.exports = new RoomCollection();
