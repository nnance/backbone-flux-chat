import Backbone from 'backbone';
require('babel-polyfill');
require('./router');
import BackboneFetch from './lib/backbonefetch';
import app from './app/app_controller';

// styles
import '../styles/index.scss';

BackboneFetch(Backbone);
app.showApp();
