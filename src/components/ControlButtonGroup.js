import React from 'react';
// import backboneConnection from '../../shared/backboneConnection';
// import TodoActions from '../TodoActions';


module.exports = React.createClass({
  setFilter: function(e) {
    // TodoActions.filter(e.target.value);
  },

  getFilter: function() {
    return this.props.model.get('filter');
  },

  render: function() {
    return <div>
      <button className="btn btn-default">Start</button>
      <button className="btn btn-default">Audio</button>
      <button className="btn btn-default">View Only</button>
      <button className="btn btn-default">End</button>
    </div>
  }
});

// module.exports = backboneConnection(TodoFilter)
