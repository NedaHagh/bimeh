import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router } from 'react-router-dom';
import { logger } from 'redux-logger';
import reducer from './reducers';
import Main from './components/Main';
import Test from "./components/Test";
import rootSaga from './sagas';



const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

render(
  <CookiesProvider>
  <Router>
  <Provider store={store}>
    <Main/>
    {/* <Test/> */}
  </Provider>
  </Router>
  </CookiesProvider>
  ,
  document.getElementById('root'),
);


