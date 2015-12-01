import React from 'react';
import BackboneReact from '../lib/backbonereact';


class UserCard extends React.Component {

  render() {
    return (
      <div className="col-lg-4">
          <div className="contact-box">
              <a href="profile.html">
              <div className="col-sm-4">
                  <div className="text-center">
                      <img alt="image" className="img-circle m-t-xs img-responsive" src={this.props.model.imageURL}/>
                      <div className="m-t-xs font-bold">{this.props.model.title}</div>
                  </div>
              </div>
              <div className="col-sm-8">
                  <h3><strong>{this.props.model.name}</strong></h3>
                  <p><i className="fa fa-map-marker"></i> Riviera State 32/106</p>
                  <address>
                      <strong>{this.props.model.company}</strong><br/>
                      795 Folsom Ave, Suite 600<br/>
                    San Francisco, CA 94107<br/>
                      <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
              </div>
              <div className="clearfix"></div>
              </a>
          </div>
      </div>
    );
  }
}

export default BackboneReact(UserCard);
