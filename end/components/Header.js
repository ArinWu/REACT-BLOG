import React from 'react'
import '../static/style/components/header.css'

import { Row, Col, Menu, Icon } from 'antd'
const Header = () => (
    <div className="header">
        <Row type='flex' justify='center'>
            <Col xs={0} sm={0} md={0} lg={12} xl={10}>
                <span className="header-logo">Tech</span>
                <span className="header-txt">Life</span>

            </Col>

            <Col className="menu-div" xs={25} sm={24} md={24} lg={8} xl={8}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <Icon type="home" />
                        首页
                    </Menu.Item>
                    <Menu.Item key="code">
                        <Icon type="code"  />
                        Tech
                    </Menu.Item>
                    <Menu.Item key="life">
                        <Icon type="youtube"/>
                        生活
                    </Menu.Item>
                </Menu>
                
            </Col>
        </Row>
    </div>
)

export default Header