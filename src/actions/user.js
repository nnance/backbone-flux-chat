import Backbone from 'backbone';
import Dispatcher from '../dispatcher';

const showUsers = 'SHOW_USERS';
const filterUsers = 'FILTER_USERS';

module.exports = {
  SHOW_USERS: showUsers,
  FILTER_USERS: filterUsers,

  showUsers: function() {
    Backbone.history.navigate('/user', {trigger: true});
  },

  setFilter: function(value) {
    Dispatcher.dispatch({
      type: filterUsers,
      filter: value
    });
  }

};
