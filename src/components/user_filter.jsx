import React from 'react';
import actions from '../actions/user';


export default class UserFilter extends React.Component {

  filterList(event) {
    actions.setFilter(event.target.value);
  }

  render() {
    return (
      <div className="row m-b-sm m-t-sm">
        <div className="col-md-1">
          <button type="button" id="loading-example-btn" className="btn btn-white btn-sm" ><i className="fa fa-refresh"></i> Refresh</button>
        </div>
        <div className="col-md-11">
          <input type="text" placeholder="Search" className="input-sm form-control" onChange={this.filterList} ref="filter"></input>
        </div>
      </div>
    );
  }
}
