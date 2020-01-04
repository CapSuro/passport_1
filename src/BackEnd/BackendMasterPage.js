import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { PassportRegistration } from './PassportRegistration';
import { Switch, Route } from 'react-router-dom';
import { AuthPrompt } from './../Auth/AuthPromp';


const axios = require('axios');

const { Header, Content, Footer, Sider } = Layout;


export class BackendMasterPage extends React.Component {
    state = {
        collapsed: false,
        username: 'XACTHUC1',
        password: 'XACTHUC1',
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
                        {this.props.isAuthenticated &&
                            <Menu.Item key="2">
                                <Link to="/resident">
                                    <Icon type="logout" />
                                    <span>Log Out</span>
                                </Link>
                            </Menu.Item>
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#001529' }}>
                        <h1 style={{ color: 'white' }}>PASSPORT REGISTRATION</h1>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <PassportRegistration {...this.props} username={this.state.username}
                                password={this.state.password} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Passport Demo ©2019</Footer>
                </Layout>
            </Layout>
        );
    }
}