import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const devEnv = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: devEnv ? console.tron.createSagaMonitor() : null,
});

const enhacer = devEnv
  ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhacer);

sagaMiddleware.run(rootSaga);

export default store;
