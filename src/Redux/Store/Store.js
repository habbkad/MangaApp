import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import MangaData from '../Reducers/MangaData';
import MangaGenre from '../Reducers/MangaGenre';

const store = createStore(combineReducers({MangaData, MangaGenre}));

export default store;
