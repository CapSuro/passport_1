import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { PassportRegistration } from './PassportRegistration';
import { LoginForm } from './LoginForm';

const axios = require('axios');

const { Header, Content, Footer, Sider } = Layout;


export class BackendMasterPage extends React.Component {
    state = {
        collapsed: false,
        username: undefined,
        role: undefined,
        logined: false
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    updateLogin = (checked, username, role) => {
        this.setState({
            logined: checked,
            username: username,
            role: role
        });
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Link to="/passportadmin/registration">
                                <Icon type="ant-design" />
                                <span>Passport Registration</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/resident">
                                <Icon type="fund" />
                                <span>Resident</span>
                            </Link>
                        </Menu.Item>
                        {this.state.logined && <Menu.Item key="3">
                            <Link to="/passport">
                                <Icon type="logout" />
                                <span>Log Out</span>
                            </Link>
                        </Menu.Item>}
                        {this.state.logined === false && <Menu.Item key="4">
                            <Link to="/passport">
                                <Icon type="arrow-left" />
                                <span>Back</span>
                            </Link>
                        </Menu.Item>}
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#001529' }}>
                        <h1 style={{ color: 'white' }}>PASSPORT REGISTRATION</h1>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        {this.state.logined === false ? <LoginForm updateLogin={this.updateLogin} /> : <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <PassportRegistration {...this.props} username={this.state.username}
                                password={this.state.username} role={this.state.role} />
                        </div>}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Passport Demo ©2019</Footer>
                </Layout>
            </Layout>
        );
    }
}