import React from 'react';


export default class Header extends React.Component {
  render() {
    return (
      <div className="row border-bottom white-bg">
        <nav className="navbar navbar-static-top" role="navigation">
            <div className="navbar-header">
                <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                    <i className="fa fa-reorder"></i>
                </button>
                <a href="#" className="navbar-brand">Flux Chat Client</a>
            </div>
            <div className="navbar-collapse collapse" id="navbar">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a aria-expanded="false" role="button" href="#"> Home</a>
                    </li>
                    <li>
                        <a aria-expanded="false" role="button" href="#detail"> Rooms</a>
                    </li>
                </ul>
                <ul className="nav navbar-top-links navbar-right">
                    <li>
                        <a href="login.html">
                            <i className="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
    );
  }
}
