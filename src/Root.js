import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import * as modules from 'store/modules';

const reducers = combineReducers(modules);

const store = createStore(reducers);

const Root = () => {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </Provider>
    );
}

export default Root;
