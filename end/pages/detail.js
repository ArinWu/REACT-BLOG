import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Bread from '../components/Bread'
import { Button, Col, Row, Icon } from 'antd'
import '../static/style/pages/detail.css'

import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
//marked + hightlight
import marked from 'marked'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//数据
import axios from 'axios'

const Detail = (props) => {

  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  // let html = marked()
  // let html = "nihao"

  return (
    <>
    {/* 头部分 */}
      <Head>
        <title>博客详细页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>

      {/* 内容部分  */}
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <Bread />
          <div className="detailed-title">
            博客项目
           </div>
          <div className="list-icon center">

            <span><Icon type="folder" />2010-08</span>
            <span><Icon type="folder" />2010-08</span>
            <span><Icon type="folder" />2010-08</span>
          
          </div>

          <div className="detailed-content">
            <div className="detailed-content" >
                {/* {props.data} */}
            </div>
          </div>

        </Col>
        {/* 目录 */}
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <div className="detailed-nav comm-box">
            <div className="nav-title">文章目录</div>
            <MarkNav
              className="article-menu"
              source={props}
              ordered={false}
            />
          </div>
        </Col>
      </Row>
    </>
  )
}
export default Detail

//Defferent with index.js
Detail.getInitialProps = async() => {
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getArticleListById').then(
      (res) => {
        console.log(res)
        resolve(res.data.data[0])
      }
    )
  }) 
}