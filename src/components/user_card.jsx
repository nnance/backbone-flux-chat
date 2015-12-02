import React from 'react';


class UserCard extends React.Component {
  render() {
    return (
      <div className="col-lg-4">
          <div className="contact-box">
              <a href="profile.html">
              <div className="col-sm-4">
                  <div className="text-center">
                      <img alt="image" className="img-circle m-t-xs img-responsive" src={this.props.user.imageURL}/>
                      <div className="m-t-xs font-bold">{this.props.user.title}</div>
                  </div>
              </div>
              <div className="col-sm-8">
                  <h3><strong>{this.props.user.name}</strong></h3>
                  <p><i className="fa fa-map-marker"></i> Riviera State 32/106</p>
                  <address>
                      <strong>{this.props.user.company}</strong><br/>
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

export default UserCard;
