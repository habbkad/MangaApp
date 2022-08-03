import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import MangaData from '../Reducers/MangaData';
import MangaGenre from '../Reducers/MangaGenre';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BookmarkReducer from '../Reducers/BookmarkReducer';
import SearchReducer from '../Reducers/SearchReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  MangaData,
  MangaGenre,
  BookmarkReducer,
  SearchReducer,
});

const persist_reducers = persistReducer(persistConfig, reducers);

export const store = createStore(persist_reducers);

export const persistor = persistStore(store);
