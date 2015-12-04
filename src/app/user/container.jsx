import React from 'react';
import UserList from '../../components/user_list';
import FilterInput from '../../components/filter_input';
import actions from '../../actions/user';


export default class Container extends React.Component {

  render() {
    return (
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="ibox">
          <div className="ibox-title">
            <h5>Users</h5>
          </div>
          <div className="ibox-content">
            <FilterInput filterAction={actions.setFilter}/>
          </div>
        </div>
        <UserList users={this.props.users} session={this.props.session}/>
      </div>
    );
  }
}
