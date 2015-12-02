import React from 'react';
import UserList from '../../components/user_list';
import { users } from '../../stores/user';


export default class Container extends React.Component {

  render() {
    return (
      <div className="wrapper wrapper-content animated fadeInRight">
        <UserList users={users}/>
      </div>
    );
  }
}
