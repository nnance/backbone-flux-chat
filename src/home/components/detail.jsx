import React from 'react';
import session from '../../stores/session';
import RoomDetail from './room_detail';

export default class Detail extends React.Component {

  render() {
    return (
      <div className="wrapper wrapper-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <RoomDetail model={session.activeRoom}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
