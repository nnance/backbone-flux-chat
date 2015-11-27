import React from 'react';


export default class Detail extends React.Component {

  render() {
    return (
      <div className="wrapper wrapper-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ibox chat-view">
                    <div className="ibox-title">
                        <small className="pull-right text-muted">Last message:  Mon Jan 26 2015 - 18:39:23</small>
                         Chat room panel
                    </div>
                    <div className="ibox-content">
                        <div className="row">
                            <div className="col-md-9 ">
                                <div className="chat-discussion">
                                    <div className="chat-message left">
                                        <img className="message-avatar" src="img/a1.jpg" alt=""/>
                                        <div className="message">
                                            <a className="message-author" href="#"> Michael Smith </a>
											                      <span className="message-date"> Mon Jan 26 2015 - 18:39:23 </span>
                                            <span className="message-content">
                                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="chat-message right">
                                        <img className="message-avatar" src="img/a4.jpg" alt=""/>
                                        <div className="message">
                                            <a className="message-author" href="#"> Karl Jordan </a>
                                            <span className="message-date">  Fri Jan 25 2015 - 11:12:36 </span>
                                            <span className="message-content">
                                              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="chat-message right">
                                        <img className="message-avatar" src="img/a2.jpg" alt=""/>
                                        <div className="message">
                                            <a className="message-author" href="#"> Michael Smith </a>
                                            <span className="message-date">  Fri Jan 25 2015 - 11:12:36 </span>
                                            <span className="message-content">
                                              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="chat-message left">
                                        <img className="message-avatar" src="img/a5.jpg" alt=""/>
                                        <div className="message">
                                            <a className="message-author" href="#"> Alice Jordan </a>
                                            <span className="message-date">  Fri Jan 25 2015 - 11:12:36 </span>
                                            <span className="message-content">
                                              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                              It uses a dictionary of over 200 Latin words.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="chat-message right">
                                        <img className="message-avatar" src="img/a6.jpg" alt=""/>
                                        <div className="message">
                                            <a className="message-author" href="#"> Mark Smith </a>
                                            <span className="message-date">  Fri Jan 25 2015 - 11:12:36 </span>
                                            <span className="message-content">
											                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                              It uses a dictionary of over 200 Latin words.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="chat-users">
                                    <div className="users-list">
                                        <div className="chat-user">
                                            <img className="chat-avatar" src="img/a4.jpg" alt=""/>
                                            <div className="chat-user-name">
                                                <a href="#">Karl Jordan</a>
                                            </div>
                                        </div>
                                        <div className="chat-user">
                                            <img className="chat-avatar" src="img/a1.jpg" alt=""/>
                                            <div className="chat-user-name">
                                                <a href="#">Monica Smith</a>
                                            </div>
                                        </div>
                                        <div className="chat-user">
                                            <span className="pull-right label label-primary">Online</span>
                                            <img className="chat-avatar" src="img/a2.jpg" alt=""/>
                                            <div className="chat-user-name">
                                                <a href="#">Michael Smith</a>
                                            </div>
                                        </div>
                                        <div className="chat-user">
                                            <span className="pull-right label label-primary">Online</span>
                                            <img className="chat-avatar" src="img/a3.jpg" alt=""/>
                                            <div className="chat-user-name">
                                                <a href="#">Janet Smith</a>
                                            </div>
                                        </div>
                                        <div className="chat-user">
                                            <img className="chat-avatar" src="img/a5.jpg" alt=""/>
                                            <div className="chat-user-name">
                                                <a href="#">Alice Smith</a>
                                            </div>
                                        </div>
                                        <div className="chat-user">
                                            <img className="chat-avatar" src="img/a6.jpg" alt=""/>
                                            <div className="chat-user-name">
                                                <a href="#">Monica Cale</a>
                                            </div>
                                        </div>
                                        <div className="chat-user">
                                            <img className="chat-avatar" src="img/a2.jpg" alt=""/>
                                            <div className="chat-user-name">
                                                <a href="#">Mark Jordan</a>
                                            </div>
                                        </div>
                                        <div className="chat-user">
                                            <span className="pull-right label label-primary">Online</span>
                                            <img className="chat-avatar" src="img/a3.jpg" alt=""/>
                                            <div className="chat-user-name">
                                                <a href="#">Janet Smith</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="chat-message-form">
                                    <div className="form-group">
                                        <textarea className="form-control message-input" name="message" placeholder="Enter message text"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
