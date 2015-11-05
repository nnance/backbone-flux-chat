import React from 'react';


module.exports = React.createClass({
  render: function() {
    const activeCall = this.props.model.isActive;
    return <div>
      <button className="btn btn-default" disabled={activeCall}>Start</button>
      <button className="btn btn-default" disabled={!activeCall}>Participate</button>
      <button className="btn btn-default" disabled={!activeCall}>View Only</button>
      <button className="btn btn-default" disabled={!activeCall}>End</button>
    </div>
  }
});
