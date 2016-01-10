import Backbone from 'backbone';
import dispatcher from '../dispatcher';

const showUsers = 'SHOW_USERS';
const filterUsers = 'FILTER_USERS';
const loginUser = 'LOGIN_USER';
const logoutUser = 'LOGOUT_USER';
const userConnected = 'USER_CONNECTED'

module.exports = {
  SHOW_USERS: showUsers,
  FILTER_USERS: filterUsers,
  LOGIN_USER: loginUser,
  LOGOUT_USER: logoutUser,
  USER_CONNECTED: userConnected,

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
  },

  logoutUser: function() {
    dispatcher.dispatch({
      type: logoutUser
    });
  },

  userConnected: function(socketId) {
    dispatcher.dispatch({
      type: userConnected,
      socketId: socketId
    });
  }

};
