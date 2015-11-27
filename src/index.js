/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import ReactDOM from 'react-dom';
import App from './app/components/app';
import router from './router';

import '../styles/index.scss';

ReactDOM.render(<App router={router}/>, document.getElementById('root'));
