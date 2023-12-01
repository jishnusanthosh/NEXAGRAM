// src/redux/store.js
import { createStore } from 'redux';
import rootReducer from '../Reducers/Reducer.js'; // Import your root reducer

const store = createStore(rootReducer);

export default store;
