import React from 'react';
import room_actions from '../actions/room';
import user_actions from '../actions/user';

export default class Header extends React.Component {
  showRooms(e) {
    e.preventDefault();
    room_actions.showRooms();
  }

  showUsers(e) {
    e.preventDefault();
    user_actions.showUsers();
  }

  render() {
    return (
      <div className="row border-bottom white-bg">
        <nav className="navbar navbar-static-top" role="navigation">
            <div className="navbar-header">
                <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                    <i className="fa fa-reorder"></i>
                </button>
                <a href="#" className="navbar-brand">Flux Chat Client</a>
            </div>
            <div className="navbar-collapse collapse" id="navbar">
                <ul className="nav navbar-nav">
                    <li>
                        <a aria-expanded="false" role="button" href="#" onClick={this.showRooms.bind(this)}> Rooms</a>
                    </li>
                    <li>
                        <a aria-expanded="false" role="button" href="#" onClick={this.showUsers.bind(this)}> Users</a>
                    </li>
                </ul>
                <ul className="nav navbar-top-links navbar-right">
                    <li>
                        <a href="login.html">
                            <i className="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
    );
  }
}
