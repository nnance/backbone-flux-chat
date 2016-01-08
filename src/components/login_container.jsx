import React from 'react';
import actions from '../actions/user';


export default class Detail extends React.Component {
  login(e) {
    e.preventDefault();
    actions.loginUser(this.refs.name.value, this.refs.remember.checked);
  }

  render() {
    return (
      <div className="fh-content fh-fixed-nav fh-fixed-footer">
        <div className="container fh-container">
          <div className="panel panel-default">
            <div className="panel-body">
              <form style={{paddingTop: 40, paddingRight: 240, paddingBottom: 80, paddingLeft: 240}}>
                <h2>Please sign in</h2>
                <label className="sr-only">Name</label>
                <input ref="name" className="form-control" placeholder="Name" required autofocus/>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" ref="remember"/> Remember me
                  </label>
                </div>
                <a href="#" className="btn btn-lg btn-primary btn-block" onClick={this.login.bind(this)}>Sign in</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
