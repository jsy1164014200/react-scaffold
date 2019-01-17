import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./redux/store.js";

import Main from "./containers/main/main.jsx"
ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route component={Main}></Route> 
            </Switch>
        </HashRouter> 
    </Provider>
    ), document.getElementById('root'));

