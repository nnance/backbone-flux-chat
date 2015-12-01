import React from 'react';
import UserList from '../../components/user_list';
import { users } from '../../stores/user';
import session from '../../stores/session';


export default class Container extends React.Component {

  render() {
    return (
      <div className="wrapper wrapper-content animated fadeInRight">
        <UserList collection={users}/>
      </div>
    );
  }
}
