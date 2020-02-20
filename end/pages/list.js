import React, {useState} from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Bread from '../components/Bread'
import {Button, Col, Row, List, Icon} from 'antd'

const Listpage = () => {
    const [ mylist, setMylist] = useState(
        [
            {title: 'Tech是个人博客', context: '帮助个人成长的平台'},
            {title: 'Tech是个人博客'}
        ]
    )

    return (
  <>
    <Head>
      <title>List</title>
    </Head>
    <Header></Header>
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}> 
        <Bread />
        <List
            itemLayout="horizontal"
            dataSource={mylist}
            renderItem={item=> (
                <List.Item>
                    <div className="list-title">{item.title}</div>
                    <div className="list-icon">
                        <span><Icon type="calendar" />2018</span>
                        <span><Icon type="folder" />项目</span>
                        <span><Icon type="plus" />1000人</span>
                    </div>
                    <div className="list-context">
                        {item.context}
                    </div>
                </List.Item>
            )}
        >

        </List>
      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>

      </Col>
    </Row>
  </>
    )
}
export default Listpage
