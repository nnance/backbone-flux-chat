// import globals
import 'babel-polyfill';
import './lib/backbonefetch';
import './app/router';

// styles
import '../styles/index.scss';

import {rooms} from './stores/room';
import {users} from './stores/user';
import App from './app/app_controller';

var app = new App(rooms, users);
app.showApp();
