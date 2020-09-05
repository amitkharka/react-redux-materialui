import React from 'react';
import Routes from './Routes';

let App = () => (
    <Routes />
);

if (process.env.NODE_ENV === 'development') {
    if (module) {
        const { hot } = require('react-hot-loader');
        App = hot(module)(App);
    }
}

export default App;
