import { Breadcrumb, Icon } from 'antd';

const Bread = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">
                <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
                <Icon type="user" />
                <span>文章</span>
            </Breadcrumb.Item>
        </Breadcrumb> 
    )
}

export default Bread