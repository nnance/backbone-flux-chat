import Backbone from 'backbone';

const showUsers = 'SHOW_USERS';
const filterUsers = 'FILTER_USERS';

module.exports = {
  SHOW_USERS: showUsers,
  FILTER_USERS: filterUsers,

  showUsers: function() {
    Backbone.trigger(showUsers);
  },

  setFilter: function(value) {
    Backbone.trigger(filterUsers, {
      filter: value
    });
  }

};
