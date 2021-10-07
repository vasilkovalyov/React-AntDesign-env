import React, { useEffect, useState } from 'react'
import './assets/styles/main.less'

import { useDispatch} from 'react-redux'
import actions from './redux/actions'

import routes from './constants/routes'

import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import { Home } from './views/public'
import { About } from './views/private'

// layouts
import { MainLayout, SecondLayout } from './layouts'
import AppRoute from './views/AppRoute.jsx'
import PrivateRoute from './views/PrivateRoute.jsx'


const App = () => {
    return (
        <div id="wrapper">
            <Router>
                <Switch>
                    <AppRoute exact path={routes.HOME} component={Home} layout={MainLayout} />
                    <PrivateRoute exact path={routes.ABOUT} component={About} layout={SecondLayout} />
                </Switch>
            </Router>
        </div>
    )
}

export default App