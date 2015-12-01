import Backbone from 'backbone';

const showUsers = 'SHOW_USERS';

module.exports = {
  SHOW_USERS: showUsers,

  showUsers: function() {
    Backbone.trigger(showUsers);
  }

};
