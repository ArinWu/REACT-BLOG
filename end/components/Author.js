import React from 'react';

import '../static/style/pages/author.css'

import { Divider, Avatar } from 'antd';

const Author =()=> {
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="http://q5so0yx7t.bkt.clouddn.com/66486460_460587988123659_7713384534854598656_n.jpg"></Avatar>
                
            </div>
            <div className="author-introduction">
                没有理由，没有tag
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account" />
                <Avatar size={28} icon="github" className="account" />
                <Avatar size={28} icon="github" className="account" />
            </div>
        </div>
    )
}
export default Author