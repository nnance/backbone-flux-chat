import React from 'react';


class BasicFilter extends React.Component {
  filterList(event) {
    this.props.filterAction(event.target.value);
  }

  render() {
    return (
      <input type="text" placeholder="Search" className="input-sm form-control" onChange={this.filterList.bind(this)}></input>
    );
  }
}

class AddButtonFilter extends BasicFilter {
  triggerAdd() {
    this.props.addAction(this.refs.filter.value);
  }

  render() {
    var addButton;
    if (this.props.addText) {
      addButton = <button type="button" className="btn btn-sm btn-primary" onClick={this.triggerAdd.bind(this)}>{this.props.addText}</button>;
    }

    return (
      <div className="input-group">
        <input type="text" placeholder="Search" className="input-sm form-control" onChange={this.filterList.bind(this)} ref="filter"></input>
        <span className="input-group-btn">
          {addButton}
        </span>
      </div>
    );
  }
}

export default class FilterInput extends React.Component {
  render() {
    return (
      <div>
        {this.props.addAction ? <AddButtonFilter {...this.props}/> : <BasicFilter {...this.props}/>}
      </div>
    );
  }
}
