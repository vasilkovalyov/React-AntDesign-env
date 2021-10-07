import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useSelector } from 'react-redux'

import routes from '../constants/routes'


const RedirectRoute = ({component: Component, layout: Layout, ...rest}) => {
    const isPrivate = false

    return <Route {...rest} render = { (props) => {
        return isPrivate ? (
                <Layout>
                    <Component {...props} {...rest} />
                </Layout>
            ) : <Redirect to={routes.HOME} />
        }
    }>
    </Route>
};


export default RedirectRoute;