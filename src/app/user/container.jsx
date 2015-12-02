import React from 'react';
import UserList from '../../components/user_list';
import Filter from '../../components/user_filter';
import { users } from '../../stores/user';
import session from '../../stores/session';


export default class Container extends React.Component {

  render() {
    return (
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="ibox">
          <div className="ibox-title">
              <h5>Users</h5>
          </div>
          <div className="ibox-content">
            <Filter/>
          </div>
        </div>
        <UserList users={users} session={session}/>
      </div>
    );
  }
}
