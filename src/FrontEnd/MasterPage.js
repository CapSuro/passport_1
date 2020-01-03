import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;


export class MasterPage extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Link to="/passport/information">
                                <Icon type="info-circle" />
                                <span>Information</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/passport/form">
                                <Icon type="form" />
                                <span>Form</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Link to="/passport/monitor">
                                <Icon type="monitor" />
                                <span>Monitor</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a {this.props.currentPage}.</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Passport Demo ©2019</Footer>
                </Layout>
            </Layout>
        );
    }
}