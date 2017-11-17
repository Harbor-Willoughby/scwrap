import {
  applyMiddleware,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import rootReducer from './reducers/index';
import sagas from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware, logger)(createStore)

const store = createStoreWithMiddleware(rootReducer);

// then run the saga
sagaMiddleware.run(sagas);

export default store;
