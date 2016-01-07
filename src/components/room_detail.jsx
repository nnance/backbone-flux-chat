import React from 'react';


export default class RoomDetail extends React.Component {
  render() {
    return (
      <div className="wrapper wrapper-content">
          <div className="row">
              <div className="col-lg-12">
                  <div className="m-b-md">
                      <a href="#" className="btn btn-white btn-xs pull-right">Edit room</a>
                      <h2>{this.props.room.title}</h2>
                  </div>
                  <dl className="dl-horizontal">
                      <dt>Status:</dt> <dd><span className="label label-primary">Active</span></dd>
                  </dl>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-5">
                  <dl className="dl-horizontal">
                      <dt>Created by:</dt> <dd>Alex Smith</dd>
                      <dt>Messages:</dt> <dd>  162</dd>
                      <dt>Client:</dt> <dd><a href="#"> Zender Company</a> </dd>
                      <dt>Version:</dt> <dd> 	v1.4.2 </dd>
                  </dl>
              </div>
              <div className="col-lg-7" id="cluster_info">
                  <dl className="dl-horizontal" >
                      <dt>Last Updated:</dt> <dd>16.08.2014 12:15:57</dd>
                      <dt>Created:</dt> <dd> 	10.07.2014 23:36:57 </dd>
                      <dt>Participants:</dt>
                      <dd className="room-people">
                      <a href=""><img alt="image" className="img-circle" src="img/a3.jpg"/></a>
                      <a href=""><img alt="image" className="img-circle" src="img/a1.jpg"/></a>
                      <a href=""><img alt="image" className="img-circle" src="img/a2.jpg"/></a>
                      <a href=""><img alt="image" className="img-circle" src="img/a4.jpg"/></a>
                      <a href=""><img alt="image" className="img-circle" src="img/a5.jpg"/></a>
                      </dd>
                  </dl>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12">
                  <dl className="dl-horizontal">
                      <dt>On-line:</dt>
                      <dd>
                          <div className="progress progress-striped m-b-sm">
                              <div style={{width: '60%'}} className="progress-bar"></div>
                          </div>
                          <small>Users current on-line in room <strong>60%</strong>.</small>
                      </dd>
                  </dl>
              </div>
          </div>
      </div>
    );
  }
}
