import Backbone from 'backbone';
import Dispatcher from '../dispatcher';

function dispatchHandler(action) {
  if (this.actionHandlers && Array.isArray(this.actionHandlers)) {
    var actHandler = this.actionHandlers.find((a) => a.type === action.type)
    if (actHandler && actHandler.handler) {
      actHandler.handler.call(this,action);
    }
  }
}

class BaseModel extends Backbone.Model {
  initialize() {
    this.dispatchHandler = dispatchHandler;
    this.dispatchToken = Dispatcher.register(this.dispatchHandler.bind(this));
  }
}

class BaseCollection extends Backbone.Collection {
  initialize() {
    this.dispatchHandler = dispatchHandler;
    this.dispatchToken = Dispatcher.register(this.dispatchHandler.bind(this));
  }
}

module.exports = {
  BaseModel: BaseModel,
  BaseCollection: BaseCollection
}
