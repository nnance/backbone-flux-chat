import React from 'react';


export default class Footer extends React.Component {
  toTop(ev) {
    ev.preventDefault();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="footer">
        <div className="pull-right">
            10GB of <strong>250GB</strong> Free.
        </div>
        <div>
            <strong>Copyright</strong> Example Company &copy; 2014-2015
        </div>
      </div>
    );
  }
}
