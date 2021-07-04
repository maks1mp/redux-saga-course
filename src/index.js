import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router'
import App from './pages/App';
import store from './redux';
import {history} from './redux/reducers';

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <Switch>
              <Route path='/' exact>
                  <App />
              </Route>
          </Switch>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
