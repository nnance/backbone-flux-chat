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
    var activeCall = this.props.model.isActive();
    return <div>
      <button className="btn btn-default" disabled={activeCall}>Start</button>
      <button className="btn btn-default" disabled={!activeCall}>Audio</button>
      <button className="btn btn-default" disabled={!activeCall}>View Only</button>
      <button className="btn btn-default" disabled={!activeCall}>End</button>
    </div>
  }
});

// module.exports = backboneConnection(TodoFilter)
