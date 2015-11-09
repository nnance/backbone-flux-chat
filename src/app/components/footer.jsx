import React from 'react';


module.exports = React.createClass({
    toTop: function(ev) {
        ev.preventDefault();
        window.scrollTo(0, 0);
    },

    render: function() {
        return <div className="footer">
            <div className="pull-right">
                10GB of <strong>250GB</strong> Free.
            </div>
            <div>
                <strong>Copyright</strong> Example Company &copy; 2014-2015
            </div>
        </div>
    }
});
