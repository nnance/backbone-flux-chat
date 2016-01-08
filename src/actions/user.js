import Backbone from 'backbone';
import dispatcher from '../dispatcher';

const showUsers = 'SHOW_USERS';
const filterUsers = 'FILTER_USERS';
const loginUser = 'LOGIN_USER';

module.exports = {
  SHOW_USERS: showUsers,
  FILTER_USERS: filterUsers,
  LOGIN_USER: loginUser,

  showUsers: function() {
    Backbone.history.navigate('/user', {trigger: true});
    dispatcher.dispatch({
      type: showUsers
    });
  },

  setFilter: function(value) {
    dispatcher.dispatch({
      type: filterUsers,
      filter: value
    });
  },

  loginUser: function(name, remember) {
    dispatcher.dispatch({
      type: loginUser,
      name: name,
      remember: remember
    });
  }

};
