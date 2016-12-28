import { combineReducers } from 'redux';
import users from './users';

const todoApp = combineReducers({
    users
});

export default todoApp;