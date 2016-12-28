import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore } from 'redux';
import CleanCode from './reducers';
import App from './components/App.jsx';

let store = createStore(CleanCode);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={App}></IndexRoute>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('pragProgCleanCodeContainer')
);