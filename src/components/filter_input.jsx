import React from 'react';


export default class FilterInput extends React.Component {

  filterList(event) {
    this.props.filterAction(event.target.value);
  }

  triggerAdd() {
    this.props.addAction(this.refs.filter.value);
  }

  render() {
    var addButton;
    if (this.props.addText) {
      addButton = <button type="button" className="btn btn-sm btn-primary" onClick={this.triggerAdd.bind(this)}>{this.props.addText}</button>;
    }

    var searchInput;
    if (this.props.addAction) {
      searchInput = <div className="input-group">
          <input type="text" placeholder="Search" className="input-sm form-control" onChange={this.filterList.bind(this)} ref="filter"></input>
            <span className="input-group-btn">
              {addButton}
            </span>
        </div>;
    } else {
      searchInput = <input type="text" placeholder="Search" className="input-sm form-control" onChange={this.filterList.bind(this)} ref="filter"></input>
    }

    return (
      <div className="row m-b-sm m-t-sm">
        <div className="col-md-1">
          <button type="button" id="loading-example-btn" className="btn btn-white btn-sm" ><i className="fa fa-refresh"></i> Refresh</button>
        </div>
        <div className="col-md-11">
          {searchInput}
        </div>
      </div>
    );
  }
}
