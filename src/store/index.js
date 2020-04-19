import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReduces from './modules/rootReduces';
import rootSaga from './modules/rootSaga';

const sagaMinitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMinitor });

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(
      console.tron.createEnhancer(),
      applyMiddleware(sagaMiddleware)
    )
    : applyMiddleware(sagaMiddleware);

const store = createStore(rootReduces, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
