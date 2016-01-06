import React from 'react';
import sessionStore from '../stores/session';
import UserList from './user_list';
import FilterInput from './filter_input';
import actions from '../actions/user';


export default class Container extends React.Component {

  render() {
    return (
      <div className="fh-content fh-fixed-nav fh-fixed-footer">
        <div className="container fh-container">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-8 m-t-xs">
                  <h4>User</h4>
                </div>
                <div className="col-xs-4 m-t-sm">
                  <FilterInput filterAction={actions.setFilter}/>
                </div>
              </div>
            </div>
          </div>
          <UserList users={this.props.users} session={sessionStore.getSession()}/>
        </div>
      </div>
    );
  }
}
