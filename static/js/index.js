import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App.jsx';

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={App}></IndexRoute>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('pragProgCleanCodeContainer')
);