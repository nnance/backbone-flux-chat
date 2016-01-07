import Backbone from 'backbone';
import dispatcher from '../dispatcher';

const showUsers = 'SHOW_USERS';
const filterUsers = 'FILTER_USERS';

module.exports = {
  SHOW_USERS: showUsers,
  FILTER_USERS: filterUsers,

  showUsers: function() {
    Backbone.history.navigate('/user', {trigger: true});
    dispatcher.dispatch({
      type: showUsers,
    });
  },

  setFilter: function(value) {
    dispatcher.dispatch({
      type: filterUsers,
      filter: value
    });
  }

};
