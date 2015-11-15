import React from 'react';
import Filter from './room_filter';

module.exports = React.createClass({

  render: function() {
    return <div className="wrapper wrapper-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrapper wrapper-content animated fadeInUp">
              <div className="ibox">
                <div className="ibox-title">
                    <h5>All available rooms</h5>
                </div>
                <div className="ibox-content">
                  <Filter/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
});