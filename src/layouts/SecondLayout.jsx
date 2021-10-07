import React, { Fragment } from 'react'

import Layout from 'antd/es/layout'

const { Content } = Layout;

const Dashboard = (props) => {
    return (
        <Fragment>
            <h1>Second Layout</h1>
            <Content className="main">
                {props.children}
            </Content>
        </Fragment>
    )
}

export default Dashboard