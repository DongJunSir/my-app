import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
// import Hello from './components/StatefulHello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { EnthusiasmAction } from './actions/index';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1, 
  languageName: 'TypeScript',
});

import Hello from './containers/index'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
