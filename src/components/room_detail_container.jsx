import React from 'react';
import RoomDetail from './room_detail';

export default class Detail extends React.Component {

  render() {
    const room = this.props.session.activeRoom;

    return (
      <div className="fh-content fh-fixed-nav fh-fixed-footer">
        <div className="container fh-container">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-lg-12">
                  <RoomDetail room={room}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
