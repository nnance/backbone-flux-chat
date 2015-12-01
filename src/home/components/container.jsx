import React from 'react';
import Filter from './room_filter';
import RoomList from './room_list';
import { rooms } from '../../../src/stores/room';
import session from '../../../src/stores/session';


export default class Container extends React.Component {

  render() {
    return (
      <div className="wrapper wrapper-content">
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
                    <RoomList model={session} collection={rooms}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
