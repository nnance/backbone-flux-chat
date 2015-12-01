import React from 'react';
import BackboneReact from '../lib/backbonereact';
import UserCard from './user_card';

class UserList extends React.Component {

  render() {
    return (
      <div className="row">
        {this.props.collection.map((user) =>
          <UserCard model={user} />
        )}
      </div>
    );
  }
}

export default BackboneReact(UserList);
