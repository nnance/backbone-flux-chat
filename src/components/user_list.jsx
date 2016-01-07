import React from 'react';
import UserCard from './user_card';

export default class UserList extends React.Component {
  render() {
    const filter = this.props.sessionStore.getSession().userFilter;
    return (
        <div className="row">
          {this.props.userStore.filteredByName(filter).map((user) =>
            <UserCard user={user} key={user.id}/>
          )}
        </div>
    );
  }
}
