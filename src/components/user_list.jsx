import React from 'react';
import BackboneReact from '../lib/backbonereact';
import UserCard from './user_card';

class UserList extends React.Component {
  bindings() {
    return [this.props.users, this.props.session];
  }

  render() {
    const filter = this.props.session.userFilter;
    return (
        <div className="row">
          {this.props.users.filteredByName(filter).map((user) =>
            <UserCard user={user}/>
          )}
        </div>
    );
  }
}

export default BackboneReact(UserList);
