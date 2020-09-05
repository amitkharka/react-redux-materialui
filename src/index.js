import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import './index.scss';

const store = configureStore();

const withProvider = (children) => (
    <Provider store={store}>
        {children}
    </Provider>
);

ReactDOM.render(withProvider(<App />),
    document.getElementById('root')
);