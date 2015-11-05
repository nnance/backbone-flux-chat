import Backbone from 'backbone';

class RoomModel extends Backbone.Model {
  get title() {
    return this.get('title');
  }
}

module.exports = RoomModel;
