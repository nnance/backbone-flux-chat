import React from 'react';
import RoomDetail from '../../components/room_detail';

export default class Detail extends React.Component {

  render() {
    const room = this.props.session.activeRoom;

    return (
      <div className="wrapper wrapper-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <RoomDetail room={room}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
