// import globals
import 'babel-polyfill';
import './lib/backbonefetch';

// styles
import '../styles/index.scss';

import Rooms from './stores/room';
import Users from './stores/user';
import Chats from './stores/chat';
import Session from './stores/session';

import App from './app/app_controller';
import Chat from './app/chat/chat_controller';
import Router from './router';

var session = new Session();
var rooms = new Rooms();
var users = new Users();
var chats = new Chats();

var chat = new Chat(session, chats, rooms, users);
var router = new Router(session, rooms, users, chat);

var app = new App(router, session, rooms, users);
app.showApp();
