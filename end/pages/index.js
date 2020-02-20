import React, {useState} from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import Bread from '../components/Bread'
import {Button, Col, Row, List, Icon} from 'antd'
import '../static/style/pages/index.css'
import axios from 'axios'

const Home = (list) => {
    // console.log(list)
    const [ mylist, setMylist] = useState(
        list.data
    )

    return (
  <>
    <Head>
      <title>我的主页</title>
    </Head>
    <Header></Header>
    <Row className="comm-main" type="flex" justify="center">
      
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}> 
      <Bread />
        <List
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={ item=> (
                <List.Item>
                    <div className="list-title">{item.title}</div>
                    <div className="list-icon">
                        <span><Icon type="calendar" />{item.addTime}</span>
                        <span><Icon type="folder" />{item.typeName}</span>
                        <span><Icon type="plus" />{item.view_count}人</span>
                    </div>
                    <div className="list-context">
                        {item.introduce}
                    </div>
                </List.Item>
            )}
        >

        </List>
      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
              <Author></Author>
      </Col>
    </Row>
    <Footer />
  </>
    )
}
export default Home

//next的ige
Home.getInitialProps = async() => {
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getArticleList').then(
      (res) => {
        // console.log(res)
        resolve(res.data)
      }
    )
  })
  return await promise
}